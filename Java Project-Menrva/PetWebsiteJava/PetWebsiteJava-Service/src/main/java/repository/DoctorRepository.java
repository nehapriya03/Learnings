package repository;

import com.google.inject.Inject;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import mapper.DoctorMapper;
import model.Doctor;
import model.ImmutableDoctor;
import org.bson.Document;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.UUID;

public class DoctorRepository {
    private final Logger LOGGER = LoggerFactory.getLogger(DoctorRepository.class);
    private final DoctorMapper doctorMapper;
    private final MongoCollection<Document> mongoCollection;
    private final MongoDatabase mongoDatabase;

    @Inject
    public DoctorRepository(DoctorMapper doctorMapper, MongoDatabase mongoDatabase) {
        this.doctorMapper = doctorMapper;
        this.mongoDatabase = mongoDatabase;
        this.mongoCollection = mongoDatabase.getCollection("doctor");
    }

    public Doctor addDoctor(Doctor doctor) {
        doctor = ImmutableDoctor.copyOf(doctor).withDoctorId(UUID.randomUUID());
        Document document = doctorMapper.doctorToDocument(doctor);
        mongoCollection.insertOne(document);
        LOGGER.info("Doctor has been successfully added to the database");
        return doctor;
    }

    public Doctor getDoctorById(UUID doctorId) {
        Document document = mongoCollection.find(new Document("doctorId", doctorId.toString())).first();
        if (document == null) {
            LOGGER.error("No Doctor found with the given doctorId: {}", doctorId);
            return null;
        }
        LOGGER.info("Doctor details found with doctorId: {}", doctorId);
        return doctorMapper.documentToDoctor(document);
    }

    public Doctor updateDoctorById(Doctor doctor) {
        Document document = doctorMapper.doctorToDocument(doctor);
        mongoCollection.updateOne(new Document("doctorId", doctor.getDoctorId().toString()), new Document("$set", document));
        LOGGER.info("Doctor with doctorId {} has been updated", doctor.getDoctorId());
        return doctor;
    }

    public Doctor deleteDoctorById(Doctor doctor) {
        Document document = doctorMapper.doctorToDocument(doctor);
        mongoCollection.deleteOne(document);
        LOGGER.info("Doctor with doctorId {} has been successfully deleted", doctor.getDoctorId());
        return doctor;
    }
}

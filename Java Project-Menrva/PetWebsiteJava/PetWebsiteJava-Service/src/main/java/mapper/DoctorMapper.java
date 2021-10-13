package mapper;

import model.Doctor;
import model.ImmutableDoctor;
import org.bson.Document;

import java.util.UUID;

public class DoctorMapper {

    public Doctor documentToDoctor(Document document) {
        return ImmutableDoctor.builder()
                .doctorId(UUID.fromString(document.getString("doctorId")))
                .firstName(document.getString("firstName"))
                .lastName(document.getString("lastName"))
                .about(document.getString("about"))
                .charge(document.getDouble("charge"))
                .chargeDuration(document.getString("chargeDuration"))
                .location(document.getString("location"))
                .build();
    }

    public Document doctorToDocument(Doctor doctor) {
        Document document = new Document();
        document.append("doctorId", doctor.getDoctorId().toString());
        document.append("firstName", doctor.getFirstName());
        document.append("lastName", doctor.getLastName());
        document.append("about", doctor.getAbout());
        document.append("charge", doctor.getCharge());
        document.append("chargeDuration", doctor.getChargeDuration());
        document.append("location", doctor.getLocation());
        return document;
    }
}

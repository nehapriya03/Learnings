package repository;

import com.google.inject.Inject;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import mapper.CaretakerMapper;
import model.Caretaker;
import model.ImmutableCaretaker;
import org.bson.Document;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.UUID;

public class CaretakerRepository {

    private final Logger LOGGER = LoggerFactory.getLogger(CaretakerRepository.class);
    private final MongoCollection<Document> mongoCollection;
    private final MongoDatabase mongoDatabase;
    private final CaretakerMapper caretakerMapper;

    @Inject
    public CaretakerRepository(CaretakerMapper caretakerMapper, MongoDatabase mongoDatabase) {
        this.mongoDatabase = mongoDatabase;
        this.mongoCollection = mongoDatabase.getCollection("caretaker");
        this.caretakerMapper = caretakerMapper;
    }

    public Caretaker addCaretaker(Caretaker caretaker) {
        caretaker = ImmutableCaretaker.copyOf(caretaker).withCaretakerId(UUID.randomUUID());
        Document document = caretakerMapper.caretakerToDocument(caretaker);
        mongoCollection.insertOne(document);
        LOGGER.info("Caretaker has been successfully added");
        return caretaker;
    }

    public Caretaker getCaretakerById(UUID caretakerId) {
        Document document = mongoCollection.find(new Document("caretakerId", caretakerId.toString())).first();
        if (document == null) {
            LOGGER.error("caretaker not found with caretaker id {}", caretakerId);
            return null;
        }
        LOGGER.info("caretaker details found with caretakerId {}", caretakerId);
        return caretakerMapper.documentToCaretaker(document);
    }

    public Caretaker updateCaretakerById(Caretaker caretaker) {
        Document document = caretakerMapper.caretakerToDocument(caretaker);
        mongoCollection.updateOne(new Document("caretakerId", caretaker.getCaretakerId().toString()), new Document("$set", document));
        LOGGER.info("Caretaker updated: with caretaker id {}", caretaker.getCaretakerId());
        return caretaker;
    }

    public Caretaker deleteCaretakerById(Caretaker caretaker) {
        Document document = caretakerMapper.caretakerToDocument(caretaker);
        mongoCollection.deleteOne(document);
        LOGGER.info("Caretaker with caretaker id: {} was deleted", caretaker.getCaretakerId());
        return caretaker;

    }
}
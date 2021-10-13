package repository;

import com.google.inject.Inject;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import mapper.NgoMapper;
import model.ImmutableNgo;
import model.Ngo;
import org.bson.Document;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.UUID;

public class NgoRepository {

    private final NgoMapper ngoMapper;
    private final MongoCollection<Document> mongoCollection;
    private final MongoDatabase mongoDatabase;
    private final static Logger LOGGER = LoggerFactory.getLogger(NgoRepository.class);

    @Inject
    public NgoRepository(NgoMapper ngoMapper, MongoDatabase mongoDatabase) {
        this.ngoMapper = ngoMapper;
        this.mongoCollection = mongoDatabase.getCollection("ngo");
        this.mongoDatabase = mongoDatabase;
    }

    public Ngo addNgo(Ngo ngo) {
        ngo = ImmutableNgo.copyOf(ngo).withNgoId(UUID.randomUUID());
        Document document = ngoMapper.ngoToDocument(ngo);
        mongoCollection.insertOne(document);
        LOGGER.info("Ngo has been successfully added");
        return ngo;
    }

    public Ngo getNgoById(UUID ngoId) {
        Document document = mongoCollection.find(new Document("ngoId", ngoId.toString())).first();
        if (document == null) {
            LOGGER.error("Ngo with ngoId {} does not exist", ngoId);
            return null;
        }
        LOGGER.info("Ngo with ngoId {} has been successfully found", ngoId);
        return ngoMapper.documentToNgo(document);
    }

    public Ngo updateNgoById(UUID ngoId, Ngo ngo) {
        Document document = ngoMapper.ngoToDocument(ngo);
        mongoCollection.updateOne(new Document("ngoId",ngo.getNgoId().toString()), new Document("$set",document));
        LOGGER.info("Ngo with ngoId {} has been successfully updated", ngoId);
        return ngoMapper.documentToNgo(document);
    }

    public Ngo deleteNgoById(Ngo ngo)
    {
        Document document = ngoMapper.ngoToDocument(ngo);
        mongoCollection.deleteOne(document);
        LOGGER.info("Ngo with ngoId {} has been deleted successfully", ngo.getNgoId());
        return ngoMapper.documentToNgo(document);

    }
}

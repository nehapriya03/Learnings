package repository;

import com.google.inject.Inject;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import mapper.PetMapper;
import model.ImmutablePet;
import model.Pet;
import org.bson.Document;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.UUID;

public class PetRepository {

    private final Logger LOGGER = LoggerFactory.getLogger(PetRepository.class);
    private final PetMapper petMapper;
    private final MongoDatabase mongoDatabase;
    private final MongoCollection<Document> mongoCollection;

    @Inject
    public PetRepository(PetMapper petMapper, MongoDatabase mongoDatabase) {
        this.petMapper = petMapper;
        this.mongoDatabase = mongoDatabase;
        this.mongoCollection = mongoDatabase.getCollection("pet");
    }

    public Pet addPet(Pet pet) {
        pet = ImmutablePet.copyOf(pet).withPetID(UUID.randomUUID());
        Document document = petMapper.petToDocument(pet);
        mongoCollection.insertOne(document);
        LOGGER.info("Pet has been successfully added");
        return pet;
    }

    public Pet getPetById(UUID petId) {
        Document document = mongoCollection.find(new Document("petId", petId.toString())).first();
        if (document == null) {
            LOGGER.error("Pet with petId {} not found.", petId);
            return null;
        }
        LOGGER.info("Pet with petId {} found", petId);
        return petMapper.documentToPet(document);
    }

    public Pet updatePetById(UUID petId, Pet pet) {
        Document document = petMapper.petToDocument(pet);
        mongoCollection.updateOne(new Document("petId", pet.getPetID().toString()), new Document("$set", document));
        LOGGER.info("Pet with petId {} has been updated successfully", petId);
        return petMapper.documentToPet(document);
    }

    public Pet deletePetById(Pet pet) {
        Document document = petMapper.petToDocument(pet);
        mongoCollection.deleteOne(document);
        LOGGER.info("Pet with petId {} has been deleted successfully", pet.getPetID());
        return petMapper.documentToPet(document);
    }


}

package mapper;

import model.ImmutablePet;
import model.Pet;
import org.bson.Document;

import java.util.UUID;

public class PetMapper {

    public Pet documentToPet(Document document) {
        return ImmutablePet.builder()
                .petID(UUID.fromString(document.getString("petId")))
                .animalType(document.getString("animalType"))
                .breed(document.getString("breed"))
                .ownerId(document.getString("ownerId"))
                .location(document.getString("ownerId"))
                .medicalHistory(document.getString("medicalHistory"))
                .mateStatus(document.getBoolean("mateStatus"))
                .build();
    }

    public Document petToDocument(Pet pet) {
        Document document = new Document();
        document.append("petId", pet.getPetID().toString());
        document.append("animalType", pet.getAnimalType());
        document.append("breed", pet.getBreed());
        document.append("ownerId", pet.getOwnerId());
        document.append("location", pet.getLocation());
        document.append("medicalHistory", pet.getMedicalHistory());
        document.append("mateStatus", pet.getMateStatus());
        return document;
    }
}

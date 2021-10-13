package service;

import com.google.inject.Inject;
import model.Pet;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import repository.PetRepository;

import java.util.UUID;

public class PetService {

    private final Logger LOGGER = LoggerFactory.getLogger(PetService.class);
    private final PetRepository petRepository;

    @Inject
    public PetService(PetRepository petRepository) {
        this.petRepository = petRepository;
    }

    public Pet addPet(Pet pet) {
        return petRepository.addPet(pet);
    }

    public Pet getPetById(UUID petId) {
        return petRepository.getPetById(petId);
    }

    public Pet updatedPetById(UUID petId, Pet pet) {
        if (getPetById(petId) == null) {
            LOGGER.error("Pet with petId {} was not found", petId);
            return null;
        }
        LOGGER.info("Pet with petId {} has been updated successfully", petId);
        return petRepository.updatePetById(petId, pet);
    }

    public Pet deletePetById(UUID petId) {
        Pet pet = getPetById(petId);
        if (pet == null) {
            LOGGER.error("Pet with petId {} was not found", petId);
            return null;
        }
        LOGGER.info("Pet with petId {} has been deleted successfully", petId);
        return petRepository.deletePetById(pet);
    }
}

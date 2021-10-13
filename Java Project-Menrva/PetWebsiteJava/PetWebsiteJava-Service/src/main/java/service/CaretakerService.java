package service;

import com.google.inject.Inject;
import model.Caretaker;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import repository.CaretakerRepository;

import java.util.UUID;

public class CaretakerService {

    public final Logger LOGGER = LoggerFactory.getLogger(CaretakerService.class);
    public final CaretakerRepository caretakerRepository;

    @Inject
    public CaretakerService(CaretakerRepository caretakerRepository) {
        this.caretakerRepository = caretakerRepository;
    }

    public Caretaker addCaretaker(Caretaker caretaker) {
        return caretakerRepository.addCaretaker(caretaker);
    }

    public Caretaker getCaretakerById(UUID caretakerId) {
        return caretakerRepository.getCaretakerById(caretakerId);
    }

    public Caretaker updateCaretakerById(UUID caretakerId, Caretaker caretaker) {
        if (getCaretakerById(caretakerId) == null) {
            LOGGER.error("caretaker with cretakerId {} does not exist.", caretakerId);
            return null;
        }
        return caretakerRepository.updateCaretakerById(caretaker);
    }

    public Caretaker deleteCaretakerById(UUID caretakerId) {
        Caretaker caretaker = getCaretakerById(caretakerId);
        if (caretaker == null) {
            LOGGER.error("caretaker with caretakerId {} does not exist.", caretakerId);
            return null;
        }
        return caretakerRepository.deleteCaretakerById(caretaker);
    }
}

package service;

import com.google.inject.Inject;
import model.Ngo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import repository.NgoRepository;

import java.util.UUID;

public class NgoService {

    private final NgoRepository ngoRepository;
    private static final Logger LOGGER = LoggerFactory.getLogger(NgoService.class);
    //public static final String ERROR_MESSAGE = "An internal server error occurred";

    @Inject
    public NgoService(NgoRepository ngoRepository) {
        this.ngoRepository = ngoRepository;
    }

    public Ngo addNgoById(Ngo ngo) {
        return ngoRepository.addNgo(ngo);
    }

    public Ngo getNgoById(UUID ngoId) {
        return ngoRepository.getNgoById(ngoId);
    }

    public Ngo updateNgoById(UUID ngoId, Ngo ngo) {
        if (getNgoById(ngoId) == null) {
            LOGGER.error("Ngo with NgoId {} was not found", ngoId);
            return null;
        }
        LOGGER.info("Ngo with NgoId {} has been updated successfully", ngoId);
        return ngoRepository.updateNgoById(ngoId, ngo);
    }

    public Ngo deleteNgoById(UUID ngoId) {
        Ngo ngo = getNgoById(ngoId);
        if (ngo == null) {
            LOGGER.error("Ngo with ngoId {} was not found", ngoId);
            return null;
        }
        return ngoRepository.deleteNgoById(ngo);


    }


}

package service;

import com.google.inject.Inject;
import model.Doctor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import repository.DoctorRepository;

import java.util.UUID;

public class DoctorService {
    private final Logger LOGGER = LoggerFactory.getLogger(DoctorService.class);
    private final DoctorRepository doctorRepository;

    @Inject
    public DoctorService(DoctorRepository doctorRepository) {
        this.doctorRepository = doctorRepository;
    }

    public Doctor addDoctor(Doctor doctor) {
        return doctorRepository.addDoctor(doctor);
    }

    public Doctor getDoctorById(UUID doctorId) {
        return doctorRepository.getDoctorById(doctorId);
    }

    public Doctor updateDoctorById(UUID doctorId, Doctor doctor) {
        if (getDoctorById(doctorId) == null) {
            LOGGER.error("Update failed: doctor with given doctorId {} does not exist.", doctorId);
            return null;
        }
        LOGGER.info("Update done: doctor with given doctorId {} has been updated.", doctorId);
        return doctorRepository.updateDoctorById(doctor);
    }

    public Doctor deleteDoctorById(UUID doctorId) {
        Doctor doctor = getDoctorById(doctorId);
        if (doctor == null) {
            LOGGER.error("Delete failed: doctor with doctorId {} not found.", doctorId);
            return null;
        }
        LOGGER.info("Delete successful: doctor with doctorId {} has been deleted", doctorId);
        return doctorRepository.deleteDoctorById(doctor);
    }
}

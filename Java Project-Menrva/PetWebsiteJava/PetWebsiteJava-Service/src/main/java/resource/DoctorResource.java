package resource;

import com.google.inject.Inject;
import model.Doctor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import service.DoctorService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.UUID;

@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@Path("/doctor")
public class DoctorResource {

    private final Logger LOGGER = LoggerFactory.getLogger(DoctorResource.class);
    private final DoctorService doctorService;
    private final String ERROR_MESSAGE = "An internal error has occurred";

    @Inject
    public DoctorResource(DoctorService doctorService) {
        this.doctorService = doctorService;
    }

    @POST
    public Response addDoctor(Doctor doctor) {
        try {
            Doctor createdDoctor = doctorService.addDoctor(doctor);
            return Response.status(Response.Status.OK).entity(createdDoctor).build();
        } catch (Exception exception) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(ERROR_MESSAGE).build();
        }
    }

    @GET
    @Path("/{doctorId}")
    public Response getDoctorById(@PathParam("doctorId") UUID doctorId) {
        try {
            Doctor doctorFound = doctorService.getDoctorById(doctorId);
            if (doctorFound == null) {
                return Response.status(Response.Status.NOT_FOUND).entity("Cannot find Doctor with doctorId " + doctorId).build();
            }

            return Response.status(Response.Status.OK).entity(doctorFound).build();
        } catch (Exception exception) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(ERROR_MESSAGE).build();
        }
    }

    @PUT
    @Path("/{doctorId}")
    public Response updateDoctorById(@PathParam("doctorId") UUID doctorId, Doctor doctor) {
        try {
            if (!doctorId.equals(doctor.getDoctorId())) {
                return Response.status(Response.Status.BAD_REQUEST).entity("Id in the path and request body must be same").build();
            }

            Doctor updatedDoctor = doctorService.updateDoctorById(doctorId, doctor);
            if (updatedDoctor == null) {
                return Response.status(Response.Status.NOT_FOUND).entity("Doctor with doctorId " + doctorId + " does not exist").build();
            }

            return Response.status(Response.Status.OK).entity(updatedDoctor).build();
        } catch (Exception exception) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(ERROR_MESSAGE).build();
        }
    }

    @DELETE
    @Path("/{doctorId}")
    public Response deleteDoctorById(@PathParam("doctorId") UUID doctorId) {
        try {
            Doctor deletedDoctor = doctorService.deleteDoctorById(doctorId);
            if (deletedDoctor == null) {
                return Response.status(Response.Status.NOT_FOUND).entity("delete failed: doctor with doctorId " + doctorId + " not found").build();
            }
            return Response.status(Response.Status.OK).entity(deletedDoctor).build();
        } catch (Exception exception) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(ERROR_MESSAGE).build();
        }
    }


}

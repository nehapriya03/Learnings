package resource;

import com.google.inject.Inject;
import model.Caretaker;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import service.CaretakerService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.UUID;

@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@Path("/caretaker")

public class CaretakerResource {

    private final Logger LOGGER = LoggerFactory.getLogger(CaretakerResource.class);
    private final CaretakerService caretakerService;
    private final String ERROR_MESSAGE = "Internal server error occurred";

    @Inject
    public CaretakerResource(CaretakerService caretakerService) {
        this.caretakerService = caretakerService;
    }

    @POST
    public Response addCaretakerById(Caretaker caretaker) {
        try {
            Caretaker caretakerCreated = caretakerService.addCaretaker(caretaker);
            return Response.status(Response.Status.OK).entity(caretakerCreated).build();
        } catch (Exception exception) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(ERROR_MESSAGE).build();
        }
    }

    @GET
    @Path("/{caretakerId}")
    public Response getCaretakerById(@PathParam("caretakerId") UUID caretakerId) {
        try {
            Caretaker caretaker = caretakerService.getCaretakerById(caretakerId);
            if (caretaker == null) {
                return Response.status(Response.Status.NOT_FOUND).entity("Caretaker not found with caretakerId: " + caretakerId).build();
            }
            return Response.status(Response.Status.OK).entity(caretaker).build();
        } catch (Exception exception) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(ERROR_MESSAGE).build();
        }
    }

    @PUT
    @Path("/{caretakerId}")
    public Response updateCaretakerById(@PathParam("caretakerId") UUID caretakerId, Caretaker caretaker) {
        try {
            if (!caretakerId.equals(caretaker.getCaretakerId())) {
                return Response.status(Response.Status.BAD_REQUEST).entity("Id in the path and request body must be same").build();
            }
            Caretaker caretakerUpdated = caretakerService.updateCaretakerById(caretakerId, caretaker);
            if (caretakerUpdated == null) {
                return Response.status(Response.Status.NOT_FOUND).entity("CaretakerId with caretakerId " + caretakerId + " does not exist").build();
            }
            return Response.status(Response.Status.OK).entity(caretakerUpdated).build();
        } catch (Exception exception) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(ERROR_MESSAGE).build();
        }
    }

    @DELETE
    @Path("/{caretakerId}")
    public Response deleteCaretakerById(@PathParam("caretakerId") UUID caretakerId) {
        try {
            Caretaker caretakerDeleted = caretakerService.deleteCaretakerById(caretakerId);
            if (caretakerDeleted == null) {
                return Response.status(Response.Status.BAD_REQUEST).entity("delete failed: caretakerId with caretakerId " + caretakerId + " not found").build();
            }
            return Response.status(Response.Status.OK).entity(caretakerDeleted).build();
        } catch (Exception exception) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(ERROR_MESSAGE).build();
        }
    }
}
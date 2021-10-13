package resource;

import com.google.inject.Inject;
import model.Pet;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import service.PetService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.UUID;

@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@Path("/pet")

public class PetResource {

    private final Logger LOGGER = LoggerFactory.getLogger(PetResource.class);
    private final PetService petService;
    private final String ERROR_MESSAGE = "Internal server error occurred";

    @Inject
    public PetResource(PetService petService) {
        this.petService = petService;
    }

    @POST
    public Response addPet(Pet pet) {
        try {
            Pet petCreated = petService.addPet(pet);
            return Response.status(Response.Status.OK).entity(petCreated).build();
        } catch (Exception exception) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(ERROR_MESSAGE).build();
        }

    }

    @GET
    @Path("/{petId}")
    public Response getPetById(@PathParam("petId") UUID petId) {
        try {
            Pet petFound = petService.getPetById(petId);
            if (petFound == null) {
                return Response.status(Response.Status.NOT_FOUND).entity("Pet with petId: " + petId + "is not found ").build();
            }
            return Response.status(Response.Status.OK).entity(petFound).build();
        } catch (Exception exception) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(ERROR_MESSAGE).build();
        }
    }

    @PUT
    @Path("/{petId}")
    public Response updatePetById(@PathParam("petId") UUID petId, Pet pet) {
        try {
            if (!petId.equals(pet.getPetID())) {
                return Response.status(Response.Status.BAD_REQUEST).entity("Id in the path and body should be same").build();
            }
            Pet petUpdated = petService.updatedPetById(petId, pet);
            if (petUpdated == null) {
                return Response.status(Response.Status.NOT_FOUND).entity("pet with petId {} is not found" + petId).build();
            }
            return Response.status(Response.Status.OK).entity(petUpdated).build();
        } catch (Exception exception) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(ERROR_MESSAGE).build();
        }
    }

    @DELETE
    @Path("/{petId}")
    public Response deletePetById(@PathParam("petId") UUID petId) {
        try {
            Pet petToDelete = petService.deletePetById(petId);
//            if (!petId.equals(pet.getPetID())) {
//                return Response.status(Response.Status.NOT_FOUND).entity("Id in the path and request body must be same").build();
//            }
            if (petToDelete == null) {
                return Response.status(Response.Status.NOT_FOUND).entity("Pet with petId {} not found " + petId).build();
            }
            return Response.status(Response.Status.OK).entity(petToDelete).build();
        } catch (Exception exception) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(ERROR_MESSAGE).build();
        }


    }

}

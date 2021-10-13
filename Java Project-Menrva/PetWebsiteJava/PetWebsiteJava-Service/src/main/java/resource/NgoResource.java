package resource;

import com.google.inject.Inject;
import model.Ngo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import service.NgoService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.UUID;

@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@Path("/ngo")

public class NgoResource {

    private final NgoService ngoService;
    private final static String ERROR_MESSAGE = "Internal server error occurred";
    private final Logger LOGGER = LoggerFactory.getLogger(NgoResource.class);


    @Inject
    public NgoResource(NgoService ngoService) {
        this.ngoService = ngoService;
    }

    @PUT
    public Response addNgo(Ngo ngo) {
        try {
            Ngo ngoAdded = ngoService.addNgoById(ngo);
            return Response.status(Response.Status.OK).entity("Ngo has been added successfully").build();
        } catch (Exception exception) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(ERROR_MESSAGE).build();
        }
    }

    @GET
    @Path("/{ngoId}")
    public Response getNgoById(@PathParam("ngoId") UUID ngoId) {
        try {
            Ngo ngoFound = ngoService.getNgoById(ngoId);
            if (ngoFound == null) {
                return Response.status(Response.Status.NOT_FOUND).entity("Ngo with ngoId " + ngoId + "not found").build();
            }
            return Response.status(Response.Status.OK).entity(ngoFound).build();
        } catch (Exception exception) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(ERROR_MESSAGE).build();
        }
    }

    @PUT
    @Path("/{ngoId}")
    public Response updateNgoById(@PathParam("ngoId") UUID ngoId, Ngo ngo)
    {
        try{
            if(!ngoId.equals(ngo.getNgoId()))
            {
                return Response.status(Response.Status.BAD_REQUEST).entity("ngoId in the path and body does not match").build();
            }
            Ngo ngoFound = ngoService.getNgoById(ngoId);
            if(ngoFound== null)
            {
                return Response.status(Response.Status.NOT_FOUND).entity("Ngo with ngoId " + ngoId + "not found").build();
            }
            return Response.status(Response.Status.OK).entity(ngo).build();
        }
        catch (Exception exception)
        {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(ERROR_MESSAGE).build();
        }
    }

    @DELETE
    @Path("/{ngoId}")
    public Response deleteNgoById(@PathParam("ngoId") UUID ngoId)
    {
        try{
            Ngo ngo = ngoService.getNgoById(ngoId);
            if(ngo == null)
            {
                return Response.status(Response.Status.NOT_FOUND).entity("ngo with ngoId "+ ngoId + "not found").build();
            }
            if(!ngoId.equals(ngo.getNgoId()))
            {
                return Response.status(Response.Status.BAD_REQUEST).entity("Id in the path and body does not match").build();

            }
            return Response.status(Response.Status.OK).entity("Ngo with ngoId "+ ngoId +" has been deleted" ).build();
        }
        catch (Exception exception)
        {
            return Response.status(Response.Status.OK).entity(ERROR_MESSAGE).build();
        }
    }


}

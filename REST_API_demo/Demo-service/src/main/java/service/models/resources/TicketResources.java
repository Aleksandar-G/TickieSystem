package service.models.resources;

import service.models.model.Ticket;
import service.models.db.db;

import javax.ws.rs.*;
import javax.ws.rs.core.*;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;

@Path("")
public class TicketResources {

    @Context
    private UriInfo uriInfo;

    private static final db db = new db();

    @GET
    @Path("/test")
    @Produces(MediaType.TEXT_PLAIN)
    public Response Test(){
        String msg = "Test is working";

        return  Response.ok(msg).build();
    }

    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getTicketByID(@PathParam("id") String id){
        Ticket ticekt = db.getTicket(id);

        if (ticekt == null){
            //System.out.println("sdasdasd");
            return Response.status(Response.Status.EXPECTATION_FAILED).entity("Please provide a new ID").build();
        }else{
            return Response.ok(ticekt).build();
        }
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)

    public Response GetAllStudents(@QueryParam("difficulty") String difficulty){

        List<Ticket> tickets =  new ArrayList<Ticket>();

        if (uriInfo.getQueryParameters().containsKey("difficulty")){
            if(difficulty == null){
                return Response.status(Response.Status.BAD_REQUEST).entity("Please provide a valid country code.").build();
            }else{
               tickets.addAll(db.getTicketWithDiffuculty(difficulty));
            }
        }
        else{
            tickets = db.getTickets();
        }
        

        GenericEntity<List<Ticket>> entity = new GenericEntity<>(tickets) {};

        return Response.ok(entity).build();

    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response AddNewTicket(Ticket ticket){

       db.addTicket(ticket);

        String url = uriInfo.getAbsolutePath()+ "" + ticket.ID;

        URI uri = URI.create(url);

        return Response.created(uri).build();
    }

    @DELETE
    @Path("/{id}")
     public Response deleteTicket(@PathParam("id") String id){
        db.deleteTicket(id);

        return Response.noContent().build();
    }

}

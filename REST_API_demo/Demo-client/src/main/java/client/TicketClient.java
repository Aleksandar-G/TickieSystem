package client;

import com.sun.research.ws.wadl.Resource;
import models.Ticket;
import org.glassfish.jersey.client.ClientConfig;

import javax.ws.rs.client.*;
import javax.ws.rs.client.Invocation.Builder;
import javax.ws.rs.core.*;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.ResourceBundle;


public class TicketClient {

    private  WebTarget serviceTarget;
    //private List<Country> countryList = new ArrayList<>();

    public TicketClient(){
        ClientConfig config = new ClientConfig();
        javax.ws.rs.client.Client client = ClientBuilder.newClient(config);
        URI baseURI = UriBuilder.fromUri("http://localhost:9090").build();

        //URI baseCountry_URI = UriBuilder.fromUri("http://localhost:9090/school/countries").build();
        serviceTarget = client.target(baseURI);

    }

    public static void main(String[] args){
        TicketClient tc = new TicketClient();
        tc.getTest();
        tc.getAllTickets();
        tc.getTicketByid("asd");
        tc.AddTicket("newId","test","test,","test");
        tc.deleteTicket("asd");
    }

    private void getTest(){

        Builder requestBuilder = serviceTarget.path("test").request().accept(MediaType.TEXT_PLAIN);
        Response response = requestBuilder.get();

        if (response.getStatus() == 200) {
            String entity = response.readEntity(String.class);
            System.out.println("The resources response is: " + entity);

        } else {
            System.out.println("ERROR: Cannot get hello! " + response);
            String entity = response.readEntity(String.class);
            System.out.println(entity);
        }

    }

    private void getAllTickets(){
        Builder requestBuilder = serviceTarget.request().accept(MediaType.APPLICATION_JSON);
        System.out.println("hello");
        Response response = requestBuilder.get();

        if (response.getStatus() == Response.Status.OK.getStatusCode()){

            GenericType<ArrayList<Ticket>> genericType = new GenericType<>() {};
            ArrayList<Ticket> entity = response.readEntity(genericType);
            for (Ticket student : entity) {
                System.out.println("\t"+student);
            }
        }else{
            System.out.println("An error has occurd");
        }
    }

    private void getTicketByid(String p_id){
        Builder requestBuilder = serviceTarget.path(p_id).request().accept(MediaType.APPLICATION_JSON);

        Response response = requestBuilder.get();

        if (response.getStatus() == Response.Status.OK.getStatusCode()){
            String entity = response.readEntity(String.class);
            System.out.println("The ticket is "+entity);
        }else{
            System.out.println(response.getStatus());
        }
    }

    private void AddTicket(String p_ID, String p_description, String p_priorityLevel, String p_DifficultyLevel){
        Ticket ticket = new Ticket(p_ID,p_description,p_priorityLevel,p_DifficultyLevel);

        Entity<Ticket> entity = Entity.entity(ticket,MediaType.APPLICATION_JSON);

        Response response = serviceTarget.request().accept(MediaType.TEXT_PLAIN).post(entity);

        if (response.getStatus() == Response.Status.CREATED.getStatusCode()){
            String ticketURL = response.getHeaderString("Location");
            System.out.println("Ticket created at "+ ticketURL);
        }else{
            System.out.println(response.getStatus());
        }
    }

    private void deleteTicket(String p_id){
        WebTarget resourseTarget = serviceTarget.path(p_id);

        Builder requsetBuilder = resourseTarget.request().accept(MediaType.TEXT_PLAIN);

        Response response = requsetBuilder.delete();

        if (response.getStatus() == Response.Status.NO_CONTENT.getStatusCode()){
            System.out.println("Ticket was deleted");
        }   else{
            System.out.println("Error");
        }
    }
}

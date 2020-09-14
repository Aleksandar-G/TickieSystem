package client;

import models.Ticket;
import org.glassfish.jersey.client.ClientConfig;

import javax.ws.rs.client.*;
import javax.ws.rs.client.Invocation.Builder;
import javax.ws.rs.core.*;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;


public class TicketClient {

    private  WebTarget serviceTarget;
    //private List<Country> countryList = new ArrayList<>();

    public TicketClient(){
        ClientConfig config = new ClientConfig();
        javax.ws.rs.client.Client client = ClientBuilder.newClient(config);
        URI baseURI = UriBuilder.fromUri("http://localhost:9090/").build();

        //URI baseCountry_URI = UriBuilder.fromUri("http://localhost:9090/school/countries").build();
        serviceTarget = client.target(baseURI);

        // populate with valid fake countries. This should be removed and read from the Service!
       /* Country netherlands = new Country("NL", "The Netherlands");
        Country bulgaria = new Country("BG", "Bulgaria");
        Country china = new Country("CHN", "China");
        countryList.add(netherlands);
        countryList.add(bulgaria);
        countryList.add(china);*/
    }

    public static void main(String[] args){
        TicketClient tc = new TicketClient();
        tc.getTest();
        tc.getAllTickets();
    }

    private void getTest(){
        /* make sure you:
            1. have the correct URL
            2. set correct MediaType, which exaclty matches the MediaType in the service
         */
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
}

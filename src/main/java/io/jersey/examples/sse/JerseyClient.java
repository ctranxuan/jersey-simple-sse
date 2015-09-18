package io.jersey.examples.sse;

import org.glassfish.jersey.media.sse.EventSource;
import org.glassfish.jersey.media.sse.InboundEvent;
import org.glassfish.jersey.media.sse.SseFeature;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.WebTarget;

/**
 * @author ctranxuan (streamdata.io).
 */
public class JerseyClient {
    public static void main(String[] args) {
//        String uri = "http://localhost:9090/sse";
        String uri = "http://127.0.0.1:8989/app/stocks/prices";
        run(uri);
    }

    private static void run(final String aUri) {
        System.out.println("JerseyClient.run: " + aUri);

        Client client = ClientBuilder.newBuilder().register(SseFeature.class).build();

        WebTarget target = client.target(aUri);
        EventSource eventSource = new EventSource(target) {
            @Override
            public void onEvent(final InboundEvent inboundEvent) {
                System.out.println("AppTest.onEvent: " + inboundEvent.readData());
            }
        };

        try {
            Thread.sleep(15000);
            System.out.println("AppTest.main: closing eventsource");
            eventSource.close();
            client.close();

            Thread.sleep(60000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("AppTest.main: exit()");
    }
}

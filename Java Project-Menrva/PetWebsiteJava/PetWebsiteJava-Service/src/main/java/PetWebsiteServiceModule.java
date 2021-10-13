import com.google.inject.AbstractModule;
import com.google.inject.Provides;
import com.google.inject.Singleton;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;
import config.PetWebsiteJavaServiceConfiguration;

public class PetWebsiteServiceModule extends AbstractModule {

    private final PetWebsiteJavaServiceConfiguration config;

    public PetWebsiteServiceModule(PetWebsiteJavaServiceConfiguration config) {
        this.config = config;
    }

    @Override
    protected void configure() {

    }

    @Provides // It will provide this information to all the other modules in the project
    @Singleton // Only one object will be present for one session at a given time.
    private MongoClient providesMongoClient() // This will take the mongodb database cluster
    {
        return MongoClients.create("mongodb+srv://neha:neha@cluster0.juoyx.mongodb.net/PetWebsite?retryWrites=true&w=majority");
    }

    @Provides
    @Singleton
    private MongoDatabase providesMongoDatabase(MongoClient mongoClient) {
        return mongoClient.getDatabase("PetWebsite");
    }

    @Provides
    @Singleton
    private PetWebsiteJavaServiceConfiguration providesPetWebsiteConfiguration() {
        return this.config;
    }


}

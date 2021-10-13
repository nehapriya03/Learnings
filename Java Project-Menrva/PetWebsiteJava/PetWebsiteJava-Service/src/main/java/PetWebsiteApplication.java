import com.google.inject.Guice;
import com.google.inject.Injector;
import config.PetWebsiteJavaServiceConfiguration;
import health.PetWebsiteHealthCheck;
import io.dropwizard.Application;
import io.dropwizard.jersey.jackson.JsonProcessingExceptionMapper;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import org.glassfish.jersey.media.multipart.MultiPartFeature;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import resource.CaretakerResource;
import resource.NgoResource;
import resource.PetResource;

public class PetWebsiteApplication extends Application<PetWebsiteJavaServiceConfiguration> {

    public static final String APPLICATION_NAME = "PET-APPLICATION"; // Final variable should be in snake case and in upper case
    private static final Logger LOGGER = LoggerFactory.getLogger(PetWebsiteApplication.class);

    @Override
    public String getName() {
        return APPLICATION_NAME;
    }

    @Override
    public void initialize(Bootstrap<PetWebsiteJavaServiceConfiguration> bootstrap)
    {
        super.initialize(bootstrap);
    }

    @Override
    public void run(PetWebsiteJavaServiceConfiguration petWebsiteJavaServiceConfiguration, Environment environment) throws Exception {

        Injector injector = Guice.createInjector(new PetWebsiteServiceModule(petWebsiteJavaServiceConfiguration));
        environment.healthChecks().register(this.getName(),new PetWebsiteHealthCheck());
        //environment.jersey().register(injector.getInstance(DoctorResource.class));
        environment.jersey().register(injector.getInstance(CaretakerResource.class));
        environment.jersey().register(injector.getInstance(PetResource.class));
        environment.jersey().register(injector.getInstance(NgoResource.class));
        environment.jersey().register(new JsonProcessingExceptionMapper(true));
        environment.jersey().register(MultiPartFeature.class);
        LOGGER.info("All resources added for my application");
    }

    public static void main(String[] args) throws Exception {
        new PetWebsiteApplication().run(args);
    }
}

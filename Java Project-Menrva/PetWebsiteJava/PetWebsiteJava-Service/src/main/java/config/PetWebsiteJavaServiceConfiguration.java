package config;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.dropwizard.Configuration;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

public class PetWebsiteJavaServiceConfiguration extends Configuration {



    //@Valid // It has be string and can not be empty
    @NotNull // It cannot be null
    @JsonProperty //It will be returned as a JSON value.
    private String environmentName;

    @Valid // It has be string and can not be empty
    @NotNull // It cannot be null
    @JsonProperty //It will be returned as a JSON value.
    private String applicationName;

    public String getEnvironmentName() {
        return environmentName;
    }

    public String getApplicationName() {
        return applicationName;
    }
}

package model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import org.immutables.value.Value;

import javax.annotation.Nullable;
import javax.validation.constraints.NotNull;
import java.util.UUID;

@JsonSerialize
@JsonDeserialize(as = ImmutablePet.class)
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
@Value.Immutable

public interface Pet {

    @Nullable
    UUID getPetID();

    @NotNull
    String getAnimalType();

    @NotNull
    String getBreed();

    @NotNull
    String getOwnerId();

    @NotNull
    String getLocation();

    @NotNull
    String getMedicalHistory();

    @NotNull
    Boolean getMateStatus();

}

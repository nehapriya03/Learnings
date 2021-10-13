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
@JsonDeserialize(as = ImmutableCaretaker.class)
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
@Value.Immutable

public interface Caretaker {

    @Nullable
    UUID getCaretakerId();

    @NotNull
    String getFirstName();

    @NotNull
    String getLastName();

    @NotNull
    String getAbout();

    @NotNull
    Double getCharge();

    @NotNull
    String getChargeDuration();

    @NotNull
    String getLocation();
}

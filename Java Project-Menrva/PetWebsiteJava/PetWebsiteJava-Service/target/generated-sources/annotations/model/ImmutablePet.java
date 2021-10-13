package model;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.google.common.base.MoreObjects;
import com.google.errorprone.annotations.CanIgnoreReturnValue;
import com.google.errorprone.annotations.Var;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.UUID;
import javax.annotation.CheckReturnValue;
import javax.annotation.Nullable;
import javax.annotation.ParametersAreNonnullByDefault;
import javax.annotation.concurrent.Immutable;
import javax.annotation.concurrent.NotThreadSafe;
import org.immutables.value.Generated;

/**
 * Immutable implementation of {@link Pet}.
 * <p>
 * Use the builder to create immutable instances:
 * {@code ImmutablePet.builder()}.
 */
@Generated(from = "Pet", generator = "Immutables")
@SuppressWarnings({"all"})
@ParametersAreNonnullByDefault
@javax.annotation.Generated("org.immutables.processor.ProxyProcessor")
@Immutable
@CheckReturnValue
@JsonIgnoreProperties(ignoreUnknown = true)
public final class ImmutablePet implements Pet {
  private final @Nullable UUID petID;
  private final String animalType;
  private final String breed;
  private final String ownerId;
  private final String location;
  private final String medicalHistory;
  private final Boolean mateStatus;

  private ImmutablePet(
      @Nullable UUID petID,
      String animalType,
      String breed,
      String ownerId,
      String location,
      String medicalHistory,
      Boolean mateStatus) {
    this.petID = petID;
    this.animalType = animalType;
    this.breed = breed;
    this.ownerId = ownerId;
    this.location = location;
    this.medicalHistory = medicalHistory;
    this.mateStatus = mateStatus;
  }

  /**
   * @return The value of the {@code petID} attribute
   */
  @JsonProperty("petID")
  @Override
  public @Nullable UUID getPetID() {
    return petID;
  }

  /**
   * @return The value of the {@code animalType} attribute
   */
  @JsonProperty("animalType")
  @Override
  public String getAnimalType() {
    return animalType;
  }

  /**
   * @return The value of the {@code breed} attribute
   */
  @JsonProperty("breed")
  @Override
  public String getBreed() {
    return breed;
  }

  /**
   * @return The value of the {@code ownerId} attribute
   */
  @JsonProperty("ownerId")
  @Override
  public String getOwnerId() {
    return ownerId;
  }

  /**
   * @return The value of the {@code location} attribute
   */
  @JsonProperty("location")
  @Override
  public String getLocation() {
    return location;
  }

  /**
   * @return The value of the {@code medicalHistory} attribute
   */
  @JsonProperty("medicalHistory")
  @Override
  public String getMedicalHistory() {
    return medicalHistory;
  }

  /**
   * @return The value of the {@code mateStatus} attribute
   */
  @JsonProperty("mateStatus")
  @Override
  public Boolean getMateStatus() {
    return mateStatus;
  }

  /**
   * Copy the current immutable object by setting a value for the {@link Pet#getPetID() petID} attribute.
   * A shallow reference equality check is used to prevent copying of the same value by returning {@code this}.
   * @param value A new value for petID (can be {@code null})
   * @return A modified copy of the {@code this} object
   */
  public final ImmutablePet withPetID(@Nullable UUID value) {
    if (this.petID == value) return this;
    return new ImmutablePet(
        value,
        this.animalType,
        this.breed,
        this.ownerId,
        this.location,
        this.medicalHistory,
        this.mateStatus);
  }

  /**
   * Copy the current immutable object by setting a value for the {@link Pet#getAnimalType() animalType} attribute.
   * An equals check used to prevent copying of the same value by returning {@code this}.
   * @param value A new value for animalType
   * @return A modified copy of the {@code this} object
   */
  public final ImmutablePet withAnimalType(String value) {
    String newValue = Objects.requireNonNull(value, "animalType");
    if (this.animalType.equals(newValue)) return this;
    return new ImmutablePet(
        this.petID,
        newValue,
        this.breed,
        this.ownerId,
        this.location,
        this.medicalHistory,
        this.mateStatus);
  }

  /**
   * Copy the current immutable object by setting a value for the {@link Pet#getBreed() breed} attribute.
   * An equals check used to prevent copying of the same value by returning {@code this}.
   * @param value A new value for breed
   * @return A modified copy of the {@code this} object
   */
  public final ImmutablePet withBreed(String value) {
    String newValue = Objects.requireNonNull(value, "breed");
    if (this.breed.equals(newValue)) return this;
    return new ImmutablePet(
        this.petID,
        this.animalType,
        newValue,
        this.ownerId,
        this.location,
        this.medicalHistory,
        this.mateStatus);
  }

  /**
   * Copy the current immutable object by setting a value for the {@link Pet#getOwnerId() ownerId} attribute.
   * An equals check used to prevent copying of the same value by returning {@code this}.
   * @param value A new value for ownerId
   * @return A modified copy of the {@code this} object
   */
  public final ImmutablePet withOwnerId(String value) {
    String newValue = Objects.requireNonNull(value, "ownerId");
    if (this.ownerId.equals(newValue)) return this;
    return new ImmutablePet(
        this.petID,
        this.animalType,
        this.breed,
        newValue,
        this.location,
        this.medicalHistory,
        this.mateStatus);
  }

  /**
   * Copy the current immutable object by setting a value for the {@link Pet#getLocation() location} attribute.
   * An equals check used to prevent copying of the same value by returning {@code this}.
   * @param value A new value for location
   * @return A modified copy of the {@code this} object
   */
  public final ImmutablePet withLocation(String value) {
    String newValue = Objects.requireNonNull(value, "location");
    if (this.location.equals(newValue)) return this;
    return new ImmutablePet(
        this.petID,
        this.animalType,
        this.breed,
        this.ownerId,
        newValue,
        this.medicalHistory,
        this.mateStatus);
  }

  /**
   * Copy the current immutable object by setting a value for the {@link Pet#getMedicalHistory() medicalHistory} attribute.
   * An equals check used to prevent copying of the same value by returning {@code this}.
   * @param value A new value for medicalHistory
   * @return A modified copy of the {@code this} object
   */
  public final ImmutablePet withMedicalHistory(String value) {
    String newValue = Objects.requireNonNull(value, "medicalHistory");
    if (this.medicalHistory.equals(newValue)) return this;
    return new ImmutablePet(this.petID, this.animalType, this.breed, this.ownerId, this.location, newValue, this.mateStatus);
  }

  /**
   * Copy the current immutable object by setting a value for the {@link Pet#getMateStatus() mateStatus} attribute.
   * An equals check used to prevent copying of the same value by returning {@code this}.
   * @param value A new value for mateStatus
   * @return A modified copy of the {@code this} object
   */
  public final ImmutablePet withMateStatus(Boolean value) {
    Boolean newValue = Objects.requireNonNull(value, "mateStatus");
    if (this.mateStatus.equals(newValue)) return this;
    return new ImmutablePet(
        this.petID,
        this.animalType,
        this.breed,
        this.ownerId,
        this.location,
        this.medicalHistory,
        newValue);
  }

  /**
   * This instance is equal to all instances of {@code ImmutablePet} that have equal attribute values.
   * @return {@code true} if {@code this} is equal to {@code another} instance
   */
  @Override
  public boolean equals(@Nullable Object another) {
    if (this == another) return true;
    return another instanceof ImmutablePet
        && equalTo((ImmutablePet) another);
  }

  private boolean equalTo(ImmutablePet another) {
    return Objects.equals(petID, another.petID)
        && animalType.equals(another.animalType)
        && breed.equals(another.breed)
        && ownerId.equals(another.ownerId)
        && location.equals(another.location)
        && medicalHistory.equals(another.medicalHistory)
        && mateStatus.equals(another.mateStatus);
  }

  /**
   * Computes a hash code from attributes: {@code petID}, {@code animalType}, {@code breed}, {@code ownerId}, {@code location}, {@code medicalHistory}, {@code mateStatus}.
   * @return hashCode value
   */
  @Override
  public int hashCode() {
    @Var int h = 5381;
    h += (h << 5) + Objects.hashCode(petID);
    h += (h << 5) + animalType.hashCode();
    h += (h << 5) + breed.hashCode();
    h += (h << 5) + ownerId.hashCode();
    h += (h << 5) + location.hashCode();
    h += (h << 5) + medicalHistory.hashCode();
    h += (h << 5) + mateStatus.hashCode();
    return h;
  }

  /**
   * Prints the immutable value {@code Pet} with attribute values.
   * @return A string representation of the value
   */
  @Override
  public String toString() {
    return MoreObjects.toStringHelper("Pet")
        .omitNullValues()
        .add("petID", petID)
        .add("animalType", animalType)
        .add("breed", breed)
        .add("ownerId", ownerId)
        .add("location", location)
        .add("medicalHistory", medicalHistory)
        .add("mateStatus", mateStatus)
        .toString();
  }

  /**
   * Utility type used to correctly read immutable object from JSON representation.
   * @deprecated Do not use this type directly, it exists only for the <em>Jackson</em>-binding infrastructure
   */
  @Generated(from = "Pet", generator = "Immutables")
  @Deprecated
  @SuppressWarnings("Immutable")
  @JsonDeserialize
  @JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.NONE)
  static final class Json implements Pet {
    @Nullable UUID petID;
    @Nullable String animalType;
    @Nullable String breed;
    @Nullable String ownerId;
    @Nullable String location;
    @Nullable String medicalHistory;
    @Nullable Boolean mateStatus;
    @JsonProperty("petID")
    public void setPetID(@Nullable UUID petID) {
      this.petID = petID;
    }
    @JsonProperty("animalType")
    public void setAnimalType(String animalType) {
      this.animalType = animalType;
    }
    @JsonProperty("breed")
    public void setBreed(String breed) {
      this.breed = breed;
    }
    @JsonProperty("ownerId")
    public void setOwnerId(String ownerId) {
      this.ownerId = ownerId;
    }
    @JsonProperty("location")
    public void setLocation(String location) {
      this.location = location;
    }
    @JsonProperty("medicalHistory")
    public void setMedicalHistory(String medicalHistory) {
      this.medicalHistory = medicalHistory;
    }
    @JsonProperty("mateStatus")
    public void setMateStatus(Boolean mateStatus) {
      this.mateStatus = mateStatus;
    }
    @Override
    public UUID getPetID() { throw new UnsupportedOperationException(); }
    @Override
    public String getAnimalType() { throw new UnsupportedOperationException(); }
    @Override
    public String getBreed() { throw new UnsupportedOperationException(); }
    @Override
    public String getOwnerId() { throw new UnsupportedOperationException(); }
    @Override
    public String getLocation() { throw new UnsupportedOperationException(); }
    @Override
    public String getMedicalHistory() { throw new UnsupportedOperationException(); }
    @Override
    public Boolean getMateStatus() { throw new UnsupportedOperationException(); }
  }

  /**
   * @param json A JSON-bindable data structure
   * @return An immutable value type
   * @deprecated Do not use this method directly, it exists only for the <em>Jackson</em>-binding infrastructure
   */
  @Deprecated
  @JsonCreator(mode = JsonCreator.Mode.DELEGATING)
  static ImmutablePet fromJson(Json json) {
    ImmutablePet.Builder builder = ImmutablePet.builder();
    if (json.petID != null) {
      builder.petID(json.petID);
    }
    if (json.animalType != null) {
      builder.animalType(json.animalType);
    }
    if (json.breed != null) {
      builder.breed(json.breed);
    }
    if (json.ownerId != null) {
      builder.ownerId(json.ownerId);
    }
    if (json.location != null) {
      builder.location(json.location);
    }
    if (json.medicalHistory != null) {
      builder.medicalHistory(json.medicalHistory);
    }
    if (json.mateStatus != null) {
      builder.mateStatus(json.mateStatus);
    }
    return builder.build();
  }

  /**
   * Creates an immutable copy of a {@link Pet} value.
   * Uses accessors to get values to initialize the new immutable instance.
   * If an instance is already immutable, it is returned as is.
   * @param instance The instance to copy
   * @return A copied immutable Pet instance
   */
  public static ImmutablePet copyOf(Pet instance) {
    if (instance instanceof ImmutablePet) {
      return (ImmutablePet) instance;
    }
    return ImmutablePet.builder()
        .from(instance)
        .build();
  }

  /**
   * Creates a builder for {@link ImmutablePet ImmutablePet}.
   * <pre>
   * ImmutablePet.builder()
   *    .petID(UUID | null) // nullable {@link Pet#getPetID() petID}
   *    .animalType(String) // required {@link Pet#getAnimalType() animalType}
   *    .breed(String) // required {@link Pet#getBreed() breed}
   *    .ownerId(String) // required {@link Pet#getOwnerId() ownerId}
   *    .location(String) // required {@link Pet#getLocation() location}
   *    .medicalHistory(String) // required {@link Pet#getMedicalHistory() medicalHistory}
   *    .mateStatus(Boolean) // required {@link Pet#getMateStatus() mateStatus}
   *    .build();
   * </pre>
   * @return A new ImmutablePet builder
   */
  public static ImmutablePet.Builder builder() {
    return new ImmutablePet.Builder();
  }

  /**
   * Builds instances of type {@link ImmutablePet ImmutablePet}.
   * Initialize attributes and then invoke the {@link #build()} method to create an
   * immutable instance.
   * <p><em>{@code Builder} is not thread-safe and generally should not be stored in a field or collection,
   * but instead used immediately to create instances.</em>
   */
  @Generated(from = "Pet", generator = "Immutables")
  @NotThreadSafe
  public static final class Builder {
    private static final long INIT_BIT_ANIMAL_TYPE = 0x1L;
    private static final long INIT_BIT_BREED = 0x2L;
    private static final long INIT_BIT_OWNER_ID = 0x4L;
    private static final long INIT_BIT_LOCATION = 0x8L;
    private static final long INIT_BIT_MEDICAL_HISTORY = 0x10L;
    private static final long INIT_BIT_MATE_STATUS = 0x20L;
    private long initBits = 0x3fL;

    private @Nullable UUID petID;
    private @Nullable String animalType;
    private @Nullable String breed;
    private @Nullable String ownerId;
    private @Nullable String location;
    private @Nullable String medicalHistory;
    private @Nullable Boolean mateStatus;

    private Builder() {
    }

    /**
     * Fill a builder with attribute values from the provided {@code Pet} instance.
     * Regular attribute values will be replaced with those from the given instance.
     * Absent optional values will not replace present values.
     * @param instance The instance from which to copy values
     * @return {@code this} builder for use in a chained invocation
     */
    @CanIgnoreReturnValue 
    public final Builder from(Pet instance) {
      Objects.requireNonNull(instance, "instance");
      @Nullable UUID petIDValue = instance.getPetID();
      if (petIDValue != null) {
        petID(petIDValue);
      }
      animalType(instance.getAnimalType());
      breed(instance.getBreed());
      ownerId(instance.getOwnerId());
      location(instance.getLocation());
      medicalHistory(instance.getMedicalHistory());
      mateStatus(instance.getMateStatus());
      return this;
    }

    /**
     * Initializes the value for the {@link Pet#getPetID() petID} attribute.
     * @param petID The value for petID (can be {@code null})
     * @return {@code this} builder for use in a chained invocation
     */
    @CanIgnoreReturnValue 
    @JsonProperty("petID")
    public final Builder petID(@Nullable UUID petID) {
      this.petID = petID;
      return this;
    }

    /**
     * Initializes the value for the {@link Pet#getAnimalType() animalType} attribute.
     * @param animalType The value for animalType 
     * @return {@code this} builder for use in a chained invocation
     */
    @CanIgnoreReturnValue 
    @JsonProperty("animalType")
    public final Builder animalType(String animalType) {
      this.animalType = Objects.requireNonNull(animalType, "animalType");
      initBits &= ~INIT_BIT_ANIMAL_TYPE;
      return this;
    }

    /**
     * Initializes the value for the {@link Pet#getBreed() breed} attribute.
     * @param breed The value for breed 
     * @return {@code this} builder for use in a chained invocation
     */
    @CanIgnoreReturnValue 
    @JsonProperty("breed")
    public final Builder breed(String breed) {
      this.breed = Objects.requireNonNull(breed, "breed");
      initBits &= ~INIT_BIT_BREED;
      return this;
    }

    /**
     * Initializes the value for the {@link Pet#getOwnerId() ownerId} attribute.
     * @param ownerId The value for ownerId 
     * @return {@code this} builder for use in a chained invocation
     */
    @CanIgnoreReturnValue 
    @JsonProperty("ownerId")
    public final Builder ownerId(String ownerId) {
      this.ownerId = Objects.requireNonNull(ownerId, "ownerId");
      initBits &= ~INIT_BIT_OWNER_ID;
      return this;
    }

    /**
     * Initializes the value for the {@link Pet#getLocation() location} attribute.
     * @param location The value for location 
     * @return {@code this} builder for use in a chained invocation
     */
    @CanIgnoreReturnValue 
    @JsonProperty("location")
    public final Builder location(String location) {
      this.location = Objects.requireNonNull(location, "location");
      initBits &= ~INIT_BIT_LOCATION;
      return this;
    }

    /**
     * Initializes the value for the {@link Pet#getMedicalHistory() medicalHistory} attribute.
     * @param medicalHistory The value for medicalHistory 
     * @return {@code this} builder for use in a chained invocation
     */
    @CanIgnoreReturnValue 
    @JsonProperty("medicalHistory")
    public final Builder medicalHistory(String medicalHistory) {
      this.medicalHistory = Objects.requireNonNull(medicalHistory, "medicalHistory");
      initBits &= ~INIT_BIT_MEDICAL_HISTORY;
      return this;
    }

    /**
     * Initializes the value for the {@link Pet#getMateStatus() mateStatus} attribute.
     * @param mateStatus The value for mateStatus 
     * @return {@code this} builder for use in a chained invocation
     */
    @CanIgnoreReturnValue 
    @JsonProperty("mateStatus")
    public final Builder mateStatus(Boolean mateStatus) {
      this.mateStatus = Objects.requireNonNull(mateStatus, "mateStatus");
      initBits &= ~INIT_BIT_MATE_STATUS;
      return this;
    }

    /**
     * Builds a new {@link ImmutablePet ImmutablePet}.
     * @return An immutable instance of Pet
     * @throws java.lang.IllegalStateException if any required attributes are missing
     */
    public ImmutablePet build() {
      if (initBits != 0) {
        throw new IllegalStateException(formatRequiredAttributesMessage());
      }
      return new ImmutablePet(petID, animalType, breed, ownerId, location, medicalHistory, mateStatus);
    }

    private String formatRequiredAttributesMessage() {
      List<String> attributes = new ArrayList<>();
      if ((initBits & INIT_BIT_ANIMAL_TYPE) != 0) attributes.add("animalType");
      if ((initBits & INIT_BIT_BREED) != 0) attributes.add("breed");
      if ((initBits & INIT_BIT_OWNER_ID) != 0) attributes.add("ownerId");
      if ((initBits & INIT_BIT_LOCATION) != 0) attributes.add("location");
      if ((initBits & INIT_BIT_MEDICAL_HISTORY) != 0) attributes.add("medicalHistory");
      if ((initBits & INIT_BIT_MATE_STATUS) != 0) attributes.add("mateStatus");
      return "Cannot build Pet, some of required attributes are not set " + attributes;
    }
  }
}

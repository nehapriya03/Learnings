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
 * Immutable implementation of {@link Caretaker}.
 * <p>
 * Use the builder to create immutable instances:
 * {@code ImmutableCaretaker.builder()}.
 */
@Generated(from = "Caretaker", generator = "Immutables")
@SuppressWarnings({"all"})
@ParametersAreNonnullByDefault
@javax.annotation.Generated("org.immutables.processor.ProxyProcessor")
@Immutable
@CheckReturnValue
@JsonIgnoreProperties(ignoreUnknown = true)
public final class ImmutableCaretaker implements Caretaker {
  private final @Nullable UUID caretakerId;
  private final String firstName;
  private final String lastName;
  private final String about;
  private final Double charge;
  private final String chargeDuration;
  private final String location;

  private ImmutableCaretaker(
      @Nullable UUID caretakerId,
      String firstName,
      String lastName,
      String about,
      Double charge,
      String chargeDuration,
      String location) {
    this.caretakerId = caretakerId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.about = about;
    this.charge = charge;
    this.chargeDuration = chargeDuration;
    this.location = location;
  }

  /**
   * @return The value of the {@code caretakerId} attribute
   */
  @JsonProperty("caretakerId")
  @Override
  public @Nullable UUID getCaretakerId() {
    return caretakerId;
  }

  /**
   * @return The value of the {@code firstName} attribute
   */
  @JsonProperty("firstName")
  @Override
  public String getFirstName() {
    return firstName;
  }

  /**
   * @return The value of the {@code lastName} attribute
   */
  @JsonProperty("lastName")
  @Override
  public String getLastName() {
    return lastName;
  }

  /**
   * @return The value of the {@code about} attribute
   */
  @JsonProperty("about")
  @Override
  public String getAbout() {
    return about;
  }

  /**
   * @return The value of the {@code charge} attribute
   */
  @JsonProperty("charge")
  @Override
  public Double getCharge() {
    return charge;
  }

  /**
   * @return The value of the {@code chargeDuration} attribute
   */
  @JsonProperty("chargeDuration")
  @Override
  public String getChargeDuration() {
    return chargeDuration;
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
   * Copy the current immutable object by setting a value for the {@link Caretaker#getCaretakerId() caretakerId} attribute.
   * A shallow reference equality check is used to prevent copying of the same value by returning {@code this}.
   * @param value A new value for caretakerId (can be {@code null})
   * @return A modified copy of the {@code this} object
   */
  public final ImmutableCaretaker withCaretakerId(@Nullable UUID value) {
    if (this.caretakerId == value) return this;
    return new ImmutableCaretaker(
        value,
        this.firstName,
        this.lastName,
        this.about,
        this.charge,
        this.chargeDuration,
        this.location);
  }

  /**
   * Copy the current immutable object by setting a value for the {@link Caretaker#getFirstName() firstName} attribute.
   * An equals check used to prevent copying of the same value by returning {@code this}.
   * @param value A new value for firstName
   * @return A modified copy of the {@code this} object
   */
  public final ImmutableCaretaker withFirstName(String value) {
    String newValue = Objects.requireNonNull(value, "firstName");
    if (this.firstName.equals(newValue)) return this;
    return new ImmutableCaretaker(
        this.caretakerId,
        newValue,
        this.lastName,
        this.about,
        this.charge,
        this.chargeDuration,
        this.location);
  }

  /**
   * Copy the current immutable object by setting a value for the {@link Caretaker#getLastName() lastName} attribute.
   * An equals check used to prevent copying of the same value by returning {@code this}.
   * @param value A new value for lastName
   * @return A modified copy of the {@code this} object
   */
  public final ImmutableCaretaker withLastName(String value) {
    String newValue = Objects.requireNonNull(value, "lastName");
    if (this.lastName.equals(newValue)) return this;
    return new ImmutableCaretaker(
        this.caretakerId,
        this.firstName,
        newValue,
        this.about,
        this.charge,
        this.chargeDuration,
        this.location);
  }

  /**
   * Copy the current immutable object by setting a value for the {@link Caretaker#getAbout() about} attribute.
   * An equals check used to prevent copying of the same value by returning {@code this}.
   * @param value A new value for about
   * @return A modified copy of the {@code this} object
   */
  public final ImmutableCaretaker withAbout(String value) {
    String newValue = Objects.requireNonNull(value, "about");
    if (this.about.equals(newValue)) return this;
    return new ImmutableCaretaker(
        this.caretakerId,
        this.firstName,
        this.lastName,
        newValue,
        this.charge,
        this.chargeDuration,
        this.location);
  }

  /**
   * Copy the current immutable object by setting a value for the {@link Caretaker#getCharge() charge} attribute.
   * An equals check used to prevent copying of the same value by returning {@code this}.
   * @param value A new value for charge
   * @return A modified copy of the {@code this} object
   */
  public final ImmutableCaretaker withCharge(Double value) {
    Double newValue = Objects.requireNonNull(value, "charge");
    if (this.charge.equals(newValue)) return this;
    return new ImmutableCaretaker(
        this.caretakerId,
        this.firstName,
        this.lastName,
        this.about,
        newValue,
        this.chargeDuration,
        this.location);
  }

  /**
   * Copy the current immutable object by setting a value for the {@link Caretaker#getChargeDuration() chargeDuration} attribute.
   * An equals check used to prevent copying of the same value by returning {@code this}.
   * @param value A new value for chargeDuration
   * @return A modified copy of the {@code this} object
   */
  public final ImmutableCaretaker withChargeDuration(String value) {
    String newValue = Objects.requireNonNull(value, "chargeDuration");
    if (this.chargeDuration.equals(newValue)) return this;
    return new ImmutableCaretaker(
        this.caretakerId,
        this.firstName,
        this.lastName,
        this.about,
        this.charge,
        newValue,
        this.location);
  }

  /**
   * Copy the current immutable object by setting a value for the {@link Caretaker#getLocation() location} attribute.
   * An equals check used to prevent copying of the same value by returning {@code this}.
   * @param value A new value for location
   * @return A modified copy of the {@code this} object
   */
  public final ImmutableCaretaker withLocation(String value) {
    String newValue = Objects.requireNonNull(value, "location");
    if (this.location.equals(newValue)) return this;
    return new ImmutableCaretaker(
        this.caretakerId,
        this.firstName,
        this.lastName,
        this.about,
        this.charge,
        this.chargeDuration,
        newValue);
  }

  /**
   * This instance is equal to all instances of {@code ImmutableCaretaker} that have equal attribute values.
   * @return {@code true} if {@code this} is equal to {@code another} instance
   */
  @Override
  public boolean equals(@Nullable Object another) {
    if (this == another) return true;
    return another instanceof ImmutableCaretaker
        && equalTo((ImmutableCaretaker) another);
  }

  private boolean equalTo(ImmutableCaretaker another) {
    return Objects.equals(caretakerId, another.caretakerId)
        && firstName.equals(another.firstName)
        && lastName.equals(another.lastName)
        && about.equals(another.about)
        && charge.equals(another.charge)
        && chargeDuration.equals(another.chargeDuration)
        && location.equals(another.location);
  }

  /**
   * Computes a hash code from attributes: {@code caretakerId}, {@code firstName}, {@code lastName}, {@code about}, {@code charge}, {@code chargeDuration}, {@code location}.
   * @return hashCode value
   */
  @Override
  public int hashCode() {
    @Var int h = 5381;
    h += (h << 5) + Objects.hashCode(caretakerId);
    h += (h << 5) + firstName.hashCode();
    h += (h << 5) + lastName.hashCode();
    h += (h << 5) + about.hashCode();
    h += (h << 5) + charge.hashCode();
    h += (h << 5) + chargeDuration.hashCode();
    h += (h << 5) + location.hashCode();
    return h;
  }

  /**
   * Prints the immutable value {@code Caretaker} with attribute values.
   * @return A string representation of the value
   */
  @Override
  public String toString() {
    return MoreObjects.toStringHelper("Caretaker")
        .omitNullValues()
        .add("caretakerId", caretakerId)
        .add("firstName", firstName)
        .add("lastName", lastName)
        .add("about", about)
        .add("charge", charge)
        .add("chargeDuration", chargeDuration)
        .add("location", location)
        .toString();
  }

  /**
   * Utility type used to correctly read immutable object from JSON representation.
   * @deprecated Do not use this type directly, it exists only for the <em>Jackson</em>-binding infrastructure
   */
  @Generated(from = "Caretaker", generator = "Immutables")
  @Deprecated
  @SuppressWarnings("Immutable")
  @JsonDeserialize
  @JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.NONE)
  static final class Json implements Caretaker {
    @Nullable UUID caretakerId;
    @Nullable String firstName;
    @Nullable String lastName;
    @Nullable String about;
    @Nullable Double charge;
    @Nullable String chargeDuration;
    @Nullable String location;
    @JsonProperty("caretakerId")
    public void setCaretakerId(@Nullable UUID caretakerId) {
      this.caretakerId = caretakerId;
    }
    @JsonProperty("firstName")
    public void setFirstName(String firstName) {
      this.firstName = firstName;
    }
    @JsonProperty("lastName")
    public void setLastName(String lastName) {
      this.lastName = lastName;
    }
    @JsonProperty("about")
    public void setAbout(String about) {
      this.about = about;
    }
    @JsonProperty("charge")
    public void setCharge(Double charge) {
      this.charge = charge;
    }
    @JsonProperty("chargeDuration")
    public void setChargeDuration(String chargeDuration) {
      this.chargeDuration = chargeDuration;
    }
    @JsonProperty("location")
    public void setLocation(String location) {
      this.location = location;
    }
    @Override
    public UUID getCaretakerId() { throw new UnsupportedOperationException(); }
    @Override
    public String getFirstName() { throw new UnsupportedOperationException(); }
    @Override
    public String getLastName() { throw new UnsupportedOperationException(); }
    @Override
    public String getAbout() { throw new UnsupportedOperationException(); }
    @Override
    public Double getCharge() { throw new UnsupportedOperationException(); }
    @Override
    public String getChargeDuration() { throw new UnsupportedOperationException(); }
    @Override
    public String getLocation() { throw new UnsupportedOperationException(); }
  }

  /**
   * @param json A JSON-bindable data structure
   * @return An immutable value type
   * @deprecated Do not use this method directly, it exists only for the <em>Jackson</em>-binding infrastructure
   */
  @Deprecated
  @JsonCreator(mode = JsonCreator.Mode.DELEGATING)
  static ImmutableCaretaker fromJson(Json json) {
    ImmutableCaretaker.Builder builder = ImmutableCaretaker.builder();
    if (json.caretakerId != null) {
      builder.caretakerId(json.caretakerId);
    }
    if (json.firstName != null) {
      builder.firstName(json.firstName);
    }
    if (json.lastName != null) {
      builder.lastName(json.lastName);
    }
    if (json.about != null) {
      builder.about(json.about);
    }
    if (json.charge != null) {
      builder.charge(json.charge);
    }
    if (json.chargeDuration != null) {
      builder.chargeDuration(json.chargeDuration);
    }
    if (json.location != null) {
      builder.location(json.location);
    }
    return builder.build();
  }

  /**
   * Creates an immutable copy of a {@link Caretaker} value.
   * Uses accessors to get values to initialize the new immutable instance.
   * If an instance is already immutable, it is returned as is.
   * @param instance The instance to copy
   * @return A copied immutable Caretaker instance
   */
  public static ImmutableCaretaker copyOf(Caretaker instance) {
    if (instance instanceof ImmutableCaretaker) {
      return (ImmutableCaretaker) instance;
    }
    return ImmutableCaretaker.builder()
        .from(instance)
        .build();
  }

  /**
   * Creates a builder for {@link ImmutableCaretaker ImmutableCaretaker}.
   * <pre>
   * ImmutableCaretaker.builder()
   *    .caretakerId(UUID | null) // nullable {@link Caretaker#getCaretakerId() caretakerId}
   *    .firstName(String) // required {@link Caretaker#getFirstName() firstName}
   *    .lastName(String) // required {@link Caretaker#getLastName() lastName}
   *    .about(String) // required {@link Caretaker#getAbout() about}
   *    .charge(Double) // required {@link Caretaker#getCharge() charge}
   *    .chargeDuration(String) // required {@link Caretaker#getChargeDuration() chargeDuration}
   *    .location(String) // required {@link Caretaker#getLocation() location}
   *    .build();
   * </pre>
   * @return A new ImmutableCaretaker builder
   */
  public static ImmutableCaretaker.Builder builder() {
    return new ImmutableCaretaker.Builder();
  }

  /**
   * Builds instances of type {@link ImmutableCaretaker ImmutableCaretaker}.
   * Initialize attributes and then invoke the {@link #build()} method to create an
   * immutable instance.
   * <p><em>{@code Builder} is not thread-safe and generally should not be stored in a field or collection,
   * but instead used immediately to create instances.</em>
   */
  @Generated(from = "Caretaker", generator = "Immutables")
  @NotThreadSafe
  public static final class Builder {
    private static final long INIT_BIT_FIRST_NAME = 0x1L;
    private static final long INIT_BIT_LAST_NAME = 0x2L;
    private static final long INIT_BIT_ABOUT = 0x4L;
    private static final long INIT_BIT_CHARGE = 0x8L;
    private static final long INIT_BIT_CHARGE_DURATION = 0x10L;
    private static final long INIT_BIT_LOCATION = 0x20L;
    private long initBits = 0x3fL;

    private @Nullable UUID caretakerId;
    private @Nullable String firstName;
    private @Nullable String lastName;
    private @Nullable String about;
    private @Nullable Double charge;
    private @Nullable String chargeDuration;
    private @Nullable String location;

    private Builder() {
    }

    /**
     * Fill a builder with attribute values from the provided {@code Caretaker} instance.
     * Regular attribute values will be replaced with those from the given instance.
     * Absent optional values will not replace present values.
     * @param instance The instance from which to copy values
     * @return {@code this} builder for use in a chained invocation
     */
    @CanIgnoreReturnValue 
    public final Builder from(Caretaker instance) {
      Objects.requireNonNull(instance, "instance");
      @Nullable UUID caretakerIdValue = instance.getCaretakerId();
      if (caretakerIdValue != null) {
        caretakerId(caretakerIdValue);
      }
      firstName(instance.getFirstName());
      lastName(instance.getLastName());
      about(instance.getAbout());
      charge(instance.getCharge());
      chargeDuration(instance.getChargeDuration());
      location(instance.getLocation());
      return this;
    }

    /**
     * Initializes the value for the {@link Caretaker#getCaretakerId() caretakerId} attribute.
     * @param caretakerId The value for caretakerId (can be {@code null})
     * @return {@code this} builder for use in a chained invocation
     */
    @CanIgnoreReturnValue 
    @JsonProperty("caretakerId")
    public final Builder caretakerId(@Nullable UUID caretakerId) {
      this.caretakerId = caretakerId;
      return this;
    }

    /**
     * Initializes the value for the {@link Caretaker#getFirstName() firstName} attribute.
     * @param firstName The value for firstName 
     * @return {@code this} builder for use in a chained invocation
     */
    @CanIgnoreReturnValue 
    @JsonProperty("firstName")
    public final Builder firstName(String firstName) {
      this.firstName = Objects.requireNonNull(firstName, "firstName");
      initBits &= ~INIT_BIT_FIRST_NAME;
      return this;
    }

    /**
     * Initializes the value for the {@link Caretaker#getLastName() lastName} attribute.
     * @param lastName The value for lastName 
     * @return {@code this} builder for use in a chained invocation
     */
    @CanIgnoreReturnValue 
    @JsonProperty("lastName")
    public final Builder lastName(String lastName) {
      this.lastName = Objects.requireNonNull(lastName, "lastName");
      initBits &= ~INIT_BIT_LAST_NAME;
      return this;
    }

    /**
     * Initializes the value for the {@link Caretaker#getAbout() about} attribute.
     * @param about The value for about 
     * @return {@code this} builder for use in a chained invocation
     */
    @CanIgnoreReturnValue 
    @JsonProperty("about")
    public final Builder about(String about) {
      this.about = Objects.requireNonNull(about, "about");
      initBits &= ~INIT_BIT_ABOUT;
      return this;
    }

    /**
     * Initializes the value for the {@link Caretaker#getCharge() charge} attribute.
     * @param charge The value for charge 
     * @return {@code this} builder for use in a chained invocation
     */
    @CanIgnoreReturnValue 
    @JsonProperty("charge")
    public final Builder charge(Double charge) {
      this.charge = Objects.requireNonNull(charge, "charge");
      initBits &= ~INIT_BIT_CHARGE;
      return this;
    }

    /**
     * Initializes the value for the {@link Caretaker#getChargeDuration() chargeDuration} attribute.
     * @param chargeDuration The value for chargeDuration 
     * @return {@code this} builder for use in a chained invocation
     */
    @CanIgnoreReturnValue 
    @JsonProperty("chargeDuration")
    public final Builder chargeDuration(String chargeDuration) {
      this.chargeDuration = Objects.requireNonNull(chargeDuration, "chargeDuration");
      initBits &= ~INIT_BIT_CHARGE_DURATION;
      return this;
    }

    /**
     * Initializes the value for the {@link Caretaker#getLocation() location} attribute.
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
     * Builds a new {@link ImmutableCaretaker ImmutableCaretaker}.
     * @return An immutable instance of Caretaker
     * @throws java.lang.IllegalStateException if any required attributes are missing
     */
    public ImmutableCaretaker build() {
      if (initBits != 0) {
        throw new IllegalStateException(formatRequiredAttributesMessage());
      }
      return new ImmutableCaretaker(caretakerId, firstName, lastName, about, charge, chargeDuration, location);
    }

    private String formatRequiredAttributesMessage() {
      List<String> attributes = new ArrayList<>();
      if ((initBits & INIT_BIT_FIRST_NAME) != 0) attributes.add("firstName");
      if ((initBits & INIT_BIT_LAST_NAME) != 0) attributes.add("lastName");
      if ((initBits & INIT_BIT_ABOUT) != 0) attributes.add("about");
      if ((initBits & INIT_BIT_CHARGE) != 0) attributes.add("charge");
      if ((initBits & INIT_BIT_CHARGE_DURATION) != 0) attributes.add("chargeDuration");
      if ((initBits & INIT_BIT_LOCATION) != 0) attributes.add("location");
      return "Cannot build Caretaker, some of required attributes are not set " + attributes;
    }
  }
}

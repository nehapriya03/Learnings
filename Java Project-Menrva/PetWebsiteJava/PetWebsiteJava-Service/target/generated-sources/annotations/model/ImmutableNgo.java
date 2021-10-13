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
 * Immutable implementation of {@link Ngo}.
 * <p>
 * Use the builder to create immutable instances:
 * {@code ImmutableNgo.builder()}.
 */
@Generated(from = "Ngo", generator = "Immutables")
@SuppressWarnings({"all"})
@ParametersAreNonnullByDefault
@javax.annotation.Generated("org.immutables.processor.ProxyProcessor")
@Immutable
@CheckReturnValue
@JsonIgnoreProperties(ignoreUnknown = true)
public final class ImmutableNgo implements Ngo {
  private final @Nullable UUID ngoId;
  private final String name;
  private final String upiId;
  private final String bankIfsc;
  private final String accountNumber;
  private final Integer phoneNumber;
  private final String address;
  private final String about;

  private ImmutableNgo(
      @Nullable UUID ngoId,
      String name,
      String upiId,
      String bankIfsc,
      String accountNumber,
      Integer phoneNumber,
      String address,
      String about) {
    this.ngoId = ngoId;
    this.name = name;
    this.upiId = upiId;
    this.bankIfsc = bankIfsc;
    this.accountNumber = accountNumber;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.about = about;
  }

  /**
   * @return The value of the {@code ngoId} attribute
   */
  @JsonProperty("ngoId")
  @Override
  public @Nullable UUID getNgoId() {
    return ngoId;
  }

  /**
   * @return The value of the {@code name} attribute
   */
  @JsonProperty("name")
  @Override
  public String getName() {
    return name;
  }

  /**
   * @return The value of the {@code upiId} attribute
   */
  @JsonProperty("upiId")
  @Override
  public String getUpiId() {
    return upiId;
  }

  /**
   * @return The value of the {@code bankIfsc} attribute
   */
  @JsonProperty("bankIfsc")
  @Override
  public String getBankIfsc() {
    return bankIfsc;
  }

  /**
   * @return The value of the {@code accountNumber} attribute
   */
  @JsonProperty("accountNumber")
  @Override
  public String getAccountNumber() {
    return accountNumber;
  }

  /**
   * @return The value of the {@code phoneNumber} attribute
   */
  @JsonProperty("phoneNumber")
  @Override
  public Integer getPhoneNumber() {
    return phoneNumber;
  }

  /**
   * @return The value of the {@code address} attribute
   */
  @JsonProperty("address")
  @Override
  public String getAddress() {
    return address;
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
   * Copy the current immutable object by setting a value for the {@link Ngo#getNgoId() ngoId} attribute.
   * A shallow reference equality check is used to prevent copying of the same value by returning {@code this}.
   * @param value A new value for ngoId (can be {@code null})
   * @return A modified copy of the {@code this} object
   */
  public final ImmutableNgo withNgoId(@Nullable UUID value) {
    if (this.ngoId == value) return this;
    return new ImmutableNgo(
        value,
        this.name,
        this.upiId,
        this.bankIfsc,
        this.accountNumber,
        this.phoneNumber,
        this.address,
        this.about);
  }

  /**
   * Copy the current immutable object by setting a value for the {@link Ngo#getName() name} attribute.
   * An equals check used to prevent copying of the same value by returning {@code this}.
   * @param value A new value for name
   * @return A modified copy of the {@code this} object
   */
  public final ImmutableNgo withName(String value) {
    String newValue = Objects.requireNonNull(value, "name");
    if (this.name.equals(newValue)) return this;
    return new ImmutableNgo(
        this.ngoId,
        newValue,
        this.upiId,
        this.bankIfsc,
        this.accountNumber,
        this.phoneNumber,
        this.address,
        this.about);
  }

  /**
   * Copy the current immutable object by setting a value for the {@link Ngo#getUpiId() upiId} attribute.
   * An equals check used to prevent copying of the same value by returning {@code this}.
   * @param value A new value for upiId
   * @return A modified copy of the {@code this} object
   */
  public final ImmutableNgo withUpiId(String value) {
    String newValue = Objects.requireNonNull(value, "upiId");
    if (this.upiId.equals(newValue)) return this;
    return new ImmutableNgo(
        this.ngoId,
        this.name,
        newValue,
        this.bankIfsc,
        this.accountNumber,
        this.phoneNumber,
        this.address,
        this.about);
  }

  /**
   * Copy the current immutable object by setting a value for the {@link Ngo#getBankIfsc() bankIfsc} attribute.
   * An equals check used to prevent copying of the same value by returning {@code this}.
   * @param value A new value for bankIfsc
   * @return A modified copy of the {@code this} object
   */
  public final ImmutableNgo withBankIfsc(String value) {
    String newValue = Objects.requireNonNull(value, "bankIfsc");
    if (this.bankIfsc.equals(newValue)) return this;
    return new ImmutableNgo(
        this.ngoId,
        this.name,
        this.upiId,
        newValue,
        this.accountNumber,
        this.phoneNumber,
        this.address,
        this.about);
  }

  /**
   * Copy the current immutable object by setting a value for the {@link Ngo#getAccountNumber() accountNumber} attribute.
   * An equals check used to prevent copying of the same value by returning {@code this}.
   * @param value A new value for accountNumber
   * @return A modified copy of the {@code this} object
   */
  public final ImmutableNgo withAccountNumber(String value) {
    String newValue = Objects.requireNonNull(value, "accountNumber");
    if (this.accountNumber.equals(newValue)) return this;
    return new ImmutableNgo(
        this.ngoId,
        this.name,
        this.upiId,
        this.bankIfsc,
        newValue,
        this.phoneNumber,
        this.address,
        this.about);
  }

  /**
   * Copy the current immutable object by setting a value for the {@link Ngo#getPhoneNumber() phoneNumber} attribute.
   * An equals check used to prevent copying of the same value by returning {@code this}.
   * @param value A new value for phoneNumber
   * @return A modified copy of the {@code this} object
   */
  public final ImmutableNgo withPhoneNumber(Integer value) {
    Integer newValue = Objects.requireNonNull(value, "phoneNumber");
    if (this.phoneNumber.equals(newValue)) return this;
    return new ImmutableNgo(
        this.ngoId,
        this.name,
        this.upiId,
        this.bankIfsc,
        this.accountNumber,
        newValue,
        this.address,
        this.about);
  }

  /**
   * Copy the current immutable object by setting a value for the {@link Ngo#getAddress() address} attribute.
   * An equals check used to prevent copying of the same value by returning {@code this}.
   * @param value A new value for address
   * @return A modified copy of the {@code this} object
   */
  public final ImmutableNgo withAddress(String value) {
    String newValue = Objects.requireNonNull(value, "address");
    if (this.address.equals(newValue)) return this;
    return new ImmutableNgo(
        this.ngoId,
        this.name,
        this.upiId,
        this.bankIfsc,
        this.accountNumber,
        this.phoneNumber,
        newValue,
        this.about);
  }

  /**
   * Copy the current immutable object by setting a value for the {@link Ngo#getAbout() about} attribute.
   * An equals check used to prevent copying of the same value by returning {@code this}.
   * @param value A new value for about
   * @return A modified copy of the {@code this} object
   */
  public final ImmutableNgo withAbout(String value) {
    String newValue = Objects.requireNonNull(value, "about");
    if (this.about.equals(newValue)) return this;
    return new ImmutableNgo(
        this.ngoId,
        this.name,
        this.upiId,
        this.bankIfsc,
        this.accountNumber,
        this.phoneNumber,
        this.address,
        newValue);
  }

  /**
   * This instance is equal to all instances of {@code ImmutableNgo} that have equal attribute values.
   * @return {@code true} if {@code this} is equal to {@code another} instance
   */
  @Override
  public boolean equals(@Nullable Object another) {
    if (this == another) return true;
    return another instanceof ImmutableNgo
        && equalTo((ImmutableNgo) another);
  }

  private boolean equalTo(ImmutableNgo another) {
    return Objects.equals(ngoId, another.ngoId)
        && name.equals(another.name)
        && upiId.equals(another.upiId)
        && bankIfsc.equals(another.bankIfsc)
        && accountNumber.equals(another.accountNumber)
        && phoneNumber.equals(another.phoneNumber)
        && address.equals(another.address)
        && about.equals(another.about);
  }

  /**
   * Computes a hash code from attributes: {@code ngoId}, {@code name}, {@code upiId}, {@code bankIfsc}, {@code accountNumber}, {@code phoneNumber}, {@code address}, {@code about}.
   * @return hashCode value
   */
  @Override
  public int hashCode() {
    @Var int h = 5381;
    h += (h << 5) + Objects.hashCode(ngoId);
    h += (h << 5) + name.hashCode();
    h += (h << 5) + upiId.hashCode();
    h += (h << 5) + bankIfsc.hashCode();
    h += (h << 5) + accountNumber.hashCode();
    h += (h << 5) + phoneNumber.hashCode();
    h += (h << 5) + address.hashCode();
    h += (h << 5) + about.hashCode();
    return h;
  }

  /**
   * Prints the immutable value {@code Ngo} with attribute values.
   * @return A string representation of the value
   */
  @Override
  public String toString() {
    return MoreObjects.toStringHelper("Ngo")
        .omitNullValues()
        .add("ngoId", ngoId)
        .add("name", name)
        .add("upiId", upiId)
        .add("bankIfsc", bankIfsc)
        .add("accountNumber", accountNumber)
        .add("phoneNumber", phoneNumber)
        .add("address", address)
        .add("about", about)
        .toString();
  }

  /**
   * Utility type used to correctly read immutable object from JSON representation.
   * @deprecated Do not use this type directly, it exists only for the <em>Jackson</em>-binding infrastructure
   */
  @Generated(from = "Ngo", generator = "Immutables")
  @Deprecated
  @SuppressWarnings("Immutable")
  @JsonDeserialize
  @JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.NONE)
  static final class Json implements Ngo {
    @Nullable UUID ngoId;
    @Nullable String name;
    @Nullable String upiId;
    @Nullable String bankIfsc;
    @Nullable String accountNumber;
    @Nullable Integer phoneNumber;
    @Nullable String address;
    @Nullable String about;
    @JsonProperty("ngoId")
    public void setNgoId(@Nullable UUID ngoId) {
      this.ngoId = ngoId;
    }
    @JsonProperty("name")
    public void setName(String name) {
      this.name = name;
    }
    @JsonProperty("upiId")
    public void setUpiId(String upiId) {
      this.upiId = upiId;
    }
    @JsonProperty("bankIfsc")
    public void setBankIfsc(String bankIfsc) {
      this.bankIfsc = bankIfsc;
    }
    @JsonProperty("accountNumber")
    public void setAccountNumber(String accountNumber) {
      this.accountNumber = accountNumber;
    }
    @JsonProperty("phoneNumber")
    public void setPhoneNumber(Integer phoneNumber) {
      this.phoneNumber = phoneNumber;
    }
    @JsonProperty("address")
    public void setAddress(String address) {
      this.address = address;
    }
    @JsonProperty("about")
    public void setAbout(String about) {
      this.about = about;
    }
    @Override
    public UUID getNgoId() { throw new UnsupportedOperationException(); }
    @Override
    public String getName() { throw new UnsupportedOperationException(); }
    @Override
    public String getUpiId() { throw new UnsupportedOperationException(); }
    @Override
    public String getBankIfsc() { throw new UnsupportedOperationException(); }
    @Override
    public String getAccountNumber() { throw new UnsupportedOperationException(); }
    @Override
    public Integer getPhoneNumber() { throw new UnsupportedOperationException(); }
    @Override
    public String getAddress() { throw new UnsupportedOperationException(); }
    @Override
    public String getAbout() { throw new UnsupportedOperationException(); }
  }

  /**
   * @param json A JSON-bindable data structure
   * @return An immutable value type
   * @deprecated Do not use this method directly, it exists only for the <em>Jackson</em>-binding infrastructure
   */
  @Deprecated
  @JsonCreator(mode = JsonCreator.Mode.DELEGATING)
  static ImmutableNgo fromJson(Json json) {
    ImmutableNgo.Builder builder = ImmutableNgo.builder();
    if (json.ngoId != null) {
      builder.ngoId(json.ngoId);
    }
    if (json.name != null) {
      builder.name(json.name);
    }
    if (json.upiId != null) {
      builder.upiId(json.upiId);
    }
    if (json.bankIfsc != null) {
      builder.bankIfsc(json.bankIfsc);
    }
    if (json.accountNumber != null) {
      builder.accountNumber(json.accountNumber);
    }
    if (json.phoneNumber != null) {
      builder.phoneNumber(json.phoneNumber);
    }
    if (json.address != null) {
      builder.address(json.address);
    }
    if (json.about != null) {
      builder.about(json.about);
    }
    return builder.build();
  }

  /**
   * Creates an immutable copy of a {@link Ngo} value.
   * Uses accessors to get values to initialize the new immutable instance.
   * If an instance is already immutable, it is returned as is.
   * @param instance The instance to copy
   * @return A copied immutable Ngo instance
   */
  public static ImmutableNgo copyOf(Ngo instance) {
    if (instance instanceof ImmutableNgo) {
      return (ImmutableNgo) instance;
    }
    return ImmutableNgo.builder()
        .from(instance)
        .build();
  }

  /**
   * Creates a builder for {@link ImmutableNgo ImmutableNgo}.
   * <pre>
   * ImmutableNgo.builder()
   *    .ngoId(UUID | null) // nullable {@link Ngo#getNgoId() ngoId}
   *    .name(String) // required {@link Ngo#getName() name}
   *    .upiId(String) // required {@link Ngo#getUpiId() upiId}
   *    .bankIfsc(String) // required {@link Ngo#getBankIfsc() bankIfsc}
   *    .accountNumber(String) // required {@link Ngo#getAccountNumber() accountNumber}
   *    .phoneNumber(Integer) // required {@link Ngo#getPhoneNumber() phoneNumber}
   *    .address(String) // required {@link Ngo#getAddress() address}
   *    .about(String) // required {@link Ngo#getAbout() about}
   *    .build();
   * </pre>
   * @return A new ImmutableNgo builder
   */
  public static ImmutableNgo.Builder builder() {
    return new ImmutableNgo.Builder();
  }

  /**
   * Builds instances of type {@link ImmutableNgo ImmutableNgo}.
   * Initialize attributes and then invoke the {@link #build()} method to create an
   * immutable instance.
   * <p><em>{@code Builder} is not thread-safe and generally should not be stored in a field or collection,
   * but instead used immediately to create instances.</em>
   */
  @Generated(from = "Ngo", generator = "Immutables")
  @NotThreadSafe
  public static final class Builder {
    private static final long INIT_BIT_NAME = 0x1L;
    private static final long INIT_BIT_UPI_ID = 0x2L;
    private static final long INIT_BIT_BANK_IFSC = 0x4L;
    private static final long INIT_BIT_ACCOUNT_NUMBER = 0x8L;
    private static final long INIT_BIT_PHONE_NUMBER = 0x10L;
    private static final long INIT_BIT_ADDRESS = 0x20L;
    private static final long INIT_BIT_ABOUT = 0x40L;
    private long initBits = 0x7fL;

    private @Nullable UUID ngoId;
    private @Nullable String name;
    private @Nullable String upiId;
    private @Nullable String bankIfsc;
    private @Nullable String accountNumber;
    private @Nullable Integer phoneNumber;
    private @Nullable String address;
    private @Nullable String about;

    private Builder() {
    }

    /**
     * Fill a builder with attribute values from the provided {@code Ngo} instance.
     * Regular attribute values will be replaced with those from the given instance.
     * Absent optional values will not replace present values.
     * @param instance The instance from which to copy values
     * @return {@code this} builder for use in a chained invocation
     */
    @CanIgnoreReturnValue 
    public final Builder from(Ngo instance) {
      Objects.requireNonNull(instance, "instance");
      @Nullable UUID ngoIdValue = instance.getNgoId();
      if (ngoIdValue != null) {
        ngoId(ngoIdValue);
      }
      name(instance.getName());
      upiId(instance.getUpiId());
      bankIfsc(instance.getBankIfsc());
      accountNumber(instance.getAccountNumber());
      phoneNumber(instance.getPhoneNumber());
      address(instance.getAddress());
      about(instance.getAbout());
      return this;
    }

    /**
     * Initializes the value for the {@link Ngo#getNgoId() ngoId} attribute.
     * @param ngoId The value for ngoId (can be {@code null})
     * @return {@code this} builder for use in a chained invocation
     */
    @CanIgnoreReturnValue 
    @JsonProperty("ngoId")
    public final Builder ngoId(@Nullable UUID ngoId) {
      this.ngoId = ngoId;
      return this;
    }

    /**
     * Initializes the value for the {@link Ngo#getName() name} attribute.
     * @param name The value for name 
     * @return {@code this} builder for use in a chained invocation
     */
    @CanIgnoreReturnValue 
    @JsonProperty("name")
    public final Builder name(String name) {
      this.name = Objects.requireNonNull(name, "name");
      initBits &= ~INIT_BIT_NAME;
      return this;
    }

    /**
     * Initializes the value for the {@link Ngo#getUpiId() upiId} attribute.
     * @param upiId The value for upiId 
     * @return {@code this} builder for use in a chained invocation
     */
    @CanIgnoreReturnValue 
    @JsonProperty("upiId")
    public final Builder upiId(String upiId) {
      this.upiId = Objects.requireNonNull(upiId, "upiId");
      initBits &= ~INIT_BIT_UPI_ID;
      return this;
    }

    /**
     * Initializes the value for the {@link Ngo#getBankIfsc() bankIfsc} attribute.
     * @param bankIfsc The value for bankIfsc 
     * @return {@code this} builder for use in a chained invocation
     */
    @CanIgnoreReturnValue 
    @JsonProperty("bankIfsc")
    public final Builder bankIfsc(String bankIfsc) {
      this.bankIfsc = Objects.requireNonNull(bankIfsc, "bankIfsc");
      initBits &= ~INIT_BIT_BANK_IFSC;
      return this;
    }

    /**
     * Initializes the value for the {@link Ngo#getAccountNumber() accountNumber} attribute.
     * @param accountNumber The value for accountNumber 
     * @return {@code this} builder for use in a chained invocation
     */
    @CanIgnoreReturnValue 
    @JsonProperty("accountNumber")
    public final Builder accountNumber(String accountNumber) {
      this.accountNumber = Objects.requireNonNull(accountNumber, "accountNumber");
      initBits &= ~INIT_BIT_ACCOUNT_NUMBER;
      return this;
    }

    /**
     * Initializes the value for the {@link Ngo#getPhoneNumber() phoneNumber} attribute.
     * @param phoneNumber The value for phoneNumber 
     * @return {@code this} builder for use in a chained invocation
     */
    @CanIgnoreReturnValue 
    @JsonProperty("phoneNumber")
    public final Builder phoneNumber(Integer phoneNumber) {
      this.phoneNumber = Objects.requireNonNull(phoneNumber, "phoneNumber");
      initBits &= ~INIT_BIT_PHONE_NUMBER;
      return this;
    }

    /**
     * Initializes the value for the {@link Ngo#getAddress() address} attribute.
     * @param address The value for address 
     * @return {@code this} builder for use in a chained invocation
     */
    @CanIgnoreReturnValue 
    @JsonProperty("address")
    public final Builder address(String address) {
      this.address = Objects.requireNonNull(address, "address");
      initBits &= ~INIT_BIT_ADDRESS;
      return this;
    }

    /**
     * Initializes the value for the {@link Ngo#getAbout() about} attribute.
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
     * Builds a new {@link ImmutableNgo ImmutableNgo}.
     * @return An immutable instance of Ngo
     * @throws java.lang.IllegalStateException if any required attributes are missing
     */
    public ImmutableNgo build() {
      if (initBits != 0) {
        throw new IllegalStateException(formatRequiredAttributesMessage());
      }
      return new ImmutableNgo(ngoId, name, upiId, bankIfsc, accountNumber, phoneNumber, address, about);
    }

    private String formatRequiredAttributesMessage() {
      List<String> attributes = new ArrayList<>();
      if ((initBits & INIT_BIT_NAME) != 0) attributes.add("name");
      if ((initBits & INIT_BIT_UPI_ID) != 0) attributes.add("upiId");
      if ((initBits & INIT_BIT_BANK_IFSC) != 0) attributes.add("bankIfsc");
      if ((initBits & INIT_BIT_ACCOUNT_NUMBER) != 0) attributes.add("accountNumber");
      if ((initBits & INIT_BIT_PHONE_NUMBER) != 0) attributes.add("phoneNumber");
      if ((initBits & INIT_BIT_ADDRESS) != 0) attributes.add("address");
      if ((initBits & INIT_BIT_ABOUT) != 0) attributes.add("about");
      return "Cannot build Ngo, some of required attributes are not set " + attributes;
    }
  }
}

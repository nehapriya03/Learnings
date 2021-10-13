package mapper;

import model.ImmutableNgo;
import model.Ngo;
import org.bson.Document;

import java.util.UUID;

public class NgoMapper {

    public Ngo documentToNgo(Document document) {
        return ImmutableNgo.builder()
                .ngoId(UUID.fromString(document.getString("ngoId")))
                .name(document.getString("name"))
                .upiId(document.getString("upiId"))
                .bankIfsc(document.getString("bankIfsc"))
                .accountNumber(document.getString("accountNumber"))
                .phoneNumber(document.getInteger("phoneNumber"))
                .address(document.getString("address"))
                .about(document.getString("address"))
                .build();
    }

    public Document ngoToDocument(Ngo ngo) {
        Document document = new Document();
        document.append("ngoId", ngo.getNgoId().toString());
        document.append("name", ngo.getName());
        document.append("upiId", ngo.getUpiId());
        document.append("bankIfsc", ngo.getUpiId());
        document.append("accountNumber", ngo.getAccountNumber());
        document.append("phoneNumber", ngo.getPhoneNumber());
        document.append("address", ngo.getAddress());
        document.append("about", ngo.getAbout());
        return document;
    }
}

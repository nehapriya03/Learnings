package mapper;

import model.Caretaker;
import model.ImmutableCaretaker;
import org.bson.Document;

import java.util.UUID;

public class CaretakerMapper {

    public Caretaker documentToCaretaker(Document document) {
        return ImmutableCaretaker.builder()
                .caretakerId(UUID.fromString(document.getString("caretakerId")))
                .firstName(document.getString("firstName"))
                .lastName(document.getString("lastName"))
                .about(document.getString("about"))
                .charge(document.getDouble("charge"))
                .chargeDuration(document.getString("chargeDuration"))
                .location(document.getString("location"))
                .build();
    }

    public Document caretakerToDocument(Caretaker caretaker) {
        Document document = new Document();
        document.append("caretakerId", caretaker.getCaretakerId().toString());
        document.append("firstName", caretaker.getFirstName());
        document.append("lastName", caretaker.getLastName());
        document.append("about", caretaker.getAbout());
        document.append("charge", caretaker.getCharge());
        document.append("chargeDuration", caretaker.getChargeDuration());
        document.append("location", caretaker.getChargeDuration());
        return document;
    }
}

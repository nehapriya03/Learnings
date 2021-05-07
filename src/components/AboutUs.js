import React, { useEffect } from "react";
import "../css/General.css";
import logo from "../assets/philozooic.png";

const AboutUs = () => {
  useEffect(() => {
    document.title = "About Us | Philozooic";
  });

  return (
    <>
      <div className={"section"}>
        <h1 className={"heading-text about"}>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          tempus justo at sapien fermentum pretium. Praesent eu orci suscipit,
          tristique dolor sit amet, varius urna. Vivamus metus nunc, fringilla
          id dui at, eleifend commodo neque. Mauris ornare accumsan eros, a
          faucibus sem dictum id. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Nam facilisis elit nulla, nec suscipit sem aliquam
          ut. Pellentesque mollis porttitor lacus, nec malesuada velit rhoncus
          eu. Duis at lobortis odio. Integer consequat id est vitae euismod.
        </p>
        <p>
          Donec facilisis ex at justo pellentesque, non luctus justo lobortis.
          Aenean eget eros gravida, porttitor eros in, ultricies mi. Etiam
          tempor justo sit amet mi ultricies hendrerit. Cras non ultrices justo.
          Fusce eu sodales augue. Quisque tincidunt ipsum nec scelerisque
          iaculis. Curabitur in fringilla velit. Nullam elit ante, laoreet id
          lobortis sit amet, egestas nec augue. Fusce non posuere turpis. Fusce
          nec mattis nisl. Aliquam dapibus urna suscipit cursus lobortis.
          Phasellus maximus, erat vitae feugiat luctus, libero turpis
          pellentesque odio, ut interdum nibh dolor id odio.
        </p>
        <h3>Our Mission</h3>
        <p>
          Phasellus congue varius ante, nec porta sapien malesuada nec. Aliquam
          mauris lacus, scelerisque vestibulum eleifend consectetur, vehicula
          vel velit. Aenean congue libero id mi commodo, sit amet malesuada
          ligula ultricies. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Praesent feugiat laoreet
          velit sit amet feugiat. Aliquam sed aliquam diam. Nam lacinia vitae
          nibh non mattis. Morbi interdum, libero fringilla mattis iaculis,
          massa sem cursus neque, a consequat mi nunc non risus. Ut non auctor
          lectus, lobortis auctor purus. Proin sollicitudin, mi ut feugiat
          eleifend, est massa hendrerit ligula, in lobortis dolor risus sed
          risus. Etiam commodo leo vel commodo tempus. Pellentesque porta mauris
          tortor. Vestibulum vel orci et ante molestie congue.
        </p>
        <div uk-grid={""}>
          <div className={"uk-width-2-3@l"} style={{ margin: "auto" }}>
            <p>
              Vivamus dictum mi ligula, in ornare mauris semper et. In nisi
              tortor, mollis sed risus quis, mollis congue massa. Sed rutrum
              scelerisque mi, id rhoncus erat ultrices id. Nunc euismod sem a
              mattis porttitor. Duis vehicula metus vel libero condimentum
              tempor. Sed consequat justo non eros varius, quis tristique massa
              imperdiet. Praesent molestie aliquam sapien ullamcorper dapibus.
              Nam tempus sollicitudin nisi ut dignissim. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Sed sed elit turpis. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Curabitur posuere
              tincidunt quam in commodo.
            </p>
          </div>
          <div className={"uk-width-1-3@l"}>
            <img src={logo} alt={"Philozooic"} />
          </div>
        </div>

        <p>
          Sed quis velit ut nulla cursus sollicitudin nec a urna. Maecenas
          iaculis a velit nec rhoncus. Suspendisse egestas, enim rutrum
          tincidunt consectetur, odio lacus consectetur urna, sit amet imperdiet
          odio sem ut neque. Nunc dictum, neque et gravida hendrerit, lectus
          nulla pellentesque justo, nec viverra dui magna a ante. Integer sed
          neque lorem. Vestibulum quis interdum ante. Fusce nunc metus,
          facilisis pellentesque neque euismod, feugiat venenatis urna. Sed
          iaculis lacus non erat posuere sollicitudin. Pellentesque maximus
          interdum massa non vehicula. Phasellus euismod vel turpis id cursus.
        </p>
      </div>
    </>
  );
};

export default AboutUs;

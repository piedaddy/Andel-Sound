import React from "react";
import "./About.scss";

export default function About({ inEng }) {
  return (
    <section className="services_container" id="about">
      <div className="services">
        <h2>{inEng ? "blah" : "czech"}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          fugiat harum animi at omnis. Excepturi nesciunt earum fuga sit ut
          optio quisquam dicta corrupti at distinctio totam laboriosam soluta
          vel delectus ad odit aut quibusdam, voluptatum error facere!
          Reprehenderit blanditiis rem ea nesciunt necessitatibus nulla iste sed
          quibusdam voluptatem explicabo dolorem est sunt ut eligendi corrupti,
          doloremque voluptas fugit repellendus.
        </p>

        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          fugiat harum animi at omnis. Excepturi nesciunt earum fuga sit ut
          optio quisquam dicta corrupti at distinctio totam laboriosam soluta
          vel delectus ad odit aut quibusdam, voluptatum error facere!
          Reprehenderit blanditiis rem ea nesciunt necessitatibus nulla iste sed
          quibusdam voluptatem explicabo dolorem est sunt ut eligendi corrupti,
          doloremque voluptas fugit repellendus.
        </p> */}
      </div>
    
    </section>
  );
}

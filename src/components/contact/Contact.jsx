import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Redes from "../home/Redes";
import "./contact.css";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert("Sending message");
    emailjs
      .sendForm(
        "service_joelpablo",
        "template_nng8ozj",
        form.current,
        "U0iw3vRquTP2i_izT"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <h2>Let's connect!</h2>
      <div className="contact__container">
        
          <form className="form" ref={form} onSubmit={sendEmail}>
            <input placeholder="Name" type="text" name="name" />
            <input placeholder="email" type="email" name="mail" required />
            <textarea
              type="textarea"
              placeholder="Message here"
              name="message"
              required
            />
            <input className="boton" type="submit" value="Send" required />
          </form>

        <Redes />
      </div>
    </section>
  );
}

export default Contact;

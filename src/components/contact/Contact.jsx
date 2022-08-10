import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Redes from "../home/Redes";
import "./contact.css";
import { MdOutlineEditCalendar } from "react-icons/md";
import { PopupWidget } from "react-calendly";
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
      <h2>Let's talk!</h2>
      <div className="contact__container">
        <div className="contact__cta">
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
        </div>

        <Redes />
        <PopupWidget
          url="https://calendly.com/joelpablo/meet"
          /*
           * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
           * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
           */
          rootElement={document.getElementById("root")}
          text={<MdOutlineEditCalendar />}
          textColor="#ffffff"
          color="#00a2ff"
        />
      </div>
    </section>
  );
}

export default Contact;

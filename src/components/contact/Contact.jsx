import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Redes from "../home/Redes"
import "./contact.css"

import { HiMail } from "react-icons/hi";
import { IoLogoWhatsapp } from "react-icons/io";


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert("Sending message")
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
          alert("Message sent")
          form.current.reset()
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
          <div className="contact__item">
            <a href="mailto:joel5vega@gmail.com" target="_blank" rel="noreferrer">
              <h5>Mail</h5>
              <div className="contact__icon">
                <HiMail />
              </div>
            </a>
          </div>
          <div className="contact__item">
            <a href="https://wa.me?phone=59171631006" target="_blank" rel="noreferrer">
              <h5>Whatsapp</h5>
              <div className="contact__icon">
                <IoLogoWhatsapp />
              </div>
            </a>
          </div>
        </div>
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
        <Redes/>
      </div>
    </section>
  );
}

export default Contact;

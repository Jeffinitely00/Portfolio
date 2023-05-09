import emailjs from '@emailjs/browser';
import React, { useRef } from "react";
import "./Contact.scss";
import { contacts } from "../../../Data";
// import { socialIcons } from '../../../Data';
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j0m4cn1', 'template_ywogx2j', form.current, 'qF2xUKOlvpqpLV2LE')
      .then((result) => {
          console.log(result.text);
          console.log("Message Sent")
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="container" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>get in touch</span>
        <h1>Contact Me</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_left_container"
        >
          <h3>Just Say Hi</h3>
          <p className="contact_text">
            As a professional Software Developer,
            developing real-world projects, I am ready to resolve any of your software needs and develop very powerful products that meet data efficiency standards, data integrity, and security standards, and also assure consistent timely delivery. As I freelanced on various technical projects
            to help sustain my many clients, I am more than delighted to have had
            accomplish another milestone in my growth and be a part of an established framework for supporting society.
          </p>
          {contacts.map((contact) => {
            return (
              <div className="contact_left" key={contact.id}>
                <div className="icon">{contact.icon}</div>
                <p>{contact.infoText}</p>
              </div>
            );
          })}
          {/* <div className="social_icons">
            {socialIcons.map((socialIcon, index) => {
            return (
              <div key={index} >
                {socialIcon}
              </div>
            )
          })}
          </div> */}
        </motion.div>
        <form ref={form} onSubmit={sendEmail}>
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [150, 0], opacity: 1 }}
            transition={{ duration: 1 }}
            className="contact_right"
          >
            <h3>Get In Touch</h3>
            <div className="row">
              <input type="text" placeholder="Full Name" name="user_name"/>
              {/* <input type="text" placeholder="Last name" /> */}
            </div>
            <div className="row">
              <input type="text" placeholder="Phone" name="user_phone"/>
              <input type="email" placeholder="Email" name="user_email" required/>
            </div>
            <div className="row">
              <textarea placeholder="message" name="message"></textarea>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="btn"
            >
              <input className="a" type="submit" value="Send" />
            </motion.div>
          </motion.div>
        </form>
      </div>

    </div>
  );
};

export default Contact;

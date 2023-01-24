import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import email from "../IMAGES/email.gif";

const Contacts = () => {
  const form = useRef();
  const SERVICE_ID = "service_3c7bqax";
  const TEMPLATE_ID = "template_e2ozf23";
  const USER_ID = "CL7BXTzM4PkE_qswv";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        alert("Message successfully sent");
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
      },
      e.target.reset
    );
  };

  return (
    <div className="contacts_container ">
      
      <img className="img1" src={email}></img>
  
      <div className="sub_contacts">
    
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input  className="glow-on-hover" type="submit" value="SHOOTH!" />
        </form>
      </div>
    </div>
  );
};

export default Contacts;

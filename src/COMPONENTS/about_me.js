import me from "../IMAGES/me.jpg";
import certificate from "../IMAGES/certificate.jpg";
import Pulse from "react-reveal/Pulse";

const AboutMe = () => {
  return (
    <div className="aboutme_container">
      <div className="just_me">
        <img className="me" src={me}></img>

        <p className="description1">
      
            <span className="hello">
              {" "}
              Hello , stranger !  <br />{" "}
            </span>
    
          My name is Boryana and I am a frontend developer, passionate about
          learning new technologies and crafting unique digital experiences.
          <br />
          Right now I am open to new opportunities - joining a team of creative
          developers. If you believe that we could be a good fit for eachother -
          drop me a{" "}
          <a  className="mess_link" href="/contacts" target={"_blank"}>
            Message 
          </a>{" "}
           ,visit my <a className="mess_link" href="https://www.linkedin.com/in/boryana-dimitrova94/" target={"_blank"}>LinkedIn</a> or send me an
 <a className="mess_link" href = "mailto:boryana.dimitrova789@gmail.com"> Email</a>   right away !     </p>
      </div>

      <div className="just_me2">
       

        
          <img className="my_diploma" src={certificate}></img>
      
      </div>
    </div>
  );
};

export default AboutMe;

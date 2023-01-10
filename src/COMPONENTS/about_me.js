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
              Hello , stranger ! 👋 <br />{" "}
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
        <div className="justme2_sub1">
          <h1 className="what_i_use">Technologies </h1>
          <p className="item1">HTML5</p>
          <p className="item2">CSS3</p>
          <p className="item1">SASS</p>
          <p className="item2">Javascript</p>
          <p className="item1">React</p>
          <p className="item2">Node.js</p>
          <p className="item1">MongoDB</p>
          <p className="item2">SQL</p>
          <p className="item1">Git/Github</p>
        </div>

        <div className="justme2_sub2">
          <img className="my_diploma" src={certificate}></img>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

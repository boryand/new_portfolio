import hey from "../IMAGES/hey.jpg";
import certificate from "../IMAGES/certificate.jpg";
import React from "react";
import Zoom from "react-reveal/Zoom";

const Landing = () => {
  const url1 = "https://main.d395u6ndg1stgh.amplifyapp.com/";
  const url2 = "https://main.d2jd8gki5jhbu3.amplifyapp.com/";

  const url3 = "https://main.d2uya9otszawh5.amplifyapp.com/";

  return (
    <div className="big_parent">
      <div className="navbar_container">
        {/* <a className="nav_link" href="/">
          home
        </a> */}
        <a className="nav_link" href="#personal">
          about me
        </a>
        <a className="nav_link" href="#projects">
          projects
        </a>
        <a className="nav_link" href="#certifications">
          certifications
        </a>
        <a className="nav_link" href="#get_intouch">
          contacts
        </a>
      </div>
      <div className="cont1">
        <span className="cont1_sub">
          <h1 className="lets_build"> Hi , I am Bobby !</h1>
          <p className="my_description">
            {" "}
            I am a web developer and I'm madly inlove with coding, passionate
            about learning new technologies and crafting unique digital
            experiences.
            <br />
            Right now I am open to new opportunities - joining a team of
            creative developers.Check out my{" "}
            <a className="bubbly" href="#projects">
              {" "}
              projects
            </a>{" "}
            to see what I can do, send me an{" "}
            <a className="bubbly" href="mailto:boryana.dimitrova789@gmail.com">
              {" "}
              email
            </a>{" "}
            or visit my{" "}
            <a
              target="blank"
              className="bubbly"
              href="https://www.linkedin.com/in/boryana-dimitrova94/"
            >
              {" "}
              LinkedIn
            </a>
            . 👀
          </p>
        </span>

        <Zoom right>
          <img className="landing" src={hey} />
        </Zoom>
      </div>

      <div className="aboutme_container">
        <p id="personal"> 👩About Me</p>
        <p className="description">
          Hola! My name is Boryana and as a full stack web developer with a
          passion for expanding my knowledge and staying up-to-date with the
          latest technologie. This website serves as a platform to showcase my
          professional skills, experiences, and projects. With a focus on
          creating responsive and user-friendly web applications, my portfolio
          highlights my dedication to delivering high-quality results to clients
          and employers. Whether you are a potential employer looking to hire a
          talented and driven web developer, or simply someone interested in
          exploring my work, my website is designed to provide a comprehensive
          overview of my expertise, accomplishments, and ongoing learning
          initiatives. So, feel free to browse my site and learn more about my
          journey as a full stack web developer. <br></br>Here are some of the
          technologies I have been using :
        </p>
        <div className="technologies">
          <div className="technologies_container">
            <p> ⋆ HTML5,CSS3</p>
            <p>⋆ Javascript /ES6/ </p>
            <p>⋆ React</p>
            <p> ⋆Sass</p>
          </div>
          <div className="technologies_container">
            <p> ⋆ Node.js</p>
            <p>⋆ Rest API </p>
            <p>⋆MongoDb</p>
            <p> ⋆SQL</p>
          </div>
          <div className="technologies_container">
            <p> ⋆ Git,Github</p>
            <p> ⋆Figma </p>
            <p> ⋆Agile Technologies</p>
          </div>
        </div>
        <div className="projects_container">
          <p id="projects"> ⚒️ Projects</p>

          <div className="projects_container">
            <div className="box1">
              <a href={url1} target="_blank">
                <img
                  className="img"
                  src="https://res.cloudinary.com/bobchi/image/upload/v1682508202/b1da20ad-b9ca-4958-8dd2-e88b7514ea7e_enmhk4.jpg"
                />
              </a>
              <div className="sub_box">
                <p className="description">
                  <p className="name1"> Max Lounge</p>
                  For this project I decided to test my Sass skills , so I
                  created this wesbite for a restaurant. <br></br> <br></br>
                  Technologies used : <br></br>
                  Javascript <br></br>
                  Sass <br></br>
                  React <br></br>
                </p>
              </div>
            </div>

            <div className="box2">
              <div className="sub_box">
                <p className="description">
                  <p className="name1"> Rina Beauty</p>
                  This website is created for a friend, who is a make-up artist
                  and she wanted a surpise with girly pink website. <br></br>{" "}
                  <br></br>
                  Technologies used : <br></br>
                  Javascript <br></br>
                  Sass <br></br>
                  React <br></br>
                </p>
              </div>
              <a href={url2} target="_blank">
                <img
                  className="img"
                  src="https://res.cloudinary.com/bobchi/image/upload/v1682508524/a9a26c6c-2be9-4ce4-b49b-ebd01c0d728e_fhsz59.jpg"
                />
              </a>
            </div>

            <div className="box3">
              <a href={url3} target="_blank">
                <img
                  className="img"
                  src="https://res.cloudinary.com/bobchi/image/upload/v1682508705/85284be8-ce57-408a-abd6-dc84cb2e1d36_t2n8qj.jpg"
                />
              </a>
              <div className="sub_box">
                <p className="description">
                  <p className="name1"> Zu Bar&Dinner</p>I created this project
                  for a restaurant owner in my area. She wanted dark and
                  sophisticated look and this is the result.
                  <br></br> <br></br>
                  Technologies used : <br></br>
                  Javascript <br></br>
                  Sass <br></br>
                  React <br></br>
                </p>
              </div>
            </div>
          </div>
        </div>

        <p id="certifications"> 📄 Certifications</p>
        <img className="certificate" src={certificate}></img>
      </div>
      <div className="contacts_container">
        <p id="get_intouch">Get in touch</p>
        <p className="get_intouch2">
          I would love to hear from you! If you have any questions, comments, or
          just want to say hi, feel free to send me an email. Thanks for
          visiting my website, and I look forward to connecting with you soon!
        </p>
        <a className="email_link" href="mailto:boryana.dimitrova789@gmail.com">
          <button className="email_btn"> Say Hi 👽</button>
        </a>
      </div>
    </div>
  );
};

export default Landing;

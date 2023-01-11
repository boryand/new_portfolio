import logo from "../IMAGES/logo.png";
import logo1 from "../IMAGES/logo1.gif";
import rina from "../IMAGES/rina.jpg";

const Projects = () => {
  const url1 = "https://main.d395u6ndg1stgh.amplifyapp.com/";
  const url2 = "https://main.d2jd8gki5jhbu3.amplifyapp.com/";

  const url3 = "https://www.zu-bar-and-dinner.com/";

  return (
    <div className="projects_container">
      <div className="number2">
        <div className="box1">
        <a href={url1} target="_blank">
          <img className="img" src={logo} />
        </a>
          <h3 className="name">Max Lounge</h3>
          <p className="description">
            For this project I decided to test my Sass skills , so I created
            this wesbite for a restaurant.
          </p>
          <h5 className="technologies"> Technologies used:</h5>
          <p className="tech">HTML, Sass</p>
          <p className="tech">Javascript</p>
          <p className="tech1">React</p>
        </div>
        <div className="box2">
        <a href={url2} target="_blank">
          <img className="img" src={rina} />
        </a>
          <h3 className="name">Rina Beauty</h3>
          <p className="description">
            This website is created for a friend, who is a make-up artist and
            she wanted a surpise with girly pink website.
          </p>
          <h5 className="technologies"> Technologies used:</h5>
          <p className="tech">HTML, Sass</p>
          <p className="tech">Javascript</p>
          <p className="tech1">React</p>
        </div>
        <div className="box3">
        <a href={url3} target="_blank">
          <img className="img" src={logo1} />
        </a>
          <h3 className="name">ZU Bar&Dinner</h3>
          <p className="description">
            I created this project for a restaurant owner in my area. She wanted
            dark and sophisticated look and this is the result.
          </p>
          <h5 className="technologies"> Technologies used:</h5>
          <p className="tech" >HTML, Sass</p>
          <p className="tech">Javascript</p>
          <p className="tech1">React</p>
        </div>
      </div>
      
    </div>
  );
};

export default Projects;


import landing2 from "../IMAGES/landing2.png";

const Landing = () => {
  return (
 
      <div className="cont1">
        <span className="cont1_sub">
          <h1 className="lets_build"> Hi , I am Bobby !</h1>
          <p className="my_description">
            {" "}
            I am a frontend developer and I'm madly inlove with coding. I am a
            great problem solver , team player and I have{" "}
            bubbly personality. Sold yet? Check
            out my{" "}
            <a className="bubbly" href="/projects">
              {" "}
              projects page
            </a>{" "}
            to see what I can do  . 👀
           
          </p>
        </span>
        <img className="landing"src={landing2} />
      </div>
 
  );
};

export default Landing;

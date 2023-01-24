import hey from "../IMAGES/hey.gif";

const Landing = () => {
  return (
    <div className="cont1">
      <span className="cont1_sub">
        <h1 className="lets_build"> Hi , I am Bobby !</h1>
        <p className="my_description">
          {" "}
          I am a frontend developer and I'm madly inlove with coding. I am a
          great problem solver , team player and I have bubbly personality. Sold
          yet? Check out my{" "}
          <a className="bubbly" href="/projects">
            {" "}
            projects page
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
      <img className="landing" src={"https://doodleipsum.com/700/flat?i=75a3e003716be5394d344eb8a189f163"} />
    </div>
  );
};

export default Landing;

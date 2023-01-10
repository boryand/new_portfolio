import Typical from "react-typical";






const Landing = () => {


  return (
    <div className="landing_container">
      <div className="cont1">
        <h1 className="lets_build"> Hi , I am Bobby !</h1>
        <p className="my_description">
          {" "}
          I am a{" "}
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              " frontend developer 💻",
              2000,
              "backend learner 🤔",
              2000,
              "mom 👶",
              2000,
              "minimalist 🌿🤍",
              2000,
            ]}
          />
        </p>
      </div>
      <div className="cont2">dddd</div>

    </div>
  );
};

export default Landing;

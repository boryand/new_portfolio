import { Switch, Route } from "react-router-dom";

import "./SASS/style.css";
import Navbar from "./COMPONENTS/navbar";
import Landing from "./COMPONENTS/landing";
import Projects from "./COMPONENTS/projects";
import Contacts from "./COMPONENTS/contacts";
import AboutMe from "./COMPONENTS/about_me";
import Footer from "./COMPONENTS/footer";


function App() {
  return (
    <div className="App">
      <Navbar />
  
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/contacts">
          <Contacts />
        </Route>
        <Route exact path="/about_me">
          <AboutMe />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

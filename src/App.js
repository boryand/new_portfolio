import { Switch, Route } from "react-router-dom";
import "./SASS/style.css";
import Navbar from "./COMPONENTS/navbar";
import Landing from "./COMPONENTS/landing"

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

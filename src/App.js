import { Switch, Route } from "react-router-dom";

import "./SASS/style.css";

import Landing from "./COMPONENTS/landing";

import Footer from "./COMPONENTS/footer";



function App() {
  return (
    <div className="App">
  
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
       
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

import Messaging from "./Components/Messaging";
import Login from "./Components/Login";
import { Switch,Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
 


      <Switch>
          <Route path="/chat">
            <Messaging />
            </Route>
            <Route exact path="/">
            <Login/>
            </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;

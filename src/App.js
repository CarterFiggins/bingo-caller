import "./styles.css";
import Bingo from "./components/Bingo";
import Timer from "./components/Timer";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/bingo">
          <Bingo />
        </Route>
        <Route path="/timer">
          <Timer />
        </Route>
        <Route path="/">
          <Redirect to={"/bingo"} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

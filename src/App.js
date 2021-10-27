import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import LearnTypes from "./Views/LearnTypes";
import Matchup from "./Views/Matchup";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navigation">
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <img
                    style={{ width: "3rem", height: "auto" }}
                    src="https://fontmeme.com/permalink/211027/3014ea3434ef64f49bfeb1ec5cb3f29d.png"
                    alt="Play"
                  />
                </Link>
              </li>
              <li>
                <Link to="/learn">
                  <img
                    style={{ width: "4rem", height: "auto" }}
                    src="https://fontmeme.com/permalink/211027/72da7cd589d425b6ad8e1a4bebd5dec5.png"
                    alt="Learn"
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <header className="App-header">
          <Switch>
            <Route path="/learn">
              <LearnTypes />
            </Route>
            <Route path="/">
              <Matchup />
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React, { useState } from "react";
import PokemonTypes from "../Models/PokemonTypes";
import Button from "@material-ui/core/Button";
import PokemonCard from "../Components/PokemonCard";
import { ThumbUpAlt, ThumbsUpDown, ThumbDownAlt } from "@material-ui/icons";

function Matchup() {
  const [pokeRand1, setPokeRand1] = useState(
    Object.keys(PokemonTypes)[
      Math.floor(Math.random() * Object.keys(PokemonTypes).length)
    ]
  );
  const [pokeRand2, setPokeRand2] = useState(
    Object.keys(PokemonTypes)[
      Math.floor(Math.random() * Object.keys(PokemonTypes).length)
    ]
  );
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(false);

  let p1Strong = PokemonTypes[pokeRand1.toString()]["Strong"];
  let p1Weak = PokemonTypes[pokeRand1.toString()]["Weak"];

  let p2Strong = PokemonTypes[pokeRand2.toString()]["Strong"];
  let p2Weak = PokemonTypes[pokeRand2.toString()]["Weak"];

  const matchupMessage = () => {
    let mes = "";
    if (
      p1Strong.toString().includes(pokeRand2) ||
      p2Weak.toString().includes(pokeRand1)
    ) {
      mes = "good";
    } else if (
      p2Strong.toString().includes(pokeRand1) ||
      p1Weak.toString().includes(pokeRand2)
    ) {
      mes = "bad";
    } else {
      mes = "neutral";
    }

    return mes;
  };

  const resetValues = (timeoutVal) => {
    setTimeout(() => {
      setShowResult(false);
      setPokeRand1(
        Object.keys(PokemonTypes)[
          Math.floor(Math.random() * Object.keys(PokemonTypes).length)
        ]
      );
      setPokeRand2(
        Object.keys(PokemonTypes)[
          Math.floor(Math.random() * Object.keys(PokemonTypes).length)
        ]
      );
    }, timeoutVal);
  };

  const clickMatchup = (choice) => {
    if (choice === matchupMessage()) {
      setResult(true);
      setShowResult(true);
      resetValues(1500);
    } else {
      setResult(false);
      setShowResult(true);
    }
  };

  return (
    <div>
      <div style={{ display: "grid", placeItems: "center" }}>
        {/* <h3>Pokemon Type Trainer</h3> */}
        <img
          src="https://fontmeme.com/permalink/211027/a7186ceed8686d4e9c9844401acd4c41.png"
          alt="logo"
          style={{ width: "10rem", height: "auto" }}
        />
        <img
          src="https://fontmeme.com/permalink/211027/13692a39b341be73c3e1f4ea1bb110ec.png"
          alt="logo bottom"
          style={{ width: "10rem", height: "auto" }}
        />
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            paddingBottom: "1rem",
          }}
        >
          <PokemonCard
            who="Your Type"
            pokeType={pokeRand1}
            strong={p1Strong}
            weak={p1Weak}
            showStats={showResult}
          />
          <div style={{ alignSelf: "center", paddingInline: "1rem" }}>
            <img
              style={{ width: "3rem", height: "auto" }}
              src="https://fontmeme.com/permalink/211027/dd25cf2b11c4644ddd963e725a1fe1fe.png"
              alt="Versus logo"
            />
          </div>
          <PokemonCard
            who="Opponent"
            pokeType={pokeRand2}
            strong={p2Strong}
            weak={p2Weak}
            showStats={showResult}
          />
        </div>
        <div></div>
        <div className="action-buttons">
          <Button
            disabled={showResult}
            variant="contained"
            onClick={() => clickMatchup("good")}
          >
            <ThumbUpAlt />
          </Button>
          <Button
            disabled={showResult}
            variant="contained"
            onClick={() => clickMatchup("neutral")}
          >
            <ThumbsUpDown />
          </Button>
          <Button
            disabled={showResult}
            variant="contained"
            onClick={() => clickMatchup("bad")}
          >
            <ThumbDownAlt />
          </Button>
        </div>
        <div className="result-container">
          {showResult && result && (
            <div>
              <img
                style={{ width: "10rem", height: "auto" }}
                src="https://fontmeme.com/permalink/211027/740ee1947b43941d7ef4d73e8dd1ce97.png"
                alt="correct"
              />
            </div>
          )}
          {showResult && !result && (
            <div>
              <div>
                <img
                  style={{ width: "10rem", height: "auto" }}
                  src="https://fontmeme.com/permalink/211027/68457aed47156e29ecabe0196d8ce5c0.png"
                  alt="incorrect"
                />
              </div>
              <Button variant="contained" onClick={() => resetValues(0)}>
                Continue
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Matchup;

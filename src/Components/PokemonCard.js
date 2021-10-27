import React from "react";
import PokemonTypes from "../Models/PokemonTypes";

function PokemonCard({ who, pokeType, strong, weak, showStats }) {
  let p1Image = PokemonTypes[pokeType.toString()]["ImageUrl"];
  let p1TypeImage = PokemonTypes[pokeType.toString()]["TypeImage"];
  return (
    <div className="pokemon-card">
      <div className="pokemon-card-title">{who}</div>
      <div className="pokemon-card-picture">
        {p1Image && (
          <img
            style={{ width: "100%", height: "auto" }}
            src={p1Image}
            alt={"user type image of " + pokeType.toString()}
          />
        )}
      </div>
      <div>
        {p1TypeImage && (
          <img
            style={{ width: "3rem", height: "auto" }}
            src={p1TypeImage}
            alt={"user type of " + pokeType.toString()}
          />
        )}
      </div>
      {showStats && (
        <div>
          <p>
            <strong>Strong Against:</strong> {strong}{" "}
          </p>
          <p>
            <strong>Weak Against:</strong> {weak}{" "}
          </p>
        </div>
      )}
    </div>
  );
}

export default PokemonCard;

import React from "react";
import "./App.css";
import Game from "./Component/game/Game";
import lion from "./assets/images/lion.jpg";
import manchester from "./assets/images/manchester.png";
import tiger from "./assets/images/tiger.jpg";
import liverpool from "./assets/images/liverpool.png";

function App(props) {
  const thelions = {
    name: "lions",
    logoSrc: lion,
  };

  const thetigers = {
    name: "tigers",
    logoSrc: tiger,
  };

  const liverpools = {
    name: "liverpool de marseille",
    logoSrc: liverpool,
  };

  const Manchester = {
    name: "Manchester united",
    logoSrc: manchester,
  };

  return (
    <div className="App">
      <Game
        venue="Africa Nation Cup"
        homeTeam={thelions}
        visitingTeam={thetigers}
      />
      <Game
        venue="Mondial Nation Cup"
        homeTeam={liverpool}
        visitingTeam={Manchester}
      />
    </div>
  );
}

export default App;

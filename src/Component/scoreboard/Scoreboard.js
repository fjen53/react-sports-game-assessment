import React from "react";

function ScoreBoard(props) {
  return (
    <div className="ScoreBoard">
      <div className="teamStats">
        <h3>VISITORS</h3>
        <h5>{props.visitingTeamStats.score}</h5>
      </div>

      <h5>SCOREBOARD</h5>

      <div className="teamStats">
        <h3>HOME</h3>
        <h5>{props.homeTeamStats.score}</h5>
      </div>
    </div>
  );
}

export default ScoreBoard;

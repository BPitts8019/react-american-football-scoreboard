import React, {useState} from "react";
import "./App.css";

const Buttons = ({team, currentScore, scoreSetter}) => {
   const TOUCHDOWN = 7;
   const FIELD_GOAL = 3;
   const buttonLabel = team[0].toUpperCase() + team.slice(1);
   const scoreClick = (team, points) => {
      // const newScore = (team === "home")? homeScore+points : awayScore+points;

      // if (team === "home") {
      //    setHomeScore(newScore);
      // } else {
      //    setAwayScore(newScore);
      // }
      scoreSetter(currentScore+points);
   };

   return (
      <div className={team + "Buttons"}>
         <button className={team + "Buttons__touchdown"} onClick={() => { scoreSetter(currentScore+TOUCHDOWN) }}>{buttonLabel} Touchdown</button>
         <button className={team + "Buttons__fieldGoal"} onClick={() => { scoreSetter(currentScore+FIELD_GOAL) }}>{buttonLabel} Field Goal</button>
      </div>
   );
};

export default Buttons;
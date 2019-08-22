import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
   const TOUCHDOWN = 7;
   const FIELD_GOAL = 3
   const [homeScore, setHomeScore] = useState(0);
   const [awayScore, setAwayScore] = useState(0);
   const scoreClick = (team, score = TOUCHDOWN) => {
      const newScore = (team === "home")? homeScore+score : awayScore+score;
      if (team === "home") {
         setHomeScore(newScore);
      } else {
         setAwayScore(newScore);
      }
   };

   return (
      <div className="container">
         <section className="scoreboard">
            <div className="topRow">
               <div className="home">
                  <h2 className="home__name">Lions</h2>
                  <div className="home__score">{homeScore}</div>
               </div>
               <div className="timer">00:03</div>
               <div className="away">
                  <h2 className="away__name">Tigers</h2>
                  <div className="away__score">{awayScore}</div>
               </div>
            </div>
            <BottomRow />
         </section>
         <section className="buttons">
            <div className="homeButtons">
               <button className="homeButtons__touchdown" onClick={() => { scoreClick("home", TOUCHDOWN) }}>Home Touchdown</button>
               <button className="homeButtons__fieldGoal" onClick={() => { scoreClick("home", FIELD_GOAL) }}>Home Field Goal</button>
            </div>
            <div className="awayButtons">
               <button className="awayButtons__touchdown" onClick={() => { scoreClick("away", TOUCHDOWN) }}>Away Touchdown</button>
               <button className="awayButtons__fieldGoal" onClick={() => { scoreClick("away", FIELD_GOAL) }}>Away Field Goal</button>
            </div>
         </section>
      </div>
   );
}

export default App;

import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ botArmy, removeBot, deleteBot }) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          Your Bot Army
          {botArmy.map((bot) => (
            <BotCard
              bot={bot}
              handleBot={removeBot}
              handleDeleteBot={deleteBot}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;

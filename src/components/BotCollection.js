import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, addBot, deleteBot }) {
  return (
    <div className="ui four column grid">
      <div className="row">
        Collection of all bots
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} handleBot={addBot} handleDeleteBot={deleteBot} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;

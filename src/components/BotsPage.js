import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //setting state
  let [bots, setBots] = useState([]);
  let [botArmy, setBotArmy] = useState([]);

  //fetch data
  useEffect(
    () =>
      fetch("http://localhost:3000/bots")
        .then((r) => r.json())
        .then((bots) => setBots(bots)),
    []
  );

  //add bot to army
  function addBotToArmy(armyBot) {
    if (!botArmy.find((bot) => bot === armyBot)) {
      let selectBot = bots.find((bot) => bot === armyBot);
      setBotArmy([...botArmy, selectBot]);
    }
  }

  //remove bot from army
  function removeBotArmy(armyBot) {
    let botArmyList = botArmy.filter((bot) => bot !== armyBot);
    setBotArmy(botArmyList);
  }

  //delete bot
  function removeBotForever(armyBot) {
    if (botArmy.find((bot) => bot === armyBot)) {
      const filterBots = bots.filter((bot) => bot !== armyBot);
      const filterBotArmy = botArmy.filter((bot) => bot !== armyBot);

      setBots(filterBots);
      setBotArmy(filterBotArmy);

      fetch(`http://localhost:3000/bots/${armyBot.id}`, {
        method: "DELETE",
      });
    }
  }
  return (
    <div>
      <YourBotArmy
        botArmy={botArmy}
        removeBot={removeBotArmy}
        deleteBot={removeBotForever}
      />
      <BotCollection
        bots={bots}
        addBot={addBotToArmy}
        deleteBot={removeBotForever}
      />
    </div>
  );
}

export default BotsPage;

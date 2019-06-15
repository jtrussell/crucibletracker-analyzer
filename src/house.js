const getTurnsPerHouseForPlayer = (player, events) => {
  const houseEvents = events.filter(e => {
    return (
      Array.isArray(e.message)
      && e.message[0].name === player
      && /as their active house this turn/.test(e.message[3])
    );
  });

  const houseMap = {
    turnsDis: 0,
    turnsShadows: 0,
    turnsBrobnar: 0,
    turnsMars: 0,
    turnsUntamed: 0,
    turnsLogos: 0,
    turnsSanctum: 0,
  };

  houseEvents.forEach(e => {
    const houseKey = 'turns' + e.message[2][0].toUpperCase() + e.message[2].slice(1);
    houseMap[houseKey] += 1;
  });

  return houseMap;
};

module.exports = {
  getTurnsPerHouseForPlayer,
};

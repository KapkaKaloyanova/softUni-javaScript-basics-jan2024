function tennisRanklist(input) {
  let tournaments = Number(input[0]);
  let points = Number(input[1]);
  let curPoints = 0;
  let averagePoints = 0;
  let percentTournamentsWon = 0;
  let counterWinning = 0;

  for (let i = 2; i <= tournaments + 2; i++) {
    let tournamentResult = input[i];
    switch (tournamentResult) {
      case "W":
        curPoints += 2000;
        counterWinning++;
        break;
      case "F":
        curPoints += 1200;
        break;
      case "SF":
        curPoints += 720;
        break;
    }
  }
  points += curPoints;
  averagePoints = curPoints / tournaments;
  percentTournamentsWon = (counterWinning / tournaments) * 100;
  console.log(`Final points: ${points}`);
  console.log(`Average points: ${Math.floor(averagePoints)}`);
  console.log(`${percentTournamentsWon.toFixed(2)}%`);
}
tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);

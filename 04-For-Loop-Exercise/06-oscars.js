function oscars(input) {
  let actorName = input[0];
  let academyPoints = Number(input[1]);
  let judgesCount = Number(input[2]);

  // for (let i = 3; i < input.length; i+=2) {
    for (let i = 3; i <= judgesCount*2+2; i+=2) {
      let judgeName = input[i];
    let nameLength = judgeName.length;
    let judgePoints = Number(input[i + 1]);

    // console.log(judgeName);
    // console.log(nameLength);
    // console.log(judgePoints);
    let pointsWon = (nameLength * judgePoints) / 2;
    // console.log(pointsWon);
    academyPoints += pointsWon;
    // console.log(academyPoints);

    if (academyPoints > 1250.5) {
      console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
      break;
    } 
    
  }
  if (academyPoints <= 1250.5){
    let pointsNeeded = 1250.5 - academyPoints;
        console.log(`Sorry, ${actorName} you need ${pointsNeeded.toFixed(1)} more!`);

  }
}

oscars([
  "Zahari Baharov",
  "205",
  "4",
  "Johnny Depp",
  "45",
  "Will Smith",
  "29",
  "Jet Lee",
  "10",
  "Matthew Mcconaughey",
  "39",
]);
// oscars([
//   "Sandra Bullock",
//   "340",
//   "5",
//   "Robert De Niro",
//   "50",
//   "Julia Roberts",
//   "40.5",
//   "Daniel Day-Lewis",
//   "39.4",
//   "Nicolas Cage",
//   "29.9",
//   "Stoyanka Mutafova",
//   "33",
// ]);

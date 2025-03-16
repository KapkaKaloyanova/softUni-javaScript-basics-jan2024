function bonusScore(input) {
  let num = Number(input[0]);
  let bonusPoints = 0;

  if (num <= 100) {
    bonusPoints = 5;
  } else if (num<=1000) {
    bonusPoints = num * 0.2;
  } else if (num > 1000) {
    bonusPoints = num * 0.1;
  }
  if (num % 2 === 0) {
    bonusPoints += 1;
  } else if (num % 10 === 5) {
    bonusPoints += 2;
  }
  let totalPoints = num + bonusPoints;

  console.log(bonusPoints);
  console.log(totalPoints);
}
bonusScore(["20"]);
bonusScore(["175"]);
bonusScore(["2703"]);
bonusScore(["15875"]);

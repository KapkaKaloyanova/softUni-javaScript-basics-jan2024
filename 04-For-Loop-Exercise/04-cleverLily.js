function cleverLily(input) {
  let age = Number(input[0]);
  let washerPrice = Number(input[1]);
  let pricePerToy = Number(input[2]);
  let moneyGiven = 10;
  let savedMoney = 0;

  for (let curBirthday = 1; curBirthday <= age; curBirthday++) {
    if (curBirthday % 2 !== 0) {
      savedMoney += pricePerToy;
    } else {
      savedMoney += moneyGiven - 1;
      moneyGiven += 10;
    }
  }
  if (washerPrice <= savedMoney) {
    console.log(`Yes! ${Math.abs(washerPrice - savedMoney).toFixed(2)}`);
  } else {
    console.log(`No! ${Math.abs(washerPrice - savedMoney).toFixed(2)}`);
  }
}
// cleverLily(["10", "170.00", "6"]);
cleverLily(["21","1570.98","3"]);

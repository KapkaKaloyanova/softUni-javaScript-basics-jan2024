function basketballEquipment(input) {
  //    • Баскетболни кецове – цената им е 40% по-малка от таксата за една година
  //   • Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
  //   • Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
  //   • Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка

  let annualTax = Number(input[0]);
  let expenses = 0;

  let sneakers = annualTax * 0.6;
  let outfit = sneakers * 0.8;
  let ball = outfit / 4;
  let accesories = ball / 5;

  expenses = sneakers + outfit + ball + accesories + annualTax;

  console.log(expenses);
}
basketballEquipment(["365 "]);
basketballEquipment(["550 "]);

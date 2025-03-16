function fishTank(input) {
  // 1. Дължина в см – цяло число в интервала [10 … 500]
  // 2. Широчина в см – цяло число в интервала [10 … 300]
  // 3. Височина в см – цяло число в интервала [10… 200]
  // 4. Процент  – реално число в интервала
  //Един литър вода се равнява на един кубичен дециметър/ 1л=1 дм3/
  let length = Number(input[0]);
  let width = Number(input[1]);
  let heigth = Number(input[2]);
  let procent = Number(input[3]) / 100;

  let volume = (length * width * heigth) / 1000; // конвертирано към литри
  let totalLiters = volume - volume * procent;

  console.log(totalLiters);
}
fishTank(["85 ", "75 ", "47 ", "17 "]);
fishTank(["105 ", "77 ", "89 ", "18.5 "]);

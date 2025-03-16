function catFood(input) {

    let catsCount = Number(input[0]);
    // 1 кг храна = 12.45 лева foodPerDay/1000*12.45
    // от 100 (вкл.)  до 200 грама, -> група 1: малки котки.
    // от 200 (вкл.)  до 300 грама, -> група 2: големи котки.
    // от 300 (вкл.)  до 400 грама, -> група 3: огромни котки.

    let groupOneCount = 0;
    let groupTwoCount = 0;
    let groupThreeCount = 0;

    let foodPerDay = 0;
    let pricePerDay = 0;


    for (let i = 1; i <= catsCount; i++) {
        let foodPerCat = Number(input[i]);
        if (foodPerCat >= 100 && foodPerCat < 200) {
            groupOneCount++;
            foodPerDay += foodPerCat;

        } else if (foodPerCat < 300) {
            groupTwoCount++;
            foodPerDay += foodPerCat;

        } else if (foodPerCat < 400) {
            groupThreeCount++;
            foodPerDay += foodPerCat;

        }
    }
    pricePerDay = foodPerDay/1000 * 12.45;
    console.log(`Group 1: ${groupOneCount} cats.`);
    console.log(`Group 2: ${groupTwoCount} cats.`);
    console.log(`Group 3: ${groupThreeCount} cats.`);
    console.log(`Price for food per day: ${pricePerDay.toFixed(2)} lv.`);

}

catFood(["6",
    "102",
    "236",
    "123",
    "399",
    "342",
    "222"]);

// • На първи ред - броят на котките - цяло число в интервала [1..100]
// • На всеки следващ ред за всяка котка - Х грама храна -
//реално число в интервала [100.00..400.00];

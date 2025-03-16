function shopping(input) {

    let budget = Number(input[0]);
    let vcardsCount = Number(input[1]);
    let processorsCount = Number(input[2]);
    let ramCounts = Number(input[3]);

    let vcardPrice = vcardsCount * 250;
    // console.log(vcardPrice);
    let processorPrice = vcardPrice * 0.35 * processorsCount;
    // console.log(processorPrice);
    let ramPrice = vcardPrice * 0.1 * ramCounts;
    // console.log(ramPrice);
    let totalPrice = vcardPrice + processorPrice + ramPrice;
    // console.log(totalPrice);
    if (vcardsCount >= processorsCount) {
        totalPrice *= 0.85;
    }
    // console.log(totalPrice);
    if (totalPrice <= budget) {
        console.log(`You have ${(budget-totalPrice).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`);
    }

}
shopping(["900",
    "2",
    "1",
    "3"]);

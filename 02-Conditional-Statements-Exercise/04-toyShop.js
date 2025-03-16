function toyShop(input) {

    let tripPrice = Number(input[0]);
    let puzzels = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let puzzlePrice = 2.6 * puzzels;
    let dollPrice = 3 * dolls;
    let bearsPrice = 4.10 * bears;
    let minionsPrice = 8.20 * minions;
    let truckPrice = 2 * trucks;

    let totalPrice = puzzlePrice + dollPrice + bearsPrice + minionsPrice + truckPrice;
    let toysCount = puzzels + dolls + bears + minions + trucks;

    if (toysCount >= 50) {
        totalPrice *= 0.75;
    }
    let profit = totalPrice - (0.10 * totalPrice);

    if ((profit - tripPrice) >= 0) {
        console.log(`Yes! ${(profit - tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${Math.abs(profit - tripPrice).toFixed(2)} lv needed.`);
    }
}
toyShop(["40.8",
    "20",
    "25",
    "30",
    "50",
    "10"]);

function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let mutes = Number(input[1]);
    let clothingPrice = Number(input[2])*mutes;

    let decorePrice = budget * 0.10;
    if (mutes > 150) {
        clothingPrice *= 0.9;
    }
    let diff = Math.abs((decorePrice + clothingPrice) - budget);

    if ((decorePrice + clothingPrice) > budget) {
        console.log('Not enough money!');
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`)
    } else {
        console.log('Action!');
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }
}
godzillaVsKong(["20000",
    "120",
    "55.5"]);
godzillaVsKong(["20000",
    "120",
    "55.5"]);

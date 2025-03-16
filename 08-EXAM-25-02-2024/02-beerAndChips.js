function beerAndChips(input) {

    let name = input[0];
    let budged = Number(input[1]);
    let beerBottles = Number(input[2]);
    let chipsBags = Number(input[3]);

    let totalBeerPrice = 1.20*beerBottles;
    let totalChipsPrice = Math.ceil(totalBeerPrice* 0.45*chipsBags);

    let totalPrice = totalBeerPrice + totalChipsPrice;

    if(budged >= totalPrice){
        console.log(`${name} bought a snack and has ${(budged-totalPrice).toFixed(2)} leva left.`);
    }else {
        console.log(`${name} needs ${Math.abs(budged-totalPrice).toFixed(2)} more leva!`);
    }

}

beerAndChips(["George",
    "10",
    "2",
    "3"]);

beerAndChips(["Valentin",
    "5",
    "2",
    "4"]);




// • На първия ред - името на футболният фен – текст
// • На втория ред - предвиденият бюджет  – реално число в диапазона [1.0… 100 000.0]
// • На третия ред - брой бутилки бира – цяло число в диапазона [1… 100 000]
// • На четвърти ред - брой пакети чипс – цяло число в диапазона [1… 100 000]
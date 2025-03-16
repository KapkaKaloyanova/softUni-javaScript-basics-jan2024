function christmasGifts(input) {

    let kids = 0;
    let adults = 0;
    let toysMoney = 0;
    let sweaterMoney = 0;

    let index = 0;
    let command = input[index];
    index++;



    while (command !== 'Christmas') {
        let curYears = command;

        if (curYears <= 16) {
            kids++;
            toysMoney+=5;
        }else if(curYears>16){
            adults++;
            sweaterMoney +=15;
        }

        command=input[index];
        index++;

    }

    console.log(`Number of adults: ${adults}`);
    console.log(`Number of kids: ${kids}`);
    console.log(`Money for toys: ${toysMoney}`);
    console.log(`Money for sweaters: ${sweaterMoney}`);

}

christmasGifts(["16",
    "20",
    "46",
    "12",
    "8",
    "20",
    "49",
    "Christmas"]);

christmasGifts(["16",
    "16",
    "16",
    "16",
    "16",
    "Christmas"]);

// • Всички до 16 (вкл.) години се считат за деца и ще получат играчка
// • Всички над 16 години се считат за възрастни и ще получат коледен пуловер
// • Цената на всяка играчка е 5 лв., а цената на един пуловер е 15 лв.

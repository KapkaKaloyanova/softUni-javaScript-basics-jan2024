function cinema(input) {
    let movieType = input[0];
    let rows = Number(input[1]);
    let colums = Number(input[2]);

    let seats = rows * colums;
    let price = 0;
    let totalProfit =0;

    switch (movieType) {
        case "Premiere":
            price += 12;
            break;
        case "Normal":
            price += 7.50;
            break;
        case "Discount":
            price += 5;
            break;
    }
    totalProfit = seats*price;
    console.log(`${totalProfit.toFixed(2)} leva`);

}

cinema(["Premiere", "10", "12"]);
cinema(["Normal",
"21",
"13"]);
cinema(["Discount",
"12",
"30"])




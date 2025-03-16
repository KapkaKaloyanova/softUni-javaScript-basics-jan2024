function suppliesForSchool(input) {
    //    • Пакет химикали - 5.80 лв. 
    // • Пакет маркери - 7.20 лв. 
    // • Препарат - 1.20 лв (за литър)
    let penCount = Number(input[0]);
    let markersCount = Number(input[1]);
    let tableCleaner = Number(input[2]);
    let discountPercent = Number(input[3])/100;

    let sum = (penCount*5.80) + (markersCount*7.20) + (tableCleaner*1.20);
    sum = sum - sum*discountPercent;

    console.log(sum);
}
suppliesForSchool(["2 ", "3 ", "4 ", "25 "])
function repainting(input) {
    // • Предпазен найлон - 1.50 лв. за кв. метър
    // • Боя - 14.50 лв. за литър
    // • Разредител за боя - 5.00 лв. за литър
    // добави още 10% от количеството боя и 2 кв.м. найлон, разбира се и 0.40 лв. за торбички
    // 1 час работа = 30%*разходи за материали
    let nylonQty = Number(input[0]);
    let paintQty = Number(input[1]);
    let thinnerQty = Number(input[2]);
    let workingHours = Number(input[3]);

    let totalMaterialsPrice = ((nylonQty+2)*1.5) + ((paintQty + 10/100*paintQty)*14.50) + (thinnerQty*5.00) + 0.40;
    
    let priceWork = workingHours * (totalMaterialsPrice*30/100);
    let totalSum = totalMaterialsPrice + priceWork;
    console.log(totalSum);

}
repainting(["10","11","4","8"]);
function vacation(input) {
    let tripMoney = Number(input[0]);
    let availableMoney = Number(input[1]);

    let index = 2;
    let consecutiveDaysSpent = 0;
    let totalDays = 0;

    while (availableMoney < tripMoney) {
        let action = input[index];
        index++;
        let spendOrSavedMoney = Number(input[index]);
        index++;

        if (action === 'save') {
            availableMoney += spendOrSavedMoney;
            consecutiveDaysSpent = 0;
        } else if (action === 'spend') {
            if (spendOrSavedMoney > availableMoney) {
                availableMoney = 0;
            } else {
                availableMoney -= spendOrSavedMoney;

            }
            consecutiveDaysSpent++;
        }
        totalDays++;
        if (consecutiveDaysSpent===5){
            console.log("You can't save the money.");
            console.log(totalDays);
            break;

        }
    }
    if (availableMoney>=tripMoney){
        console.log(`You saved the money for ${totalDays} days.`);
    }

}
// vacation(["2000",
//     "1000",
//     "spend",
//     "1200",
//     "save",
//     "2000"]);

vacation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])


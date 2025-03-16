function goldMine(input) {
    let locationCounts = Number(input[0]);
    let curLocation = 1;
    let avgGoldPerLocation = 0;

    for (let i = curLocation; i <= locationCounts; i++) {
        let expectedGoldPerDay = Number(input[i]);
        let daysPerLocation = Number(input[i + 1]);
        
        let goldPerLocation = 0;
        for(let j=1; j<=daysPerLocation; j++){
            let curGold = Number(input[curLocation+j+1]);
            goldPerLocation += curGold;
        }
        curLocation++;
        avgGoldPerLocation = goldPerLocation / daysPerLocation;
        
        if (avgGoldPerLocation >= expectedGoldPerDay) {
            console.log(`Good job! Average gold per day: ${avgGoldPerLocation.toFixed(2)}.`);
        } else if(avgGoldPerLocation<expectedGoldPerDay) {
            console.log(`You need ${(expectedGoldPerDay-avgGoldPerLocation).toFixed(2)} gold.`);
        }
    }
    
}
// let curDay = 1;
// while (curDay <= daysPerLocation) {
//     let curGold = Number(input[i + 2]);
//     i++;
//     goldPerLocation += curGold;
//     curDay++;
// }

goldMine(["2",
    "10",
    "3",
    "10",
    "10",
    "11",
    "20",
    "2",
    "20",
    "10"]);

// goldMine(["1",
//     "5",
//     "3",
//     "10",
//     "1",
//     "3"]);
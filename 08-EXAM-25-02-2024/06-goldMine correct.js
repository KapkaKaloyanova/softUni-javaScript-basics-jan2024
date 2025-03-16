function goldMine(input) {
    let index=0;
    let locationCounts = Number(input[index++]);
    let avgGoldPerLocation = 0;
    let isExpectedGold = false;
    let diff = 0;
    let expectedGoldPerDay = 0;
    let daysPerLocation = 0;
    
    for (let i = 0; i < locationCounts; i++) {
        expectedGoldPerDay = Number(input[index++]);
        daysPerLocation = Number(input[index++]);
        let goldPerLocation = 0;
        for (let j = 0; j < daysPerLocation; j++) {
            let curGold = Number(input[index++]);
            goldPerLocation += curGold;
        }
        
        avgGoldPerLocation = goldPerLocation / daysPerLocation;
        diff = Math.abs(expectedGoldPerDay-avgGoldPerLocation);
        if (avgGoldPerLocation >= expectedGoldPerDay) {
            console.log(`Good job! Average gold per day: ${avgGoldPerLocation.toFixed(2)}.`);
        }
    }
    if (avgGoldPerLocation < expectedGoldPerDay) {
        // isExpectedGold = true;
        console.log(`You need ${diff.toFixed(2)} gold.`);
    }
    // if (isExpectedGold) {
    //     console.log(`You need ${diff.toFixed(2)} gold.`);
    // }

}


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
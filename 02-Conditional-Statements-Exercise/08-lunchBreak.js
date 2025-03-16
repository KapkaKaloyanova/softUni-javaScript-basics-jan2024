function lunchBreak(input) {
    let nameSeries=input[0];
    let timeSeries = Number(input[1]);
    let breakTime = Number(input[2]);

    let timeForLunch = 1/8*breakTime;
    let timeForRest= 1/4*breakTime;
    let remainingTime= breakTime - timeForLunch - timeForRest;


    if(remainingTime>=timeSeries){
        console.log(`You have enough time to watch ${nameSeries} and left with ${Math.ceil(remainingTime-timeSeries)} minutes free time.`);
    }else {
        console.log(`You don't have enough time to watch ${nameSeries}, you need ${Math.ceil(timeSeries-remainingTime)} more minutes.`);
    }
    
}
lunchBreak(["Game of Thrones",
"60",
"96"]);

lunchBreak(["Teen Wolf",
"48",
"60"]);

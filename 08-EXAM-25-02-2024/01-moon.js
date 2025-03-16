function moon(input) {
    
    let avSpeed = Number(input[0]);
    let gasPer100km = Number(input[1]);

    let totalDistance = 384400*2;
    let timeOnMoon= 3;

    let totalTime = 0;
    let gasNeeded = 0;

    totalTime = Math.ceil(totalDistance/avSpeed) + timeOnMoon;
    gasNeeded= totalDistance/100 * gasPer100km;

    console.log(totalTime);
    console.log(gasNeeded);
}

moon(["10000",
"5"]);

moon(["5000", "7"]);

//    • На първия ред - средната скорост на движение - реално число в интервала [1000.00... 30000.00]
// • На втория ред - литри гориво нужни за 100 км - реално число в интервала [1.00…20.00]

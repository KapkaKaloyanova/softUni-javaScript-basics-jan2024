function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let destination = '';
    let vacationType = '';
    let sumSpent = 0;

    switch (season) {
        case 'summer':
            vacationType = 'Camp';

            if (budget <= 100) {
                destination = 'Bulgaria';
                sumSpent = budget * 0.3;
            } else if (budget <= 1000) {
                destination = 'Balkans';
                sumSpent = budget * 0.4;
            }
            break;
        case 'winter':
            vacationType = 'Hotel';

            if (budget <= 100) {
                destination = 'Bulgaria';
                sumSpent = budget * 0.7;
            } else if (budget <= 1000) {
                destination = 'Balkans';
                sumSpent = budget * 0.8;
            }
            break;
    }
    if (budget > 1000) {
        destination = 'Europe';
        sumSpent = budget * 0.9;
        vacationType = 'Hotel';
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${vacationType} - ${sumSpent.toFixed(2)}`);
}
journey(["50", "summer"]);
journey(["75", "winter"]);
journey(["312", "summer"]);
journey(["678.53", "winter"]);
journey(["1500", "summer"]);


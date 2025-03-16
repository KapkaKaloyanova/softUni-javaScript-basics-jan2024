function computerRoom(input) {
    let month = input[0]; //"march", "april", "may", "june", "july", "august"
    let hours = Number(input[1]);
    let people = Number(input[2]);
    let timeOfDay = input[3]; // "day" или "night"

    let taxPersonPerHour = 0;
    let totalPrice = 0;

    switch (month) {
        case 'march':
        case 'april':
        case 'may':
            if (timeOfDay === 'day') {
                taxPersonPerHour = 10.50;
            } else if (timeOfDay === 'night') {
                taxPersonPerHour = 8.4;
            }
            break;

        case 'june':
        case 'july':
        case 'august':
            if (timeOfDay === 'day') {
                taxPersonPerHour = 12.60;
            } else if (timeOfDay === 'night') {
                taxPersonPerHour = 10.2;
            }
            break;
    }

    if (people >= 4) {
        taxPersonPerHour *= 0.9;
    }
    if (hours >= 5) {
        taxPersonPerHour *= 0.5;
    }
    totalPrice = taxPersonPerHour * hours * people;

    console.log(`Price per person for one hour: ${taxPersonPerHour.toFixed(2)}`);
    console.log(`Total cost of the visit: ${totalPrice.toFixed(2)}`);
}

computerRoom(["march",
    "3",
    "3",
    "day"]);

computerRoom(["july",
    "5",
    "5",
    "night"]);




function onTimeForTheExam(input) {
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);

    let examTime = examHour * 60 + examMinute;
    let arrivalTime = arrivalHour * 60 + arrivalMinute;

    if (arrivalTime > examTime) {
        let minutesLate = arrivalTime - examTime;
        if (minutesLate < 60) {
            console.log(`Late`);
            console.log(`${minutesLate} minutes after the start`);
        } else {
            let hours = Math.floor(minutesLate / 60);
            let minutes = minutesLate % 60;
            console.log(`Late`);
            console.log(`${hours}:${minutes < 10 ? '0' : ''}${minutes} hours after the start`);
        }
    } else if (arrivalTime === examTime || examTime - arrivalTime <= 30) {
        if (arrivalTime === examTime) {
            console.log('On time');
        } else {
            console.log('On time');
            console.log(`${examTime - arrivalTime} minutes before the start`); 
        }
    } else {
        let minutesEarly = examTime - arrivalTime;
        if (minutesEarly < 60) {
            console.log(`Early`);
            console.log(`${minutesEarly} minutes before the start`);
        } else {
            let hours = Math.floor(minutesEarly / 60);
            let minutes = minutesEarly % 60;
            console.log(`Early`); 
            console.log(`${hours}:${minutes < 10 ? '0' : ''}${minutes} hours before the start`);
        }
    }
}
onTimeForTheExam(["9",
    "30",
    "9",
    "50"]);
    onTimeForTheExam(["9",
    "00",
    "8",
    "30"]);

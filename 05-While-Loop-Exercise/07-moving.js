function moving(input) {
    //1 box is 1 cubic meter
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);

    let availableSpace = width * length * height; // cubic meters

    let index = 3;
    let command = input[index];
    index++;

    while (command !== 'Done') {
        let boxes = Number(command);
        availableSpace -= boxes;

        if (availableSpace <= 0) {
            break;
        }
        command = input[index];
        index++;
    }
    if (availableSpace<=0){
        console.log(`No more free space! You need ${Math.abs(availableSpace)} Cubic meters more.`);
    } else {
        console.log(`${availableSpace} Cubic meters left.`);
    }
}
moving(["10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"]);
moving(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"]);

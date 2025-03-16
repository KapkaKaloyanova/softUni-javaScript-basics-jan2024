function cake(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    //one piece is 1 sq.cm
    let cakePieces = width * length;
    let index = 2;
    let command = input[index];
    index++;
// let isCakeEaten = false;
    while (command !== 'STOP') {
        let piecesTaken = Number(command);
        cakePieces -= piecesTaken;
        if (cakePieces <= 0) {
            // isCakeEaten=true;
            // console.log(`No more cake left! You need ${Math.abs(cakePieces)} pieces more.`);
            break;
        }
        command = input[index];
        index++;
    }

    // if (command === 'STOP') {
        // if(isCakeEaten){
        if (cakePieces<=0) {
            console.log(`No more cake left! You need ${Math.abs(cakePieces)} pieces more.`);
        } else {
            console.log(`${cakePieces} pieces are left.`);
        }
    // }

}
// cake([
//     "10",
//     "10",
//     "20",
//     "20",
//     "20",
//     "20",
//     "21"
// ]);
cake([
    "10",
    "2",
    "2",
    "4",
    "6",
    "STOP"
])

function numberPyramid(input) {
    // let number = Number(input[0]);
    // let curNum = 1;
    // let isBigger = false;
    // let curRow = '';
    // for (let row = 1; row <= number; row++) {
    //     for (let col = 1; col <= row; col++) {
    //         if (curNum > number) {
    //             isBigger = true;
    //             break;
    //         }
    //         curRow += curNum + ' ';
    //         curNum++;

    //     }
    //     console.log(curRow);
    //     curRow = '';
    //     if (isBigger) {
    //         break;
    //     }
    // }

    //version2
    let maxNum = Number(input[0]);
    let curNum = 1;
    let curRow = 1;
    let curRowNums = 0;
    let result = '';

    while (curNum <= maxNum) {
        if (curRowNums < curRow) {
            result += `${curNum} `;
            curRowNums++;
            
        } else {
            result += `\n${curNum} `;
            curRow++;
            curRowNums = 1;
            
        }
        curNum++;
    }
    console.log(result);


}

numberPyramid(["7"])
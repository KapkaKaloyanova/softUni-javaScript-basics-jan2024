function multiplicationTable(input) {
    let secondFactor = Number(input[0]);
    for (let factor1 = 1; factor1 <= 10; factor1++) {
        console.log(`${factor1} * ${secondFactor} = ${factor1 * secondFactor}`);
    }
}
multiplicationTable(["5"]);
function depositCalculator(input) {
    let depositSum = Number(input[0]);
    let period = Number(input[1]);
    let annualInterestRate = Number(input[2])/100;

    let sum = depositSum + (period*((depositSum*annualInterestRate)/12));

    console.log(sum);
}
depositCalculator(["200 ", "3 ", "5.7 "])
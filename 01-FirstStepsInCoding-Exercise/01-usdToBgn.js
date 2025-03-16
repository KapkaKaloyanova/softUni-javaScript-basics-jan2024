function usdToBgn(input) {
    let usd = Number(input[0]);
    // 1USD = 1.79549 BGN
    let bgn = usd * 1.79549;

    console.log(bgn);
}
usdToBgn(["22"])
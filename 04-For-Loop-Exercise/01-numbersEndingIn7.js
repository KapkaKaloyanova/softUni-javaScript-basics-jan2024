function numbersEndingIn7() {
    for (let curNum=1; curNum<=1000; curNum++){
        if (curNum % 10 === 7){
            console.log(curNum);
        }
    }
}
numbersEndingIn7();
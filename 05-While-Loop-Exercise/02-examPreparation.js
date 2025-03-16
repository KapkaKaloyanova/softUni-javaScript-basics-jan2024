function examPreparation(input) {
  let maxBadGrades = Number(input[0]);

  let index = 1;
  let command = input[index];
  index++;
  let grade = Number(input[index]);
  index++;
  let badGrades = 0;
  let gradeSum = 0;
  let gradeCounts = 0;
  let lastProblem = "";

  while (command !== "Enough") {
    // let problemName = command;
    lastProblem = command;
    if (grade <= 4) {
      badGrades++;
    }
    if (badGrades === maxBadGrades) {
      console.log(`You need a break, ${badGrades} poor grades.`);
      break;
    }
    gradeCounts++;
    gradeSum += grade;
    command = input[index];
    index++;

    grade = Number(input[index]);
    index++;
  }
  if (command === "Enough") {
    let avgGrade = gradeSum / gradeCounts;
    console.log(`Average score: ${avgGrade.toFixed(2)}`);
    console.log(`Number of problems: ${gradeCounts}`);
    console.log(`Last problem: ${lastProblem}`);
  }
}
examPreparation([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough",
]);

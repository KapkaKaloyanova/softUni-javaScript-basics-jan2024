function salary(input) {
  let openTabs = Number(input[0]);
  let salary = Number(input[1]);

    for (let i = 2; i <= openTabs+2; i++) {
  // alternativno reshenie za da se izpolzwa openTabs
//   for (let i = 2; i <= input.length; i++) {
    let siteName = input[i];
    if (siteName === "Facebook") {
      salary -= 150;
    } else if (siteName === "Instagram") {
      salary -= 100;
    } else if (siteName === "Reddit") {
      salary -= 50;
    }
    if (salary <= 0) {
      console.log(`You have lost your salary.`);
      return;
    }
  }
  console.log(`${salary}`);
}
// salary([ "10",  "750",  "Facebook",  "Dev.bg",  "Instagram",  "Facebook",  "Reddit",  "Facebook",  "Facebook",]);
salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);

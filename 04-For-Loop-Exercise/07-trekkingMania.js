function trekkingMania(input) {
  let groupsCount = Number(input[0]);
  let persentMussala = 0;
  let persentMonblan = 0;
  let persentKilimanjaro = 0;
  let persentK2 = 0;
  let persentEverest = 0;
  let counter = 0;

  for (let i = 1; i <= groupsCount; i++) {
    let curGroupCount = Number(input[i]);
    if (curGroupCount <= 5) {
      persentMussala += curGroupCount;
      counter += curGroupCount;
    } else if (curGroupCount <= 12) {
      persentMonblan += curGroupCount;
      counter += curGroupCount;
    } else if (curGroupCount <= 25) {
      persentKilimanjaro += curGroupCount;
      counter += curGroupCount;
    } else if (curGroupCount <= 40) {
      persentK2 += curGroupCount;
      counter += curGroupCount;
    } else {
      persentEverest += curGroupCount;
      counter += curGroupCount;
    }
  }
  console.log(`${(persentMussala / counter * 100).toFixed(2)}%`);
  console.log(`${((persentMonblan / counter) * 100).toFixed(2)}%`);
  console.log(`${((persentKilimanjaro / counter) * 100).toFixed(2)}%`);
  console.log(`${((persentK2 / counter) * 100).toFixed(2)}%`);
  console.log(`${((persentEverest / counter) * 100).toFixed(2)}%`);
}
trekkingMania([
  "10",
  "10",
  "5",
  "1",
  "100",
  "12",
  "26",
  "17",
  "37",
  "40",
  "78",
]);

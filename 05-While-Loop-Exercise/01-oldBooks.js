function oldBooks(input) {
  let bookSearched = input[0];

  let index = 1;
  let command = input[index];
  index++;

  let booksChecked = 0;
  while (command !== "No More Books") {
    if (command === bookSearched){
        console.log(`You checked ${booksChecked} books and found it.`);
        break;
    }
    booksChecked++;

    command = input[index];
    index++;
  }
  if (command === 'No More Books' ){
    console.log('The book you search is not here!');
    console.log(`You checked ${booksChecked} books.`);
  }


}
oldBooks(["Troy",
"Stronger",
"Life Style",
"Troy"]);

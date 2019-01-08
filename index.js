function printBadges(arrayE) {
  for (let i = 0; i < arrayE.length; i++) {
    console.log(`Welcome ${arrayE[i]}! You are employee #${i+1}.`);
  }
  return arrayE;
}

// function tailsNeverFails() {
//   let counter = 0
//   Math.random() <= 0.5;
// }
//   while (tailsNeverFails()) {
//     counter++;
//     // return `You got ${counter} tails in a row!`
// return counter
// }
//
// }


// function tailsNeverFails() {
//   let counter = 0
//     while (Math.random() <= 0.5) {
//     counter++;
//     // return `You got ${counter} tails in a row!`
// return counter
// //
// //
// }



function tailsNeverFails() {

  function flip() {
  return Math.random() >= 0.5;
}

let counter = 0;
while (flip()) {

  counter ++;
}
return `You got ${counter} tails in a row!`
}

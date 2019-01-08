function printBadges(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Welcome ${arr[i]}! You are employee #${i + 1}.`);
  }
    return arr;
}

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

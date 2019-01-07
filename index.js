// Code your solutions in this file
function printBadges(employeeNames) {
  for (let i = 0; i < employeeNames.length; i++) {
    console.log(`Welcome ${employeeNames[i]}! You are employee #${i+1}.`)
  }
  return employeeNames
}

function tailsNeverFails() {
    function flip() {
      return Math.random() >= 0.5
    }
    let i = 0
    while (flip()) {
      i++
    }
    return `You got ${i} tails in a row!`
}

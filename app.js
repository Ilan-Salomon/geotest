const {checkInventory} = require('./library.js');

const order = [['sunglasses', 10], ['bags', 2]];

// Write your code below:
const handleSuccess = (resolved) => {
  console.log(resolved);
}

const handleFailure = (resolved) => {
  console.log(resolved);
}

checkInventory(order).then(handleSuccess, handleFailure)


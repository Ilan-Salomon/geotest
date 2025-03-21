const {checkInventory, processPayment, shipOrder} = require('./library2.js');

const order = {
  items: [['sunglasses', 817], ['bags', 2]],
  giftcardBalance: 11139.82
};

checkInventory(order)
.then((resolvedValueArray) => {
  // Write the correct return statement here:
  return processPayment(resolvedValueArray)
})
.then((resolvedValueArray) => {
  // Write the correct return statement here:
  return shipOrder(resolvedValueArray)
})
.then((successMessage) => {
  console.log(successMessage);
})
.catch((errorMessage) => {
  console.log(errorMessage);
});

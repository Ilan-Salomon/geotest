/*
console.log("I'm learning about");

for (let idx=0; idx < 999999999; idx++) {}

// The second console.log() statement is
// delayed by the for loop's execution
console.log("the Event Loop");

console.log("I’m learning about");
setTimeout(() => { console.log("Event Loop");}, 2000);
console.log("the");

console.log("This is the first line of code in app.js.");

function usingsetTimeout() {
    console.log("I'm going to be queued in the Event Loop.");
}
setTimeout(usingsetTimeout, 5000);

console.log("This is the last line of code in app.js.");


const shopForBeans = () => {
    return new Promise((resolve, reject) => {
      const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
      setTimeout(() => {
        let randomIndex = Math.floor(Math.random() * beanTypes.length);
        let beanType = beanTypes[randomIndex];
        console.log(`2. I bought ${beanType} beans because they were on sale.`);
        resolve(beanType);
      }, 1000);
    });
  }
   
  async function getBeans() {
    console.log(`1. Heading to the store to buy beans...`);
    let value = await shopForBeans();
    console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
  }
   
  getBeans();
  console.log("Describe what happens with this `console.log()` statement as well.");


 

  let prom = new Promise((resolve, reject) => {
    let num = Math.random();
    if (num < .5 ){
      resolve('Yay!');
    } else {
      reject('Ohhh noooo!');
    }
  });
  
  const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
  };
  
  const handleFailure = (rejectionReason) => {
    console.log(rejectionReason);
  };
  
  prom.then(handleSuccess, handleFailure);
  
 

  const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
  };
  

  const order = [['sunglasses', 1], ['bags', 2]];

  const checkInventory = (order) => {
   
        let inStock = order.every(item => inventory[item[0]] >= item[1]);
    return inStock

  };

  console.log(checkInventory(order))
  console.log(inventory[sunglasses[0]])

    */
//import default from "./exportModule.js";


import testFunc from './exportModule.js'
const { testExportFunc, testExportFunc2 } = testFunc;

testExportFunc();
testExportFunc2();
const store = {
    sunglasses: {
      inventory: 817, 
      cost: 9.99
    },
    pants: {
      inventory: 236, 
      cost: 7.99
    },
    bags: {
      inventory: 17, 
      cost: 12.99
    }
  };
  
  const checkInventory = (order) => {
    return new Promise ((resolve, reject) => {

     const itemsArr = order.items;  
     let inStock = itemsArr.every(item => store[item[0]].inventory >= item[1]);
     
     if (inStock){
       let total = 0;   
       itemsArr.forEach(item => {
         total += item[1] * store[item[0]].cost
       });
       console.log(`All of the items are in stock. The total cost of the order is $${total.toFixed(2)}.`);
       resolve([order, total]);
     } else {
       reject(`The order could not be completed because some items are sold out.`);
     }     

   });
  };
  
  const processPayment = (responseArray) => {
    const order = responseArray[0];
    const total = responseArray[1];
    return new Promise ((resolve, reject) => {

     let hasEnoughMoney = order.giftcardBalance >= total;

     if (hasEnoughMoney) {
       console.log(`Payment processed with giftcard. Your balance after payment is: $${(order.giftcardBalance - total).toFixed(2)} Generating shipping label.`);

       function processOrder(store, order) {
        // Create a new object to avoid modifying the original store
        let updatedStore = { ...store };
      
        // Loop through the ordered items
        order.items.forEach(([itemName, quantity]) => {
          if (updatedStore[itemName]) {
            // Subtract quantity but ensure inventory doesn't go below zero
            updatedStore[itemName] = {
              ...updatedStore[itemName], // Keep the cost
              inventory: Math.max(updatedStore[itemName].inventory - quantity, 0)
            };
          }
        });
      
        return updatedStore;
      }
      const updatedStore = processOrder(store, order);

      console.log("this is the updated stock for the store: " + JSON.stringify(updatedStore, null, 2) + "IMPORTANT!!! just for internal use...")

       resolve([order, 101010]);
     } else {
       reject("Cannot process order: giftcard balance was insufficient. You need: " + (total - order.giftcardBalance) + " more in your gift card balance to complete the purchase");
     }
   });
  };
  
  
  const shipOrder = (responseArray) => {
    //const order = responseArray[0];
    const trackingNum = responseArray[1];
    return new Promise ((resolve, reject) => {

       resolve(`The order has been shipped. The tracking number is: ${trackingNum}.`);

   });
  };
  
  
  module.exports = {checkInventory, processPayment, shipOrder};
const inventory = {
    sunglasses: 1,
    pants: 1088,
    bags: 1344
  };
  
  const checkInventory = (order) => {
    return new Promise((resolve, reject) => {
    
        let inStock = order.every(item => inventory[item[0]] >= item[1]);
        if (inStock) {
          resolve(`Thank you. Your order was successful.`);
        } else {
          reject(`We're sorry. Your order could not be completed because some items are sold out.`);
        }

    })
  };
  
  module.exports = { checkInventory };
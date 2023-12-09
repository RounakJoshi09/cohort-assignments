/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const totalSpent = {};
  transactions.forEach(element => {
    if(!totalSpent[element.category])
    {
        totalSpent[element.category] = element.price;
    }
    else
    {
      totalSpent[element.category]+= element.price;
    }
    
  });
  const res = [];
  for (const category in totalSpent) {
    if (Object.hasOwnProperty.call(totalSpent, category)) {
      const totalPrice = totalSpent[category];
      res.push({category,totalSpent:totalPrice});
    }
  }
  return res;
}

module.exports = calculateTotalSpentByCategory;

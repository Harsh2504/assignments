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
  const categories = [];
  for (let x in transactions) {
    categories.push(transactions[x].category);
  }
  const uniqueCategories = new Set(categories);
  const totalExpense = [];
  
  for (let category of uniqueCategories) {
    let totalSpent = 0;
    for (let y in transactions) {
      if (transactions[y].category === category) {
        totalSpent += transactions[y].price;
      }
    }
    totalExpense.push({ category: category, totalSpent: totalSpent });
  }

  return totalExpense;
}

module.exports = calculateTotalSpentByCategory;

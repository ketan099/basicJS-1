// create object with key value pair 
// than loop through to find expenditure by category 
// 

let transactions = [
    {
        itemName: 'paneer-chilli',
        category:'food',
        price: 300,
        //time: time.now()

        },
    {
        itemName: 'chocolet-coffee',
        category: 'food',
        price : 140,
        },
    {
        itemName: 'rice',
        category: 'grocery',
        price : 90
    },
    {
        itemName : 'tea-leaves',
        category: 'grocery',
        price:120
    }
];

let totalExpense = 0;
let expByCategory = {};
/*
for(let i = 0; i< transactions.length; i++){
   // console.log(transactions[i].category);
   for(let j = 0; j < categories.length; j++){
   // if(transactions[i].category === 'food'){
       //totalExpense += transactions[i].price


    }
    expByCategory[transactions[i].category] = totalExpense;
    
}*/

// first for loop get categories
// second for loop gets price per category
let categories = [];
for(let i = 0; i < transactions.length; i++){
    
    categories.push(transactions[i]['category'])
}
for(let i = 0; i< categories.length; i++){
   // totalExpense += transactions[i].price;
   for(let j = 0; j < transactions.length; j++){
    expByCategory[categories[j]] = totalExpense + transactions[j].price;
   }
}
console.log(categories);
console.log(expByCategory);


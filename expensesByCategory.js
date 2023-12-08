

const transactions = [
    {
        id: 1,
        timestamp: 1656076800000,
        price: 10,
        category: 'Food',
        itemName: 'Pizza',
    },
    {
        id: 2,
        timestamp: 1656259600000,
        price: 20,
        category: 'Food',
        itemName: 'Burger',
    },
    {
        id: 3,
        timestamp: 1656019200000,
        price: 15,
        category: 'Clothing',
        itemName: 'T-Shirt',
    },
    {
        id: 4,
        timestamp: 1656364800000,
        price: 30,
        category: 'Electronics',
        itemName: 'Headphones',
    },
    {
        id: 5,
        timestamp: 1656105600000,
        price: 25,
        category: 'Clothing',
        itemName: 'Jeans',
    },
];

function totalExpByCategory(transactions){

    let categories = [];
    let expCategary = {}
    
    //category loop 
    for(i = 0 ; i < transactions.length; i++ ){
        let currentCategory = transactions[i].category;
        if(!categories.includes(currentCategory)){
            categories.push(currentCategory);
        }
    } 
    for(let i = 0; i < categories.length; i++){
        let total = 0;
        for(j = 0; j < transactions.length; j++){
            if(transactions[j].category === categories[i]){
                total +=transactions[j].price;
                expCategary[categories[i]] = total
            }
        } total = 0;


    }
    return expCategary;
}


    
result = totalExpByCategory(transactions);
console.log(result);



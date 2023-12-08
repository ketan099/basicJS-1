
let numbers = [3,4,5,1,2,9,12];

let numberCheck  = 0;
function findLaregstNumber(numbers){
    for(let i = 0; i< numbers.length; i++){
        if(numbers[i] > numberCheck){
            numberCheck = numbers[i]
        }
    }
    return numberCheck;
    

}

const largestNumber = findLaregstNumber(numbers)
console.log(`largest number in Array : ${largestNumber}`);



let vowels = ['a', 'e', 'i', 'o', 'u'];

totalVowels = 0;


function countVowels(stringIs){

    for(let i = 0 ; i< vowels.length; i++){
        for(j = 0; j < stringIs.length; j++){
            if(vowels[i] === stringIs[j]){
                totalVowels += 1;
            }
        }
    }
   return totalVowels; 
}
let stringIs = 'Exquisite azure ocean waves gently lap against the sandy shore, creating a mesmerizing and harmonious melody.'

let countedVowels = countVowels(stringIs.toLocaleLowerCase());
console.log(countedVowels);
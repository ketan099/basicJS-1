

// length of the words should match
// each letter of the first word should be thier
// empty space should be allowed
//convert to lower case or uppercase entire word and then match

// check if the char present in that
    // outer for loop of first word
        // inner loop of second word

//let word1 = 'go back';
//let word2 = 'back go';

let word1 = 'schoolmaster';
let word2 = 'the classroom';

//let word1 = 'listen';
//let word2 = 'silent';

let charArray = [];
let charGathering = [];
/*
for (let i = 0 ; i < word1.length; i++){
    for(let j = 0; j < word2.length; j++)
    if(word1[i] === word2[j]){
        charArray.push(true);
        charGathering.push(word2[j]);
    }
   
}*/


function isAnagram(word1, word2){
        let w1 = word1.toLowerCase();
        let w2 = word2.toLowerCase();

        let s1 = '';
        let s2 = '';

        for(let i =0 ; i < w1.length; i++){
            if(w1[i] !== ' '){
                s1 = s1 + w1[i]
            }else{ 
                continue;
            }

        }
        
        for(let i =0 ; i < w2.length; i++){
            if(w2[i] !== ' '){
                s2 = s2 + w2[i]
            }else{ 
                continue;
            }

        }

        for (let i = 0 ; i < s1.length; i++){
            for(let j = 0; j < s2.length; j++)
                if(s1[i] === s2[j]){
                    charArray.push(true);
                    charGathering.push(s2[j]);
            }
           

        }
        let anagram = false;
        if(s1.length === s2.length){
            anagram = true;
        }
    
       return [s1, s2, anagram]
        
    


}

ana = isAnagram(word1, word2);
console.log(ana);

console.log(charArray);
console.log(charGathering);
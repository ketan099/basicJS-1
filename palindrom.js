
function checkPalindrome(stringGiven){

    let string1 = stringGiven.toLowerCase();
    

    let isPalindrom = true;
    let reverseString = '' ;
    for(i = string1.length -1; i >= 0 ; i--){
        
        reverseString += (string1[i])
    }
    if(string1 === reverseString){
       return isPalindrom; 
    }else{
        return !isPalindrom;
    }

}
let stringGiven = '@@@';
res = checkPalindrome(stringGiven);
console.log(`is string ${stringGiven} palindrom? ${res}`);


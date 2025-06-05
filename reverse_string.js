export function reverseString(val){
    let reversedString = "";

    for(let i = 0; i <= val.length; i++){
        let currentCharacter = val.charAt(val.length - i);
        reversedString += currentCharacter;
    }

    return reversedString;
}
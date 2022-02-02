// Checking Palindrome with built-in functions

function checkPalin() {
    const string= prompt("Enter a string");

    const arrayData = string.split('')   // 'h', 'e' , 'l','l', 'o'

    const reverseData = arrayData.reverse(); // o l l e h

    const joinString = reverseData.join(''); // olleh

    if(string == joinString) {
        alert(`${string} is a palindrome word`);
    }
    else {
        alert(`${string} is not a palindrome word`);
    } 
}
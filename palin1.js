function checkPalin() {
    const string = prompt("Enter any string");

    const len = string.length;

    for(let i = 0; i < len/2; i++) {
        if(string[i] !== string[len - 1 - i]) {  //to check if first and the last string are same
            alert(`${string} is not a palindrome word`);
            break;
        }
        else {
            alert(`${string} is a palindrome word`);
            break;
        }
    }
}
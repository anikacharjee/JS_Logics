function checkPalin() {
    const num = prompt("Enter any value:- ");
    const len = num.length;

    for(let i = 0; i< len/2; i++) {
        if(num[i] !== num[len - 1 - i]) {
            alert(`${num} is not a palindrome number`);
            break;
        }
        else {
            alert(`${num} is a palindrome number`);

            var sum = 0;
            let temp  = num;
            while (temp > 0 ) {
                let rem = temp % 10;
                sum += rem * rem;
                temp = parseInt(temp/10);
            }
            alert(`The addition of palindrome number is:- ${sum}`);
            break;
        }
    }
}
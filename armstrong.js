//Checking Armstrong number

let total = 0;
const num = prompt("Enter a three-digit positive number");

let temp = num;
while(temp > 0) {
    let rem = temp % 10;   //finding the last (one's) digit

    total += Math.pow(rem, 3); //tot += rem * rem * rem;   total = total + Math.pow()

    temp = parseInt(temp / 10);  // remove the last digit from the num   converting float to int
}

if(total == num) {
    alert(`${num} is an Armstrong number`);
}
else {
    alert(`${num} is not an Armstrong number`);
}

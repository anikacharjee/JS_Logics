//Sum the multiples of 5 and 7
var sum = 0;
var n = parseInt(prompt("Enter a number(suppose 100)"));
for(var x = 0; x< n; x++) {
    if(x % 3 === 0 || x % 5 === 0) {
        sum += x; // sum = sum + x
    }
}
alert(sum);
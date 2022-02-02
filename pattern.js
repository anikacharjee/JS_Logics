//Printing the pattern in JS
var i, j;
var rows = parseInt(prompt("Enter the nos of rows that u want to see"));
for(i = 1; i<= rows; i++) {
    for(j = 1; j<=i; j++) {
        document.write("* ");
    }
    document.write("<br/>");
}
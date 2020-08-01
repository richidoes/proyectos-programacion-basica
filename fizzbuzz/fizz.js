'use strict'
/* activity: validate if a number its divisible between 3 or 5
or both and print fizz, Buzz or fizzbuzz respectively,
and if none of the numbers is, just print it */



/* Iteration until reach number 100 , validating which number
is divisible */
for (var i = 1; i <= 100; i++) {

	if (esDivisible(i,3)) {

		document.write("Fizz");
	}
	if (esDivisible(i,5)) {

		document.write("Buzz");

	}
	//If is not divisible , print the number
	if(!esDivisible(i,3) && !esDivisible(i,5)){

		document.write(i);

	}
	document.write("<br>");
}

/* Function that determines if the number is divisible by another number.
It is determined by knowing whether the remainder of the division results in 0.
Then return true or false */

function esDivisible(num, divisor){
	if (num % divisor == 0) {
		return true;
	}
	else{
		return false;
	}
}
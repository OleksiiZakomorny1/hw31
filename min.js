//min
//1
let userAge = prompt('How old are you?')
if (userAge.match(/^-?\d+$/) && userAge >= 0) {
	if (userAge <= 11) {
		alert('You are a child!')
	} else if (userAge <= 17) {
		alert('You are a teenager!')
	} else if (userAge <= 59) {
		alert('You are an adult!')
	} else if (userAge > 60) {
		alert('You are a pensioner!')
	}
} else {
	alert('It is not a valid age!')
}

2

let userNumber = prompt('Enter number from 1 to 9')
if (userNumber == 0) {
	alert('Your symbol is ")"!')
} else if (userNumber == 1) {
	alert('Your symbol is "!"!')
} else if (userNumber == 2) {
	alert('Your symbol is "@"!')
} else if (userNumber == 3) {
	alert('Your symbol is "#"!')
} else if (userNumber == 4) {
	alert('Your symbol is "$"!')
} else if (userNumber == 5) {
	alert('Your symbol is "%"!')
} else if (userNumber == 6) {
	alert('Your symbol is "^"!')
} else if (userNumber == 7) {
	alert('Your symbol is "&"!')
} else if (userNumber == 8) {
	alert('Your symbol is "*"!')
} else if (userNumber == 9) {
	alert('Your symbol is "("!')
} else {
	alert('It is not a number from 0 to 9')
}

//3
let a = Number(prompt('Enter first number'))
let b = Number(prompt('Enter last number'))
let sum = 0
while (a <= b) {
	sum += a
	a++
}
alert(`${sum} is result!`)

//4
let c = prompt('Enter first number')
let d = prompt('Enter second number')
function gcd(c, d) {
	if (d === 0) {
		return c;
	}
	return gcd(d, c % d)
}
alert(`Greatest common divisor is ${gcd(c, d)}`)

//5
let num = +prompt('Enter number:')
let divisor = 1
let allDivisors = []
if (num <= 0) {
	alert('You cannot enter negative number')
}
else {
	while (divisor <= userNumber) {
		num % divisor
		if (num % divisor == 0) {
			allDivisors.push(divisor)
		}
		divisor++
	}
	alert(`Divisors of ${num} are: ${allDivisors}`)
}
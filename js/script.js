/* *****************************************************
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
***************************************************** */

// // Chiedere all’utente la parola
// const userWord = prompt('dammi la parola da testare se è palindroma o no');

// // Chiamare la funzione per determinare se la parola è palindroma: isPalindrom(word) --> true, false
// if (isPalindrom(userWord)) {
// 	console.log('palindroma');
// } else {
// 	alert('NON palindroma');
// }

// function isPalindrom(word) {
// 	let reversedWord = '';

// 	/* con incremento del contatore */
// 	// for (let i = 0; i < word.length; i++) {
// 	// 	reversedWord = word[i] + reversedWord;
// 	// 	console.log(reversedWord);
// 	// }

// 	/* con decremento del contatore */
// 	for (let i = word.length - 1; i >= 0; i--) {
// 		reversedWord += word[i];
// 		console.log(reversedWord);
// 	}

// 	if (word == reversedWord) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }



/* *****************************************************
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
***************************************************** */

/* versione senza interfaccia */
// // chiedere all'utente pari o dispari?
// const userNumberType = prompt('pari o dispari?').toLowerCase();
// // chiedere all'utente un numero tra 1 e 5
// const userNumber = parseInt(prompt('dacci un numero tra 1 e 5'));
// // generare un numero random trea 1 e 5  getRandomBetween(min, max) --> numero random
// const randomNumber = getRandomBetween(1, 5);
// // sommiamo input utente con numero random
// const sum = userNumber + randomNumber;
// console.log(sum);
// // determiniamo se somma è come specificato dall'utente e diciamo chi ha vinto     isEven(number) --> true, false
// let result;
// if (isEven(sum)) {
// 	result = 'pari';
// } else {
// 	result = 'dispari';
// }

// if (userNumberType == result) {
// 	console.log('Hai vinto');
// } else {
// 	console.log('Hai perso');
// }


/* versione con interfaccia */
const elesRadio = document.querySelectorAll('input[name="number-type"]'); // non ritorna un vero array di elementi ma un qualcosa di simile
const eleNumber = document.getElementById('number')
const btnPlay = document.getElementById('play')
const eleSum = document.getElementById('sum')
const eleOutput = document.getElementById('output')

btnPlay.addEventListener('click', play); // play senza parentesi perchè non vogliamo eseguirlo in questo momento ma solo al click

function play() {
	let eleNumberType;
	for (let i = 0; i < elesRadio.length; i++) {
		if (elesRadio[i].checked) {
			eleNumberType = elesRadio[i];
		}
	}
	console.log('radio button', eleNumberType);
	const userNumberType = eleNumberType.value;
	console.log('userNumberType', userNumberType);
	const userNumber = parseInt(eleNumber.value);
	const randomNumber = getRandomBetween(1, 5);
	const sum = userNumber + randomNumber;
	eleSum.innerHTML = sum;
	console.log('somma', sum);

	let result;
	if (isEven(sum)) {
		result = 'pari';
	} else {
		result = 'dispari';
	}

	if (userNumberType == result) {
		eleOutput.innerHTML = 'Hai vinto';
	} else {
		eleOutput.innerHTML = 'Hai perso';
	}
}


/* funzioni */
function getRandomBetween(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function isEven(number) {
	if (number % 2 == 0) {
		return true;
	} else {
		return false;
	}
}
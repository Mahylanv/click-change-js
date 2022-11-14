
let singe1 =document.querySelector('p');
console.log(singe1);


document.querySelector('div').addEventListener('click', function() {
	console.log(singe1);

	if (singe1.innerHTML == '🙈') {
		singe1.innerHTML = '🙉';
	}
	else if (singe1.innerHTML == '🙉') {
 		singe1.innerHTML = '🙊';
 	}
 	else {
 		singe1.innerHTML = '🙈'
 	}
 })
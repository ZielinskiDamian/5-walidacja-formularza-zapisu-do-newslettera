// const setBackground = () => {
// 	let p1 = document.querySelector('.first');
// 	let p2 = document.querySelector('.second');
// 	p1.style.backgroundColor = 'red';
// 	p2.style.backgroundColor = 'green';
// };

// let btn = document.getElementById('set-bacground');
// console.log(btn);

// btn.addEventListener('click', setBackground);

// const submitForm = (event) => {
// 	event.preventDefault();
// 	// let firstName = document.querySelector('[name="fname"]');
// 	let firstName = document.getElementById('fname');
// 	let lastName = document.getElementById('lname');

// 	console.log(`Imię ${firstName.value} Nazwisko ${lastName.value}`);
// };

// let form = document.getElementById('form');

// form.addEventListener('submit', submitForm);

// console.log(form);
// xxxxxxxxxxxxxxxxxxx

let newsletterform = document.getElementById('newsletter-form');
let allAgreeChx = document.getElementById('all-agree');

const validate = (event) => {
	let txtName = document.getElementById('name');
	let textEmail = document.getElementById('email');
	let agree1 = document.getElementById('agree-1');
	let errors = document.getElementById('errors');

	errors.innerText = '';

	if (txtName.value.trim() === '') {
		let liError = document.createElement('li');
		liError.innerText = "wpisz Imię i Nazwisko'";
		errors.appendChild(liError);
		console.log(liError);
	}
	if (textEmail.value.trim() === '') {
		let liError = document.createElement('li');
		liError.innerText = 'wpisz mail';
		errors.appendChild(liError);
		console.log(liError);
	}
	if (!textEmail.value.includes('@')) {
		let liError = document.createElement('li');
		liError.innerText = 'adres musi zawierać @';
		errors.appendChild(liError);
		// console.log(liError);
	}
	if (!agree1.checked) {
		let liError = document.createElement('li');
		liError.innerText = 'zaznacz zgodę';
		errors.appendChild(liError);
		console.log(liError);
	}

	if (errors.children.length > 0) {
		event.preventDefault();
	}
};

const allAgree = (event) => {
	let agree1 = document.getElementById('agree-1');
	let agree2 = document.getElementById('agree-2');
	agree1.checked = event.target.checked;
	agree2.checked = event.target.checked;
	agree1.disabled = event.target.checked;
	agree2.disabled = event.target.checked;
	// console.log(event.target.checked);
};

newsletterform.addEventListener('submit', validate);
allAgreeChx.addEventListener('change', allAgree);

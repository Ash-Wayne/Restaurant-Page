import './style.css';

function addContactTab() {
	const body = document.querySelector('body');
	const contactDiv = document.createElement('div');
	const addressPhEmail = document.createElement('p');

	contactDiv.classList.add('tabs');

	addressPhEmail.textContent = `\n\n\n\n\n\n32 Plum Drive\nPasadena, CA 83292\n\nPh: 888-888-8888\nEmail: irishitalian@realrestaurant.com`;
	contactDiv.setAttribute('style', 'display: flex;', 'justify-content: center;');
	contactDiv.appendChild(addressPhEmail);

	body.appendChild(contactDiv);
}

export { addContactTab };

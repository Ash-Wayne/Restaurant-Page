import img from './restaurant.jpg';
import './style.css';

function initialPageLoad() {
	const body = document.querySelector('body');
	const homeDiv = document.createElement('div');
	const h1 = document.createElement('h1');
	const image = document.createElement('img');
	const description = document.createElement('p');

	homeDiv.classList.add('tabs');

	h1.textContent = `Welcome to Idle's Restaurant`;

	image.src = img;
	image.setAttribute('alt', 'Restaurant');
	image.setAttribute('width', '700');
	image.setAttribute('height', 'auto');

	description.textContent = 'The best Irish Italian restaurant in the area.';

	homeDiv.appendChild(h1);
	homeDiv.appendChild(image);
	homeDiv.appendChild(description);

	body.appendChild(homeDiv);
}

export { initialPageLoad };

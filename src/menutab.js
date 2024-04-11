import './style.css';

function addMenuTab() {
	const body = document.querySelector('body');
	const menuDiv = document.createElement('div');
	const appetizers = document.createElement('h2');
	const maincourses = document.createElement('h2');
	const deserts = document.createElement('h2');
	const beverages = document.createElement('h2');
	const irish = document.createElement('h3');
	const beef = document.createElement('h3');
	const tiramisu = document.createElement('h3');
	const coffeemaritini = document.createElement('h3');
	const irishDescription = document.createElement('p');
	const beefDescription = document.createElement('p');
	const tiramisuDescription = document.createElement('p');
	const coffeeMartiniDescription = document.createElement('p');

	menuDiv.classList.add('tabs');

	appetizers.textContent = 'Appetizers';
	irish.textContent = 'Irish Soda Bread Bruschetta';
	irishDescription.textContent =
		'Crisp slices of traditional Irish soda bread topped with ripe tomatoes, basil, olive oil, and a hint of garlic.';

	maincourses.textContent = 'Main Courses';
	beef.textContent = 'Guinness and Beef Ravioli';
	beefDescription.textContent =
		'Homemade ravioli filled with slow-cooked beef marinated in Guinness, served with a sage butter sauce.';

	deserts.textContent = 'Desserts';
	tiramisu.textContent = 'Tiramisu with Irish Cream';
	tiramisuDescription.textContent =
		'Classic Italian tiramisu with layers of mascarpone and ladyfingers soaked in espresso and Irish cream liqueur.';

	beverages.textContent = 'Beverages';
	coffeemaritini.textContent = 'Irish Coffee Martini';
	coffeeMartiniDescription.textContent =
		'A cocktail made with espresso, Irish whiskey, and a touch of cream, shaken and served chilled.';

	menuDiv.appendChild(appetizers);
	menuDiv.appendChild(irish);
	menuDiv.appendChild(irishDescription);
	menuDiv.appendChild(maincourses);
	menuDiv.appendChild(beef);
	menuDiv.appendChild(beefDescription);
	menuDiv.appendChild(deserts);
	menuDiv.appendChild(tiramisu);
	menuDiv.appendChild(tiramisuDescription);
	menuDiv.appendChild(beverages);
	menuDiv.appendChild(coffeemaritini);
	menuDiv.appendChild(coffeeMartiniDescription);

	body.appendChild(menuDiv);
}

export { addMenuTab };

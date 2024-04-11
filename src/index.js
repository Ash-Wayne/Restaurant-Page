import { initialPageLoad } from './initial';
import { addMenuTab } from './menutab';
import { addContactTab } from './contacttab';

const body = document.querySelector('body');
const homeTab = document.querySelector('li:first-child');
const menuTab = document.querySelector('li:nth-child(2)');
const contactTab = document.querySelector('li:last-child');

initialPageLoad();

homeTab.addEventListener('click', e => {
	body.removeChild(document.querySelector('body > div:last-child'));
	initialPageLoad();
	contactTab.classList.remove('selected-tab');
	menuTab.classList.remove('selected-tab');
	homeTab.classList.add('selected-tab');
});

menuTab.addEventListener('click', e => {
	body.removeChild(document.querySelector('body > div:last-child'));
	addMenuTab();
	homeTab.classList.remove('selected-tab');
	contactTab.classList.remove('selected-tab');
	menuTab.classList.add('selected-tab');
});

contactTab.addEventListener('click', e => {
	body.removeChild(document.querySelector('body > div:last-child'));
	addContactTab();
	homeTab.classList.remove('selected-tab');
	menuTab.classList.remove('selected-tab');
	contactTab.classList.add('selected-tab');
});

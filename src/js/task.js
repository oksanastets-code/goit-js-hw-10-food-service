import menuCardsTeml from '../templates/dish-cards.hbs';
import menu from '../menu.json';

const menuList = document.querySelector('.js-menu');
const menuMarkup = createMenuMarkup(menu);

menuList.insertAdjacentHTML('afterbegin', menuMarkup);

function createMenuMarkup(menu) {
    return menuCardsTeml(menu);
}
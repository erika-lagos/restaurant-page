import './menu-style.css';
import Cauliflower from './images/cauliflower.jpg';
import Nachos from './images/nachos.jpg';
import Salad from './images/salad.jpg';
import HotDog from './images/hotdogs.jpg';
import Pizza from './images/pizza.jpg';
import Potatoes from './images/potatoes.jpg';
import Stew from './images/stew.jpg';
import Cookies from './images/cookies.jpg';
import Fingers from './images/fingers.jpg';
import Mousse from './images/mousse.jpg';

class Dish {

    constructor(name, description, imgSrc) {
        this.name = name;
        this.description = description;
        this.imgSrc = imgSrc;
    }

    generateMarkup() {     
        const img = new Image();
        img.src = this.imgSrc;
        img.alt = this.name;
        img.className = 'dish-img';
        
        const nameDiv = document.createElement('div');
        nameDiv.textContent = this.name;
        nameDiv.className = 'dish-name';
        
        const descDiv = document.createElement('div');
        descDiv.textContent = this.description;
        descDiv.className = 'dish-desc';
        
        const dishCard = document.createElement('div');
        dishCard.className = 'dish-card';
        dishCard.append(img, nameDiv, descDiv);
        return dishCard;
    }
}

const starters = [
    new Dish(
        'Cursed Cauliflower', 
        "Roasted cauliflower florets are dusted with mysterious spices, and they arrive at your table looking like they've been hexed.",
        Cauliflower
    ),
    new Dish(
        'Graveyard Nachos',
        'A mountain of crispy tortilla chips topped with "tombstone" cheese, undead salsa, and guacamole.',
        Nachos
    ),
    new Dish(
        `Cryptkeeper's Salad`,
        `A medley of dark, leafy greens, marinated in a hauntingly exquisite vinaigrette. 
        A chilling delight for those who dare to partake.`,
        Salad
    )
];

const entrees = [
    new Dish(
        'Spectral Sausage Finger', 
        "A spine-tingling hot dog that mimics a spectral finger, complete with eerie detail.",
        HotDog
    ),
    new Dish(
        'Phantom Pizzarella',
        'A thin, otherworldly crust is topped with a spectral blend of ghostly mozzarella, mysterious mushrooms, and ethereal basil leaves.',
        Pizza
    ),
    new Dish(
        `Spooky Spuds`,
        `Expertly roasted over open flames, creating a hauntingly delicious crispy exterior and a smoky, tender inside.`,
        Potatoes
    ),
    new Dish(
        `Shadowy Stewpot`,
        `A rich and mysterious stew, brimming with tender chunks of meat, vegetables, and a medley of spices.`,
        Stew
    )
];

const desserts = [
    new Dish(
        `Phantom Chip Cookies`, 
        `Generously studded with ethereal white chocolate chips that melt in your mouth.`,
        Cookies
    ),
    new Dish(
        `Severed Sweets Bar`,
        `Sinisterly sweet zombie finger cookie bars with a wicked twist.`,
        Fingers
    ),
    new Dish(
        `Tombstone Truffle Mousse`,
        `A hauntingly indulgent chocolate mousse that's a sweet tribute to the macabre, with a touch of graveyard flair.`,
        Mousse
    )
];

function generateCategoryMarkup(name, dishes) {
    const category = document.createElement('div');
    category.className = 'category';
    category.textContent = name;

    const dishContainer = document.createElement('div');
    dishContainer.className = 'card-container';
    dishes.forEach(dish => {
        const dishMarkup = dish.generateMarkup();
        dishContainer.appendChild(dishMarkup);
    });

    category.appendChild(dishContainer);
    return category;
}

function loadMenu(containerNode) {
    const startersMarkup = generateCategoryMarkup('Starters', starters);
    containerNode.append(startersMarkup);

    const entreesMarkup = generateCategoryMarkup('Entrees', entrees);
    containerNode.append(entreesMarkup);

    const dessertsMarkup = generateCategoryMarkup('Desserts', desserts);
    containerNode.append(dessertsMarkup);
}

export default loadMenu;
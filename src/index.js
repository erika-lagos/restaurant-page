import Logo from './images/logo-1.png';
import loadHome from './loadHome';
import loadMenu from './loadMenu';
import loadLocations from './loadLocations';
import './common-styles.css';

const mainContainer = document.querySelector('#content');

function loadMainContent() {
    loadHeader();
    loadHome(mainContainer);
    toggleTab('Home');
}

function loadHeader() {
    const header = document.createElement('div');
    header.className = 'header';
    
    const logo = new Image();
    logo.src = Logo;
    logo.className = 'logo';
    header.appendChild(logo);
    
    const menuBar = document.createElement('div');
    menuBar.className = 'menu-bar';
    createMenuItems(menuBar, 'Home', 'Menu', 'Locations');
    header.appendChild(menuBar);
    
    document.body.insertBefore(header, mainContainer);
}

function createMenuItems(menuBar, ...names) {
    names.forEach(name => {
        const item = document.createElement('div');
        item.className = 'menu-item';
        item.id = name.toLowerCase().replace(' ', '-');
        item.textContent = name;
        item.addEventListener('click', loadTab.bind(null, name));
        menuBar.appendChild(item);
    });
}

function toggleTab(tabName) {
    const tabs = document.querySelectorAll('.menu-item');
    tabs.forEach(tab => {
        if (tab.textContent === tabName) {
            tab.classList.add('selected');
        } else {
            tab.classList.remove('selected');
        }
    });
}

function loadTab(tabName) {
    toggleTab(tabName);
    mainContainer.innerHTML = '';
    if (tabName === 'Home') {
        loadHome(mainContainer);
    } else if (tabName === 'Menu') {
        loadMenu(mainContainer);
    } else if (tabName === 'Locations') {
        loadLocations(mainContainer);
    } else if (tabName === 'Contact Us') {
        loadContact(mainContainer);
    }
}

window.addEventListener('load', loadMainContent);



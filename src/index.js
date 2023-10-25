// import './style.css';

// import Background from './images/background.jpg';
// Photo by <a href="https://unsplash.com/@toddquackenbush?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Todd Quackenbush</a> on <a href="https://unsplash.com/photos/black-mortar-and-pestle-beside-brown-box-in-top-view-photography-x5SRhkFajrA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
import Logo from './images/logo-1.png';
import loadHome from './loadHome';
import loadMenu from './loadMenu';
import loadLocations from './loadLocations';
import './common-styles.css';

const mainContainer = document.querySelector('#content');

function loadMainContent() {
    // const body = document.getElementsByTagName('body');
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
    createMenuItems(menuBar, 'Home', 'Menu', 'Locations', 'Contact Us');
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

// function clearTabContents() {
//     const nodes = mainContainer.children;
//     console.log('-------------------------', nodes.length, nodes);
//     for (let i = 0; i < nodes.length ; i++) {
//         console.log(nodes[i], nodes[i].classList, i);
//         if (!nodes[i].classList.contains('header')) {
//             mainContainer.removeChild(nodes[i]);
//         }
//     }
// }

window.addEventListener('load', loadMainContent);



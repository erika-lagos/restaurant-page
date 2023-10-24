// import './style.css';

// import Background from './images/background.jpg';
// Photo by <a href="https://unsplash.com/@toddquackenbush?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Todd Quackenbush</a> on <a href="https://unsplash.com/photos/black-mortar-and-pestle-beside-brown-box-in-top-view-photography-x5SRhkFajrA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
import loadContent from './pageLoad';

const mainContainer = document.querySelector('#content');

function loadMainContent() {
    mainContainer.innerHTML = '';
    loadContent(mainContainer);
}

// window.addEventListener('load', loadMainContent);



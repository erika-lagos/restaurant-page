import './home-style.css';
import Background from './images/background.jpg';

// Photo by <a href="https://unsplash.com/@toddquackenbush?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Todd Quackenbush</a> on <a href="https://unsplash.com/photos/black-mortar-and-pestle-beside-brown-box-in-top-view-photography-x5SRhkFajrA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

function loadHome(containerNode) {
    const main = document.createElement('div');
    main.className = 'main';
    
    const mainContent = document.createElement('div');
    mainContent.className = 'main-content';
    
    const mainHeader = document.createElement('div');
    mainHeader.className = 'main-header';
    mainHeader.textContent = 'The Undead Diner';
    main.appendChild(mainHeader);

    const par1 = document.createElement('p');
    par1.textContent = 
    'Welcome to The Undead Diner, where we bring a fresh twist to the afterlife dining experience!';
    const par2 = document.createElement('p');
    par2.textContent = 
    'Our one-of-a-kind restaurant offers a ghoulishly good time for zombies and humans alike.';
    const par3 = document.createElement('p');
    par3.textContent = 
    "Nestled in the heart of the undead world, we specialize in serving up the most delectable, and delightfully eerie, "
    + "dishes that will awaken your taste buds from the eternal slumber. Our chefs have mastered the art of reimagining "
    + "classic dishes with a zombified flair, ensuring every bite is a true 'bite' of pleasure.";
    const par4 = document.createElement('p');
    par4.textContent = 
    "Whether you're seeking 'Braaaains and Bistros' or something a tad less cerebral, you'll find it all here in our crypt-ic setting.";
    const par5 = document.createElement('p');
    par5.textContent = 
    "Join us for an unforgettable dining experience where even the undead are left craving for more.";
    const par6 = document.createElement('p');
    par6.textContent = 
    "After all, who says the afterlife can't be deliciously fun?";
    
    mainContent.append(par1,par2,par3,par4,par5,par6);
    main.appendChild(mainContent);
    containerNode.appendChild(main);
}

export default loadHome;
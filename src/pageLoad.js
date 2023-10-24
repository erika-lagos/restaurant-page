import Logo from './images/logo-1.png';

function loadContent(containerNode) {
    const header = generateHeader();
    containerNode.appendChild(header);

    const main = generateMain();
    containerNode.appendChild(main);
}

function generateHeader() {
    const header = document.createElement('div');
    header.className = 'header';
    
    const logo = new Image();
    logo.src = Logo;
    logo.className = 'logo';
    header.appendChild(logo);
    
    const name = document.createElement('div');
    name.textContent = 'The Undead Diner';
    header.appendChild(name);

    return header;
}

function generateMain() {
    const main = document.createElement('div');
    main.className = 'main';

    const mainContent = document.createElement('div');
    mainContent.className = 'main-content';

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
    
    mainContent.appendChild(par1);
    mainContent.appendChild(par2);
    mainContent.appendChild(par3);
    mainContent.appendChild(par4);
    mainContent.appendChild(par5);
    mainContent.appendChild(par6);

    main.appendChild(mainContent);
    return main;
}

export default loadContent;
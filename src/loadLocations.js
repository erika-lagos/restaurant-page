import './locations-style.css';
import Location1 from './images/location-1.jpg';
import Location2 from './images/location-2.jpg';
import Location3 from './images/location-3.jpg';
import Location4 from './images/location-4.jpg';

class Location {

    constructor(name, address, imgSrc) {
        this.name = name;
        this.address = address;
        this.imgSrc = imgSrc;
    }

    generateMarkup() {
        const img = new Image();
        img.src = this.imgSrc;
        img.alt = this.name;
        img.className = 'location-img';
        
        const cityDiv = document.createElement('div');
        cityDiv.textContent = this.name;
        cityDiv.className = 'city';
        
        const dataDiv = document.createElement('div');
        dataDiv.className = 'location-data';
        dataDiv.append(cityDiv, this.address);
        
        const locationDiv = document.createElement('div');
        locationDiv.className = 'location';
        locationDiv.append(img, dataDiv);
        return locationDiv;
    }
}

const locations = [
    new Location(
        `Hades Hollow, Underworld`,
        `666 Inferno Avenue, Hades Hollow, Underworld`,
        Location1
    ),
    new Location(
        `Gloomsville, Netherrealm`,
        `13 Eerie Lane, Gloomsville, Netherrealm`,
        Location2
    ),
    new Location(
        `Eternal Shade, Abyssal Domain`,
        `42 Crypt Street, Eternal Shade, Abyssal Domain`,
        Location3
    ),
    new Location(
        `Soulstice City, Limbo Realm`,
        `99 Phantom Plaza, Soulstice City, Limbo Realm`,
        Location4
    )
]

function loadLocations(containerNode) {
    locations.forEach(location => {
        const locationDiv = location.generateMarkup();
        containerNode.appendChild(locationDiv);
    })
}

export default loadLocations;
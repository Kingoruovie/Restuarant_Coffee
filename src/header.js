import { mainHome, mainMenu, mainContact} from './mainHomeMenuContact';

export default function header() {

    const header = document.createElement('header');

    const mainTitle = document.createElement('h1');
    mainTitle.innerHTML = 'MyMyCoffee';
    mainTitle.classList.add('main-title');

    const navBar = document.createElement('nav');

    const uL = document.createElement('ul');
    const lI_1 = document.createElement('li');
    const lI_2 = document.createElement('li');
    const lI_3 = document.createElement('li');

    const homeLink = document.createElement('a');
    homeLink.classList.add('active')
    homeLink.innerHTML = 'Home';
    const contactLink = document.createElement('a');
    contactLink.innerHTML = 'Contact';
    const menuLink = document.createElement('a');
    menuLink.innerHTML = 'Menu';

    homeLink.onclick = mainHome;
    menuLink.onclick = mainMenu;
    contactLink.onclick = mainContact;

    lI_1.appendChild(homeLink);
    lI_2.appendChild(menuLink);
    lI_3.appendChild(contactLink);

    uL.appendChild(lI_1);
    uL.appendChild(lI_2);
    uL.appendChild(lI_3);

    navBar.appendChild(uL);

    header.appendChild(mainTitle);
    header.appendChild(navBar)

    return header
}
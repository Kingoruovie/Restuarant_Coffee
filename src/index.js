import header from './header'
import footer from './footer'
import { mainHome, mainMenu, mainContact} from './mainHomeMenuContact';
import './style.css'


const myPageMap = {
    "Home": mainHome,
    "Menu": mainMenu,
    "Contact": mainContact,
}


document.body.append(header());

document.body.append(myPageMap[document.querySelector('.active').textContent]())

document.body.append(footer())
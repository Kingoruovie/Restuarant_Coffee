import Logo from './Logo.jpg';
import Americano from './Americano.jpeg';
import Cappuccino from './Cappuccino.jpg';
import Expresso from './Expresso.jpg';
import Latte from './Latte.jpg'



const main = document.createElement('main');



export function mainHome() {
    const section = document.createElement('section');
    section.classList.add('coffee-shop-intro');

    const myLogo = new Image()
    myLogo.src = Logo

    const article = document.createElement('article')
    article.innerHTML = "\
        Do you love the smell of freshly brewed coffee in the morning? Do you enjoy spending time in cozy, inviting atmospheres? If so, then you'll love MyMyCoffe.\
        We're a coffee shop that's passionate about making your day. We use only the finest beans, and we roast them fresh to order. We also offer a variety of other coffee drinks, including espresso, lattes, cappuccinos, and more.\
        But what really sets us apart is our atmosphere. We're located in a charming, historic building that's been lovingly restored. Our walls are lined with books, and our tables are made from reclaimed wood. We have a fireplace that's perfect for curling up with a good book on a cold winter day.\
        We're the perfect place to relax and people-watch. Whether you're working on your laptop, meeting up with friends, or just need a quiet place to escape, MyMyCoffe is the perfect place for you.\
    "

    section.appendChild(myLogo);
    section.appendChild(article);

    main.innerHTML = "";

    main.appendChild(section)

    return main
}


export function mainMenu() {
    const section = document.createElement('section');
    section.classList.add('menu');

    const coffeeVariety = [
        {
            imageUrl: Cappuccino,
            name: 'Cappuccino',
            description: 'Cappuccino is an espresso-based coffee drink that is traditionally prepared with steamed milk foam (microfoam).'
        },
        {
            imageUrl: Latte,
            name: 'Latte',
            description: 'Latte is a coffee drink made with espresso, steamed milk, and a thin layer of foamed milk.'
        },
        {
            imageUrl: Expresso,
            name: 'Expresso',
            description: 'Espresso is a concentrated coffee drink made by forcing hot water through finely-ground coffee beans at high pressure.'
        },
        {
            imageUrl: Americano,
            name: 'Americano',
            description: 'An Americano is a coffee drink made by diluting an espresso shot with hot water.'
        },
    ];


    for (let i=0; i<coffeeVariety.length; i++) {
        const article = document.createElement('article');
        article.classList.add('menu-items');

        const imageDiv = document.createElement('div');
        imageDiv.classList.add('menu-items-image');
        const coffeeDrink = new Image()
        coffeeDrink.src = coffeeVariety[i].imageUrl
        imageDiv.appendChild(coffeeDrink)

        const titleDiv = document.createElement('div');
        titleDiv.classList.add('menu-items-title');
        titleDiv.innerHTML = coffeeVariety[i].name;

        const descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('menu-items-description');
        descriptionDiv.innerHTML = coffeeVariety[i].description;

        article.appendChild(imageDiv);
        article.appendChild(titleDiv);
        article.appendChild(descriptionDiv);

        section.appendChild(article)
    }

    const lastArticle = document.createElement('article');
    lastArticle.classList.add('menu-items');

    const moreBtn = document.createElement('div');
    moreBtn.id = 'more-button';

    const btn = document.createElement('button');
    btn.innerHTML = '>'

    moreBtn.appendChild(btn)
    lastArticle.appendChild(moreBtn);

    section.appendChild(lastArticle);

    main.innerHTML = ""
    
    main.appendChild(section);
    return main;
}


export function mainContact() {
    const section = document.createElement('section');
    section.classList.add('contact')

    const form = document.createElement('form');

    const emailDiv = document.createElement('div');
    const labelEmail = document.createElement('label');
    labelEmail.htmlFor = 'email';
    labelEmail.innerHTML = 'Email';
    const inputEmail = document.createElement('input');
    inputEmail.setAttribute('type', 'email');
    inputEmail.id = 'email';
    emailDiv.appendChild(labelEmail);
    emailDiv.appendChild(inputEmail)


    const textAreaDiv = document.createElement('div');
    const labelTextArea = document.createElement('label');
    labelTextArea.htmlFor = 'message';
    labelTextArea.innerHTML = 'Message';
    const inputTextArea = document.createElement('textarea');
    inputTextArea.id = 'message';
    inputTextArea.rows = 10;
    inputTextArea.cols = 30;
    textAreaDiv.appendChild(labelTextArea);
    textAreaDiv.appendChild(inputTextArea);


    const btnDiv = document.createElement('div');
    const btn = document.createElement('button')
    btn.setAttribute('type', 'submit');
    btn.innerHTML = 'Submit';
    btnDiv.appendChild(btn);

    form.appendChild(emailDiv);
    form.appendChild(textAreaDiv);
    form.appendChild(btnDiv);

    section.appendChild(form)

    main.innerHTML = "";
    main.appendChild(section);

    return main;
}
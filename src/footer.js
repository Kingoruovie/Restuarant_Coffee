export default function footer() {
    const footer = document.createElement('footer');

    const div = document.createElement('div');
    div.innerHTML = 'Oru Ovie - Copyright &copy; 2023'

    footer.appendChild(div);

    return footer
}
const navbar = document.querySelectorAll('.nav-list')
console.log(navbar);
const nav = document.querySelector('#nav')

const rightNavbar = () => {
    for (let i = 0; i < navbar.length; i++) {
        const newNav = navbar[i];
        newNav.classList.remove('navlist')
        newNav.classList.add('nav-list-right')
    }

    nav.style.position = 'relative'


}

const topNavbar = () => {
    for (let i = 0; i < navbar.length; i++) {
        const nav = navbar[i];
        nav.classList.remove('nav-list-right')
        nav.classList.add('nav-list')

    }
    nav.style.position = 'sticky'

}
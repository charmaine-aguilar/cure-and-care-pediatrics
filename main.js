let openMobileMenu = document.querySelector('#mobile-menu-button')
let closeMobileMenu = document.querySelector('.close-mobile-menu')

openMobileMenu.addEventListener('click', () => {
    document.querySelector('.mobile-menu').style.height = '100%'
})

closeMobileMenu.addEventListener('click', () => {
    document.querySelector('.mobile-menu').style.height = '0%'
})


const hmenu = document.querySelector('.hamburger'); 

const toggleMenu = () =>{
    hmenu.classList.toggle('hamburger--open');
}

const hamburgerButton = document.querySelector('.btn');

hamburgerButton.addEventListener('click', toggleMenu);
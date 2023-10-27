const hamburger = document.getElementById('hamburgerButton');
const linkList = document.getElementById('linkList');

hamburger.addEventListener('click', ()=> {
    linkList.classList.toggle('active');
});
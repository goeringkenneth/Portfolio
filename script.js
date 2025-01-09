const hamburger=document.querySelector('.hamburger')
const navLinks=document.querySelector('.nav-links')
const lineTop=document.querySelector('.lineTop')
const lineMid=document.querySelector('.lineMid')
const lineBott=document.querySelector('.lineBott')
const lineAss=document.querySelector('.lineAss')


const links=document.querySelectorAll('.nav-links li')

hamburger.addEventListener("click", ()=> {
    lineTop.classList.toggle("open");
    lineMid.classList.toggle("open");
    lineBott.classList.toggle("open");
    lineAss.classList.toggle("open");

    navLinks.classList.toggle("open");
    links.forEach(link =>{
    link.classList.toggle("fade")
    });
});
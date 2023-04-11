let cursor = document.querySelector('.cursor');
let links = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
    let x = e.clientX;
    let y = e.clientY;

    cursor.style.transform = `translate( calc( ${x}px - 50%), calc( ${y}px - 50%) )`;
});

links.forEach((link) => {
    link.addEventListener("mouseover", function() {
        cursor.classList.add('hover');
    }); 
    link.addEventListener("mouseleave", function() {
        cursor.classList.remove('hover');
    });             
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
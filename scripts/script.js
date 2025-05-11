// Typing Effect
const typingEffect = document.getElementById('typing-effect');
typingEffect.innerHTML = typingEffect.innerHTML.replace(/([^\x00-\x80]|[\r\n])/g, "<span>$&</span>");

let index = 0;
const textArray = typingEffect.textContent.split('');
typingEffect.innerHTML = '';
function type() {
    if (index < textArray.length) {
        typingEffect.innerHTML += textArray[index++];
        setTimeout(type, 100);
    }
}
type();

// Reveal on Scroll
const reveals = document.querySelectorAll('.reveal-on-scroll');

function scrollReveal() {
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        if (elementTop < windowHeight - 150) {
            reveals[i].classList.add('visible');
        }
    }
}

window.addEventListener('scroll', scrollReveal);
scrollReveal();

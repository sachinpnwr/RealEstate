let hamburger = document.querySelector('.hamburger')
let navItems = document.querySelector('#navItems')
let navLink = document.querySelectorAll('.nav-link')
let close = document.querySelector('#close')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navItems.classList.toggle('active');
})

navLink.forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navItems.classList.remove('active');
}))

close.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navItems.classList.remove('active');
})

//navbar color change
window.addEventListener('scroll', () => {
    let header = document.querySelector('nav');
    let windowPosition = window.scrollY > 300;
    header.classList.toggle('scrolling-active', windowPosition)
})

// slider script
const slider = document.querySelector('.slider');
const slide = document.querySelector('.slides');
const prev = document.querySelector('.prev-btn');
const next = document.querySelector('.next-btn');
let slides = document.querySelectorAll('.slide');
let index = 1;
const interval = 7000;
let slideId;
let btnDelay;

var firstClone = slides[0].cloneNode(true)
var lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone'
lastClone.id = 'last-clone'

slide.append(firstClone);
slide.prepend(lastClone);

var slideWidth = 100;

slide.style.transform = `translateX(${-slideWidth * index}vw)`;

const startSlide = () => {
    slideId = setInterval(moveToNextSlide, interval)
}

function getSlides() {
    return slides = document.querySelectorAll('.slide');
}


function moveToNextSlide() {
    slides = getSlides();
    if (index >= slides.length - 1) {
        index = 1;
    };
    index++;
    slide.style.transform = `translateX(${-slideWidth * index}vw)`;
    slide.style.transition = '.7s';
    resetTimer();
}

function moveToBackSlide() {
    slides = getSlides();
    if (index <= 0) return;
    index--;
    slide.style.transform = `translateX(${-slideWidth * index}vw)`;
    slide.style.transition = '.7s';
    resetTimer();
}

function resetTimer() {
    clearInterval(slideId);
    startSlide();
}


slide.addEventListener('transitionend', () => {
    slides = getSlides();
    if (slides[index].id === firstClone.id) {
        slide.style.transition = 'none';
        index = 1;
        slide.style.transform = `translateX(${-slideWidth * index}vw)`;
    }
    if (slides[index].id === lastClone.id) {
        slide.style.transition = 'none';
        index = slides.length - 2;
        slide.style.transform = `translateX(${-slideWidth * index}vw)`;
    }
})

next.addEventListener('click', nextSlide);
// next.addEventListener('click', moveToNextSlide);

prev.addEventListener('click', prevSlide);
startSlide();
// clearInterval(slideId);

var lastClick = 0;
function nextSlide(){
    var d = new Date();
        var t = d.getTime();
        if(t - lastClick < 700) {
            return;
        }
        else{
            moveToNextSlide();
        }
        lastClick = t;
}
function prevSlide(){
    var d = new Date();
        var t = d.getTime();
        if(t - lastClick < 700) {
            //  alert("LESS THAN 5 SECONDS!!!");
            // console.log('off')
            return;
        }
        else{
            moveToBackSlide();
            // console.log('on')
        }
        lastClick = t;
}

//expand content
let expand = document.querySelectorAll('.expand');
let hidden = document.querySelectorAll('.hidden');
const close1 = `Close <i class="fa-solid fa-angles-up"></i>`;
const more =`Read More <i class="fa-solid fa-angles-down"></i>`

expand.forEach((bullet , bulletIndex)=>{
    bullet.addEventListener('click',()=>{
    let expand = document.querySelectorAll('.expand');
    if(expand[bulletIndex].innerHTML == close1){
        hidden[bulletIndex].style.display = `none`;
        hidden[bulletIndex].style.transition = '.7s';
        expand[bulletIndex].innerHTML= more;
    }
    else{
        hidden[bulletIndex].style.display = `block`;
        expand[bulletIndex].innerHTML= close1;
        hidden[bulletIndex].style.transition = '.7s';
    }
    })
})
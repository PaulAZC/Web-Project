//Variable declaration
const button = document.querySelector('.discoverBtn');
const textSection1 = document.getElementById('titleFirstSection');
const load = document.querySelector('.load');
const backgroundFisrt = document.querySelector('.section1');
const allBandes = document.querySelectorAll('.bande');
const TLAnim = new TimelineMax();
const textCoding = document.querySelector('.textCoding');
const imgCoding = document.querySelector('.imgCoding');
const textTeaching = document.querySelector('.textTeaching');
const imgTeaching = document.querySelector('.imgTeaching');
const h2container = document.querySelector('.h2Container');
let header = document.querySelector('header');
let fontHeader = document.querySelectorAll('header a');

//Typewriter function that we use with the library 
//Begin with the load of the page
window.addEventListener('load', () => {
    new Typewriter(textSection1, {
    })
    .pauseFor(2000)
    .changeDelay(80)
    .typeString('<span style="font-weight: normal; font-family:Roboto Mono; color:#EAF205; font-size:25px">Welcome to Web Company, </span>')
    .pauseFor(1000)
    .typeString('<span style="font-weight: normal; font-family:Roboto Mono; color:#EAF205; font-size:25px">that help you in </span>')
    .pauseFor(1000) 
    .typeString('<span style="font-weight: normal; font-family:Roboto Mono; color:#F24130; font-size:25px">web design</span>')
    .pauseFor(1000)
    .deleteChars(10)
    .typeString('<span style="font-weight: normal; font-family:Roboto Mono; color:#F24130; font-size:25px">cybersercurity</span>')
    .pauseFor(1000)
    .deleteChars(14)
    .typeString('<span style="font-weight: normal; font-family:Roboto Mono; color:#F24130; font-size:25px">web development</span>')
    .pauseFor(1000)
    .deleteChars(15)
    .typeString('<span style="font-weight: normal; font-family:Roboto Mono; color:#F24130; font-size:25px">audit</span>')
    .pauseFor(1000)
    .deleteChars(5)
    .typeString('<span style="font-weight: normal; font-family:Roboto Mono; color:#F24130; font-size:25px">teaching</span>')
    .start();
});

//Parameters of the animations and header
//in function of the scrollY
window.addEventListener('scroll', ()=>{ 
    if(window.scrollY>38 && window.scrollY<570){
        button.classList.add('anim-button');
    }
    if(window.scrollY>200 && window.scrollY<975){
        textCoding.classList.add('anim-coding-text');
        imgCoding.classList.add('anim-coding-img');
    }
    if(window.scrollY>646 && window.scrollY<1940){
        textTeaching.classList.add('anim-coding-img');
        imgTeaching.classList.add('anim-coding-text');
    }
    if(window.scrollY>592 && window.scrollY<1570){
        header.style.backgroundColor = "#0D0D0D";
        header.style.setProperty("--main-bg-color", '#EAF205');
        for(let i=0; i<fontHeader.length; i++){
            fontHeader[i].style.color = "#EAF205";
        }
    }else if(window.scrollY>1572 && window.scrollY<2457){
        header.style.backgroundColor = "#F24130";
        header.style.setProperty("--main-bg-color", '#0D0D0D');
        for(let i=0; i<fontHeader.length; i++){
            fontHeader[i].style.color = "#0D0D0D";  
        }
    }else if(window.scrollY>148 && window.scrollY<592){
        header.style.backgroundColor = "#EAF205";
        header.style.setProperty("--main-bg-color", '#0D0D0D');
        for(let i=0; i<fontHeader.length; i++){
            fontHeader[i].style.color = "#0D0D0D"; 
        }
    }else if(window.scrollY<148){
        header.style.backgroundColor = "transparent";
        header.style.setProperty("--main-bg-color", '#EAF205');
        for(let i=0; i<fontHeader.length; i++){
            fontHeader[i].style.color = "#EAF205";
        }
    }
    if(window.scrollY>2457 && window.scrollY<3350){
        header.style.backgroundColor = "#0D0D0D";
        for(let i=0; i<fontHeader.length; i++){
            fontHeader[i].style.color = "#0D0D0D";
        }
    }
    if(window.scrollY>2730 && window.scrollY<3690){
        header.style.zIndex = "-1000";
    }else{
        header.style.zIndex = "10";
    }
    sY = window.scrollY;
});

//Third section, transparent image + position variation 
//in function of the mouse position and the scroll
let mouseClientX = 0;
let mouseClientY = 0;

function update() {
    //Get the position of the mouse and of the scroll
    const mousePageX = mouseClientX + 4*pageXOffset; //Scroll x and y in real time
    const mousePageY = mouseClientY + 4*pageYOffset;

    const traX = ((200 * mousePageX) / 570) + 40; //Variation of the image position 
    const traY = ((200 * mousePageY) / 570) + 50;
    console.log(pageYOffset);
    const backgroundPosition = traX + "% " + traY + "%"; //That we put here in percentage

    for (const el of document.querySelectorAll('.word')) { //For each class that have the classname 'word'
        el.style.backgroundPosition = backgroundPosition;  //Put the position
    }
}

document.addEventListener('mousemove', e => {
    //Get the position of the mouse
    mouseClientX = e.clientX;
    mouseClientY = e.clientY;

    update();
}, false);

addEventListener('scroll', update, false); //Update the scroll

if (document.readyState === 'loading') {   //When the page is loading
    addEventListener('DOMContentLoaded', update, false);
} else {
    update();
}
  
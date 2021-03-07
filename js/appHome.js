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
let header = document.querySelector('header');
let fontHeader = document.querySelectorAll('header a');
let fontHeaderHover = document.querySelectorAll('header nav ul li a:after');
fontHeaderHover = document.styleSheets;

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
        for(let i=0; i<fontHeader.length; i++){
            fontHeader[i].style.color = "#EAF205";
        }
    }else if(window.scrollY>1572){
        header.style.backgroundColor = "#F24130";
        for(let i=0; i<fontHeader.length; i++){
            fontHeader[i].style.color = "#0D0D0D";  
        }
    }else if(window.scrollY>148 && window.scrollY<592){
        header.style.backgroundColor = "#EAF205";
        for(let i=0; i<fontHeader.length; i++){
            fontHeader[i].style.color = "#0D0D0D"; 
        }
    }else if(window.scrollY<148){
        header.style.backgroundColor = "transparent";
        for(let i=0; i<fontHeader.length; i++){
            fontHeader[i].style.color = "#EAF205";
            fontHeaderHover.backgroundColor = "#EAF205";
        }
    }
    console.log(window.scrollY);
});


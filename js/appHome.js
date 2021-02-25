const button = document.querySelector('.discoverBtn');
const textSection1 = document.getElementById('titleFirstSection');
const load = document.querySelector('.load');
const cube = document.querySelector('.cube');

window.addEventListener('load', () => {
    load.classList.add('fondu-out');

    new Typewriter(textSection1, {
    })
    .changeDelay(80)
    .typeString('Welcome to my site, ')
    .pauseFor(1000)
    .typeString('that talk about ')
    .pauseFor(1000) 
    .typeString('<span style="color:red">that</span>')
    .start();
});

window.addEventListener('scroll', ()=>{
    if(window.scrollY>70){
        button.classList.add('anim-button');
    }

    if(window.scrollY>500){
        cube.classList.add('anim-cube');
    }
});
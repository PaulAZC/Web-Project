const button = document.querySelectorAll('.discoverBtn');
const textSection1 = document.getElementById('titleFirstSection');
const load = document.querySelector('.load');

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

    const TL = gsap.timeline({pause:true});
    TL.staggerFrom(button, 2, {opacity:0, ease:"power2.out"}, 0.3);
    TL.play();
});
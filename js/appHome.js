const button = document.querySelectorAll('.discoverBtn');
const textSection1 = document.getElementById('titleFirstSection');

window.addEventListener('load', () => {
    new Typewriter(textSection1, {
    })
    .changeDelay(80)
    .typeString('Welcome to my site, ')
    .pauseFor(1000)
    .typeString('that talk about <span style="color:red">that</span>')
    .start();

    const TL = gsap.timeline({pause:true});
    TL.staggerFrom(button, 2, {opacity:0, ease:"power2.out"}, 0.3);
    TL.play();
});
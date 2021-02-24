const button = document.querySelectorAll('.discoverBtn');

window.addEventListener('load', () => {
    const TL = gsap.timeline({pause:true});
    TL.staggerFrom(button, 2, {opacity:0, ease:"power2.out"}, 0.3);
    TL.play();
});
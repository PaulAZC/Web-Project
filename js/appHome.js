const button = document.querySelector('.discoverBtn');
const textSection1 = document.getElementById('titleFirstSection');
const load = document.querySelector('.load');
const cube = document.querySelector('.cube');
const backgroundFisrt = document.querySelector('.section1');
const media = document.querySelectorAll('.socialList');
const allBandes = document.querySelectorAll('.bande');
const TLAnim = new TimelineMax();

// function delay(n) {
//     return new Promise((done) => {
//       setTimeout(() => {
//         done();
//       }, n)
//     })
//   }
  
//   barba.init({
  
//     sync: true,
  
//     transitions: [
//       {
//         async leave(){
//           const done = this.async();
//           TLAnim
//           .to(allBandes, {height: '100%', stagger: 0.05})  
//           await delay(1500);
//           done();
  
//         },
//         enter(){
//           TLAnim
//           .to(allBandes, {height: '0%', stagger: 0.05})
//         }
//       }
//     ]
//   });

window.addEventListener('load', () => {
    new Typewriter(textSection1, {
    })
    .pauseFor(2000)
    .changeDelay(80)
    .typeString('Welcome to my site, ')
    .pauseFor(1000)
    .typeString('that talk about ')
    .pauseFor(1000) 
    .typeString('<span style="color:red">that</span>')
    .start();

    backgroundFisrt.classList.add('anim-back-first');
});

window.addEventListener('scroll', ()=>{    
    if(window.scrollY>180){
        button.classList.add('anim-button');
    }

    if(window.scrollY>500){
        cube.classList.add('anim-cube');
    }
    if(window.scrollY>600){
        media.classList.add('anim-media');
    }
});


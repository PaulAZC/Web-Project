const button = document.querySelector('.discoverBtn');
const textSection1 = document.getElementById('titleFirstSection');
const load = document.querySelector('.load');
const cube = document.querySelector('.cube');
const backgroundFisrt = document.querySelector('.section1');
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
    .typeString('<span style="font-family:Roboto Mono; color:#EAF205; font-size:25px">Welcome to Web Company, </span>')
    .pauseFor(1000)
    .typeString('<span style="font-family:Roboto Mono; color:#EAF205; font-size:25px">that help you in </span>')
    .pauseFor(1000) 
    .typeString('<span style="font-family:Roboto Mono; color:#F24130; font-size:25px">web design</span>')
    .pauseFor(1000)
    .deleteChars(10)
    .typeString('<span style="font-family:Roboto Mono; color:#F24130; font-size:25px">cybersercurity</span>')
    .pauseFor(1000)
    .deleteChars(14)
    .typeString('<span style="font-family:Roboto Mono; color:#F24130; font-size:25px">web development</span>')
    .pauseFor(1000)
    .deleteChars(15)
    .typeString('<span style="font-family:Roboto Mono; color:#F24130; font-size:25px">audit</span>')
    .pauseFor(1000)
    .deleteChars(5)
    .typeString('<span style="font-family:Roboto Mono; color:#F24130; font-size:25px">teaching</span>')
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
});


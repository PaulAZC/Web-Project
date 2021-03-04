const button = document.querySelector('.discoverBtn');
const textSection1 = document.getElementById('titleFirstSection');
const load = document.querySelector('.load');
const backgroundFisrt = document.querySelector('.section1');
const allBandes = document.querySelectorAll('.bande');
const TLAnim = new TimelineMax();
const articleLeft = document.querySelector('.leftSide');
const articleRight = document.querySelector('.rightSide');
const textCoding = document.querySelector('.textCoding');
const imgCoding = document.querySelector('.imgCoding');
const textTeaching = document.querySelector('.textTeaching');
const imgTeaching = document.querySelector('.imgTeaching');

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
    if(window.scrollY>50){
        button.classList.add('anim-button');
    }
    if(window.scrollY>240){
        textCoding.classList.add('anim-coding-text');
        imgCoding.classList.add('anim-coding-img');
    }
    if(window.scrollY>630){
        textTeaching.classList.add('anim-coding-img');
        imgTeaching.classList.add('anim-coding-text');
    }
    // else if(window.scrollY>900 || window.scrollY<300){
    //     textTeaching.classList.remove('anim-coding-img');
    //     imgTeaching.classList.remove('anim-coding-text');
    // }
    if(window.scrollY>950){
        articleLeft.classList.add('anim-side-left');
        articleRight.classList.add('anim-side-right');
    }
});


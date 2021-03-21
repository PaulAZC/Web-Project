const bgFS = document.getElementById('ourPFirstS');
let header = document.querySelector('header');
let fontHeader = document.querySelectorAll('header a');
const galery = document.getElementById('galery');

// //Transition animation
// const wipe = document.querySelector('.wipe-transition');
// const TL = new TimelineMax();

// barba.init({
//     sync : true,
//     transitions : [{
//         async leave(){
//             const done = this.async();
//             TL.to(wipe, {left: '0%', ease:'power2.out', duration:'1'});
//         },
//     enter(){
//         TL.to(wipe, {left: '100%', ease:'power2.out', duration:'1'});
//     }
//     }]
// });

//Animation with the scroll
window.addEventListener('scroll', ()=>{
    var bgMove = 50+(window.scrollY/30);
    bgFS.style.backgroundPosition = "50% " +bgMove+ "%";

    if(window.scrollY<300){
        header.style.background = "transparent";
    }
    if(window.scrollY>300){
        header.style.background = "#0D0D0D";
    }

    //Background changement
    if(window.scrollY<493){
        galery.style.background = "#f1f1f1";
        header.style.setProperty("--main-bg-color", '#f1f1f1');
        for(let i=0; i<fontHeader.length; i++){
            fontHeader[i].style.color = "#f1f1f1";  
        }
    }
    if(window.scrollY<1706 && window.scrollY>493){
        galery.style.background = "#0D0D0D";
        header.style.setProperty("--main-bg-color", '#f1f1f1');
        for(let i=0; i<fontHeader.length; i++){
            fontHeader[i].style.color = "#f1f1f1";  
        }
    }
    if(window.scrollY>=1706){
        header.style.backgroundColor = "#F24130";
        header.style.setProperty("--main-bg-color", '#0D0D0D');
        galery.style.background = "#F24130";
        for(let i=0; i<fontHeader.length; i++){
            fontHeader[i].style.color = "#0D0D0D";  
        }
    }
});

//Importation of the galery with JSON
document.addEventListener('DOMContentLoaded', function() {
    var gallery = document.getElementById('galery_container');

    var left_side = document.createElement("div");
    left_side.setAttribute('class','left_side');

    var right_side = document.createElement("div");
    right_side.setAttribute('class', 'right_side');

    fetch("/json/galery.json").then(function(el){
        el.json().then(function(json){
            for(let i=0; i<json.length; i++){
                var link = document.createElement('a');
                var caption = document.createElement('h2');

                caption.textContent = json[i].id + ': ' + json[i].name;
                caption.setAttribute('class', 'image_caption');

                link.setAttribute('href', json[i].url);
                link.setAttribute('target', '_blank');

                var images = document.createElement('img');

                images.setAttribute('src', json[i].url);
                images.setAttribute('alt', json[i].description);
                images.setAttribute('class', 'image_galery show-on-scroll');

                link.appendChild(images);
                link.appendChild(caption);

                if(i%2 == 0 || i == 0){
                    left_side.appendChild(link);
                    gallery.appendChild(left_side);
                }else{
                    right_side.appendChild(link);
                    gallery.appendChild(right_side);
                }
            }

            //Observer function
            const ratio = 0.1;
            const target = document.querySelectorAll('.show-on-scroll');

            const option = {
                root:null,
                rootMargin : '0px',
                threshold : ratio
            }

            const callback = function(entries, observer){
                entries.forEach(function(entry){
                    if(entry.intersectionRatio > ratio){
                        entry.target.classList.add('anim-gallery');
                        observer.unobserve(entry.target);
                    }
                });
            }

            const observer = new IntersectionObserver(callback, option);
            target.forEach(el => {
                observer.observe(el);
            });
        });
    });
});

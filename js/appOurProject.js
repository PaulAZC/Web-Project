const bgFS = document.getElementById('ourPFirstS');
let header = document.querySelector('header');
let fontHeader = document.querySelectorAll('header a');
const galery = document.getElementById('galery');

window.addEventListener('scroll', ()=>{
    var bgMove = 50+(window.scrollY/30);
    bgFS.style.backgroundPosition = "50% " +bgMove+ "%";

    console.log(window.scrollY);

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
        galery.style.background = "#F24130";
        header.style.backgroundColor = "#F24130";
        header.style.setProperty("--main-bg-color", '#0D0D0D');
        for(let i=0; i<fontHeader.length; i++){
            fontHeader[i].style.color = "#0D0D0D";  
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var gallery = document.getElementById('galery_container');

    var left_side = document.createElement("div");
    left_side.setAttribute('class','left_side');

    var right_side = document.createElement("div");
    right_side.setAttribute('class', 'right_side');

    fetch("/json/galery.json").then(function(el){
        el.json().then(function(json){
            for(let i=0; i<json.length; i++){
                var images = document.createElement('img');

                images.setAttribute('src', json[i].url);
                images.setAttribute('alt', json[i].description);

                if(i%2 == 0 || i == 0){
                    left_side.appendChild(images);
                    gallery.appendChild(left_side);
                }else{
                    right_side.appendChild(images);
                    gallery.appendChild(right_side);
                }
            }
        });
    });
});

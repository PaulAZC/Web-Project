const bgFS = document.getElementById('ourPFirstS');
let header = document.querySelector('header');

window.addEventListener('scroll', ()=>{
    var bgMove = 50+(window.scrollY/30);
    console.log(window.scrollY);
    bgFS.style.backgroundPosition = "50% " +bgMove+ "%";
    if(window.scrollY<300){
        header.style.background = "transparent";
    }
    if(window.scrollY>300){
        header.style.background = "#0D0D0D";
    }
});


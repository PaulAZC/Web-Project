let header = document.querySelector('header');
let fontHeader = document.querySelectorAll('header a');

//Animation with the scroll
window.addEventListener('scroll', ()=>{
    if(window.scrollY<152){
        header.style.setProperty("--main-bg-color", '#f1f1f1');
        header.style.backgroundColor = "transparent";
        for(let i=0; i<fontHeader.length; i++){
            fontHeader[i].style.color = "#f1f1f1";  
        }
    }

    if(window.scrollY>152){
        header.style.setProperty("--main-bg-color", '#f1f1f1');
        header.style.backgroundColor = "#8435F2";
        for(let i=0; i<fontHeader.length; i++){
            fontHeader[i].style.color = "#f1f1f1";  
        }
    }
});

// JavaScript Document
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });


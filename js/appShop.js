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

//Load the carousel with JSON
document.addEventListener('DOMContentLoaded', ()=>{
    var carousel_json = document.getElementById('carousel_json');

    var carousel = document.createElement('div');
    carousel.setAttribute('class', 'carousel');

    var buttonPrev = document.createElement('a');
    buttonPrev.setAttribute('class', 'prev');

    var iconPrev = document.createElement('i');
    iconPrev.setAttribute('class', 'fas fa-chevron-left');
    buttonPrev.appendChild(iconPrev);

    var buttonNext = document.createElement('a');
    buttonNext.setAttribute('class', 'next');

    var iconNext = document.createElement('i');
    iconNext.setAttribute('class', 'fas fa-chevron-right');
    buttonNext.appendChild(iconNext);

    carousel_json.appendChild(buttonPrev);

    fetch("/json/carousel_shop.json").then(function(el){
        el.json().then(function(json){
            for(let i=0; i<json.length; i++){
                var div_image = document.createElement('div');
                div_image.setAttribute('class', 'item '+i);

                var image = document.createElement('img');
                image.setAttribute('src', json[i].url);
                image.setAttribute('alt', json[i].alt);

                var caption = document.createElement('h2');
                caption.textContent = json[i].name;

                div_image.appendChild(image);
                div_image.appendChild(caption);

                carousel.appendChild(div_image);
            }
            carousel_json.appendChild(carousel);
            carousel_json.appendChild(buttonNext);
            setupCarousel(json);
        });
    });
    function setupCarousel(json){
        var imageWidth = 500;

        buttonNext.addEventListener('click', ()=>{
            for(let i=0; i<json.length; i++){
                allImages[i].style.transform = 'translateX('+imageWidth+');'
            }
        });
        
        buttonPrev.addEventListener('click', ()=>{

        });
    };
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
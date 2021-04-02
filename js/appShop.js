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
//Inspired from Peter Butcher's code for the loading
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
                div_image.setAttribute('class', 'item toMove');

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

    //Function that anim the carousel (a little with JQUERY)
    //I prefer to use these images to illustrate my site, 
    //represent things that we can buy instead of my gallery
    //(but it is the same code with the 9 other images) 
    //I realised that from scratch
    function setupCarousel(json){
        var size_move = 0;

        buttonNext.addEventListener('click', ()=>{
            size_move-=700;
            for(let i=0; i<$('.toMove').length; i++){
                if(size_move<-1400){
                    size_move = 1400;
                    $('.toMove')[i].style.transform = "translateX("+size_move+"px)";
                }else{
                    $('.toMove')[i].style.transform = "translateX("+size_move+"px)";
                }
            }
        });
        
        buttonPrev.addEventListener('click', ()=>{
            size_move+=700;
            console.log(size_move);
            for(let i=0; i<$('.toMove').length; i++){
                if(size_move>1400){
                    size_move = -1400;
                    $('.toMove')[i].style.transform = "translateX("+size_move+"px)";
                }else{
                    $('.toMove')[i].style.transform = "translateX("+size_move+"px)";
                }
            }
        });
    };
});

//JavaScript Document
//From : https://github.com/sachinchoolur/lightslider
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
});
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
    var carousel_shop = document.getElementById('carousel_shop');

    var carousel = document.createElement('div');
    carousel.setAttribute('class', 'carousel');

    var listForQuery = document.createElement('ul');
    listForQuery.setAttribute('id', 'autoWidth');
    listForQuery.setAttribute('class', 'cs-hidden');

    fetch("/json/carousel_shop.json").then(function(el){
        el.json().then(function(json){
            for(let i=0; i<json.length; i++){
                var list = document.createElement('li');
                list.setAttribute('class', 'item-a');

                var card = document.createElement('div');
                card.setAttribute('class', 'card');

                var illustration = document.createElement('img');
                illustration.setAttribute('src', json[i].url);
                illustration.setAttribute('alt', json[i].alt);

                var description = document.createElement('h2');
                description.textContent = json[i].description;

                var price = document.createElement('h1');
                price.textContent = json[i].price;

                var command = document.createElement('button');
                command.textContent = "Command";

                card.appendChild(illustration);
                card.appendChild(description);
                card.appendChild(price);
                card.appendChild(command);

                list.appendChild(card);

                listForQuery.appendChild(list);
            }
            carousel.appendChild(listForQuery);
            carousel_shop.appendChild(carousel);
        });
    });
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
function isEmpty(){
    var length = 5;
    var bool = true;
    var value = document.forms['form'];
    var array = new Array();

    //Initialisation of the color
    for(let i=0; i<length; i++){
        value[i].style.borderColor = "#8435F2";
    }

    //Variation of the boolean
    for(let i=0; i<length; i++){
        if(value[i].value == ""){
            bool = false;
            array.push(i);
        }
    }

    //If boolean false, change the color
    if(bool == false){
        document.querySelector('.submit').style.backgroundColor = "red";
        document.querySelector('.submit').style.color = "white";
        document.querySelector('.submit').style.borderColor = "red";
        for(let i=0; i<array.length; i++){
            value[array[i]].style.borderColor = "red";
        }
    }
    return bool;
}
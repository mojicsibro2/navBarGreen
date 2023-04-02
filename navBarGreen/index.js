

function myFun(){
    var menu = document.querySelector('.menu-bar');
    menu.style.display = "inline-flex";
    var menu = document.querySelector('#menu');
    menu.style.display = "none";
    var menu = document.querySelector('#menuClear');
    menu.style.display = "flex";

};
menu.addEventListener('click',myFun);


function myFunc(){
    var menu = document.querySelector('.menu-bar');
    menu.style.display = "none";
    var menu = document.querySelector('#menuClear');
    menu.style.display = "none";
    var menu = document.querySelector('#menu');
    menu.style.display = "flex";
}
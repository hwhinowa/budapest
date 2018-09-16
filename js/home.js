// 'use strict';

let intro = document.getElementById('intro');
let header = document.getElementsByTagName('header')[0];
let menu_box = document.getElementsByClassName('header_wrap')[0];
let typing = document.getElementsByClassName('typing')[0];

intro.onended = function(){
    intro.classList.add('fade_hide');
    setTimeout(function(){
        show();
    },500);
}

function show(){
    intro.style.display = 'none';
    header.classList.add('show');
    menu_box.classList.add('show');
}
// 'use strict';

let intro_box = document.querySelector('.video_wrap');
let intro = document.querySelector('#intro');
let header = document.querySelector('header');
let section = document.querySelector('section');
let menu_box = document.querySelector('.header_wrap');
let typing = document.querySelector('.typing');

intro.onended = function(){
    intro_box.classList.add('fade_hide');
    setTimeout(function(){
        show();
    });
}

function show(){
    intro_box.style.display = 'none';
    section.classList.add('active');
    header.classList.add('show');
    menu_box.classList.add('show');
}
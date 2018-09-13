'use strict';

let intro = document.getElementById('intro');
intro.onended = function(){
    intro.classList.add('fade_hide');
    setTimeout(function(){
        intro.style.display = 'none';
    },6000);
}
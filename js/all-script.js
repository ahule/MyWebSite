let menu_btn = document.getElementById('menu-btn');
let menu = document.getElementById('menu');
let tel= document.getElementById('tel');
let tel_div = document.getElementById('tel-div');

menu_btn.onclick = function() {
    let computedStyle = window.getComputedStyle(menu);
    let currentDisplay = computedStyle.display;

    if(currentDisplay === 'block'){
        menu.style.display = 'none';
    }else{
        menu.style.display = 'block';
    }
};

window.onscroll = function() {
    if (window.scrollY > 300) {
        tel_div.style.display = 'block';
    } else {
        tel_div.style.display = 'none';
    }
};

tel.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
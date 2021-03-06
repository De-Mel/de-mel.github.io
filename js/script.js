let open = document.querySelector('.nav-button');
let close = document.querySelector('.nav-button-close');

open.onclick = function() {
    open.classList.toggle('button-open');
    close.classList.toggle('close-button');
};

close.onclick = function() {
    open.classList.toggle('button-open');
    close.classList.toggle('close-button');
};

// function openNav() {
//     document.getElementById('myNav').style.width = "100%";
//     document.getElementById("myNav").style.display = "block";
// }
  
// function closeNav() {
//     // document.getElementById('myNav').style.width = "0";
//     document.getElementById("myNav").style.display = "none";
// }
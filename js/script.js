let menu = document.querySelector('.nav-button');

menu.onclick = function() {
    menu.classList.toggle('button-open');
    menu.classList.toggle('button-close');
};

// function openNav() {
//     document.getElementById('myNav').style.width = "100%";
//     document.getElementById("myNav").style.display = "block";
// }
  
// function closeNav() {
//     // document.getElementById('myNav').style.width = "0";
//     document.getElementById("myNav").style.display = "none";
// }
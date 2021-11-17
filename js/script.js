let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    
    navbar.classList.remove('active');
}
document.querySelectorAll('.accordion_button').forEach(button => {
    button.addEventListener('click', () => {
       
        button.classList.toggle('accordion_button-active');

    });
    
});
var underlineMenuItems = document.querySelectorAll("li");
underlineMenuItems[0].classList.add("active");
underlineMenuItems.forEach(function (item) {
    item.addEventListener("click", function () {
        underlineMenuItems.forEach(function (item) { return item.classList.remove("active"); });
        item.classList.add("active");
    });
});
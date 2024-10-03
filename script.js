const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {  
    nav.classList.toggle('open');
});

let checkboxes = document.querySelectorAll(".tooltip")

for (let i=0; i<checkboxes.length; i++){
    let currenttooltip = checkboxes[i];
    let tooltiptext = currenttooltip.querySelector(".tooltiptext")

    currenttooltip.addEventListener("mouseenter", function(){
    tooltiptext.style.visibility = "visible";
    
    })
    currenttooltip.addEventListener("mouseleave", function(){
        tooltiptext.style.visibility = "collapse";
        
        })
}
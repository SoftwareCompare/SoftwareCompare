const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {  
    nav.classList.toggle('open');
});

let checkboxes = document.querySelectorAll(".checker_row div")

for (let i=0; i<checkboxes.length; i++){
    let currenttooltip = checkboxes[i];
    let tooltiptext = currenttooltip.querySelector(".checker_row pre");

    currenttooltip.addEventListener("mouseenter", function(){
    tooltiptext.style.visibility = "visible";
    
    })
    currenttooltip.addEventListener("mouseleave", function(){
        tooltiptext.style.visibility = "collapse";
        
        })
}
for (let i = 0; i < checkboxes.length; i++) {
    let currentTooltip = checkboxes[i];
    let tooltipText = currentTooltip.querySelector(".checker_row pre");
  
    currentTooltip.addEventListener("touchstart", function() {
      tooltipText.style.visibility = "visible";
    });
  
    document.addEventListener("touchstart", function(event) {
      if (!currentTooltip.contains(event.target)) {
        tooltipText.style.visibility = "hidden";
      }
    });
  }
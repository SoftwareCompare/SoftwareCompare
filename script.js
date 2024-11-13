const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {  
    nav.classList.toggle('open');
});

let checkboxes = document.querySelectorAll(".checker_row div")

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
  // Get the toggle button
const darkModeToggle = document.getElementById('dark-mode-toggle');


// Function to enable dark mode
function enableDarkMode() {
    document.body.style.backgroundColor = '#181a1b';
    document.body.style.color = 'rgb(208, 208, 208)';
    document.body.style.backgroundColor = '#181a1b';
    document.body.style.color = 'rgb(208, 208, 208)';

    // Update links
    document.querySelectorAll('a').forEach(a => {
        a.style.color = 'rgb(208, 208, 208)';
    });
    
    // Update header
    const header = document.querySelector('header');
    if (header) {
        header.style.backgroundImage = 'linear-gradient(to bottom, #181a1b, #2f3435)';
    }
    
    // Update table styles
    document.querySelectorAll('thead').forEach(thead => {
        thead.style.backgroundColor = '#181a1b';
    });
    
    document.querySelectorAll('tbody .checker_row:nth-child(even)').forEach(row => {
        row.style.backgroundColor = '#323536';
    });
    
    document.querySelectorAll('.checker_row div').forEach(div => {
        div.style.borderBottom = '1px dotted rgb(255, 255, 255)';
    });
    
    document.querySelectorAll('.checker_row th a').forEach(a => {
        a.style.borderBottom = '1px solid rgb(45, 87, 255)';
    });
    
    // Update images
    document.querySelectorAll('.inner-header img, .invert').forEach(img => {
        img.style.filter = 'invert(100%) grayscale(50%) sepia(25%)';
    });
    
    // Update comparison boxes
    document.querySelectorAll('.comparison-box').forEach(box => {
        box.style.backgroundImage = 'linear-gradient(to bottom, #676868, #2e2e2e)';
    });

    localStorage.setItem('theme', 'dark');
}

// Function to enable light mode
function enableLightMode() {
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#000000';

    // Reset links
    document.querySelectorAll('a').forEach(a => {
        a.style.color = '#000000';
    });
    
    // Reset header
    const header = document.querySelector('header');
    if (header) {
        header.style.backgroundImage = 'linear-gradient(to bottom, #ffffff, #f1f1f1)';
    }

    // Reset table styles
    document.querySelectorAll('thead').forEach(thead => {
        thead.style.backgroundColor = '#ffffff';
    });
    
    document.querySelectorAll('tbody .checker_row:nth-child(even)').forEach(row => {
        row.style.backgroundColor = '#f1f1f1';
    });
    
    document.querySelectorAll('.checker_row div').forEach(div => {
        div.style.borderBottom = '1px dotted #000000';
    });
    
    document.querySelectorAll('.checker_row th a').forEach(a => {
        a.style.borderBottom = '1px solid #0000ff';
    });
    
    // Reset images
    document.querySelectorAll('.inner-header img, .invert').forEach(img => {
        img.style.filter = 'none';
    });
    
    // Reset comparison boxes
    document.querySelectorAll('.comparison-box').forEach(box => {
        box.style.backgroundImage = 'linear-gradient(to bottom, #efefff, #ffffff)';
    });

    document.querySelectorAll('.comparison-box:hover').forEach(box => {
      box.style.backgroundImage = 'linear-gradient(to bottom, #c8c8ff, #e8e8ff)';
    });

    localStorage.setItem('theme', 'light');
}

// Check for saved theme preference or system preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    enableDarkMode();
} else if (savedTheme === 'light') {
    enableLightMode();
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    enableDarkMode();
}

// Add click event listener to toggle button
darkModeToggle.addEventListener('click', () => {
    if (localStorage.getItem('theme') === 'dark') {
        enableLightMode();
    } else {
        enableDarkMode();
    }
});

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
        if (e.matches) {
            enableDarkMode();
        } else {
            enableLightMode();
        }
    }
});
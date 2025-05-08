const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {  
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
  document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const root = document.documentElement;

    // Function to set theme
    const setTheme = (theme) => {
        if (theme === 'dark') {
            root.classList.add('dark-mode');
        } else {
            root.classList.remove('dark-mode');
        }
        localStorage.setItem('theme', theme);
    };

    // Initialize button text based on current theme
    const currentTheme = localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(currentTheme);

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        const newTheme = root.classList.contains('dark-mode') ? 'light' : 'dark';
        setTheme(newTheme);
    });

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('js-enabled');
    
    const chartListButton = document.querySelector('.Chart-list button');
    const chartListDiv = document.querySelector('.Chart-list div');
    
    // Toggle menu on button click
    chartListButton.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      chartListDiv.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!chartListDiv.contains(event.target) && !chartListButton.contains(event.target)) {
        chartListDiv.classList.remove('active');
      }
    });

    document.addEventListener('scroll', () => {
      chartListDiv.classList.remove('active');
    });
  });


  function addDragIconsToTable() {
    const tables = document.querySelectorAll('table');

    tables.forEach(table => {
      const thead = table.querySelector('thead');
      if (!thead || !thead.rows.length) return;
      
      const colCount = thead.rows[0].cells.length;
      const newRow = document.createElement('tr');
      
      for (let i = 0; i < colCount; i++) {
        const newCell = document.createElement('td');
        if (i == 0) {
          newCell.innerHTML = 'Manage';
        } 
        else { // hide manage button if no applications are hidden
          const dragIcon = document.createElement('div');
          newCell.innerHTML = 'X';
        }
        newRow.appendChild(newCell);
      }
      const newThead = document.createElement('thead');
      newThead.appendChild(newRow);

      table.insertBefore(newThead, thead);
    });
  }

  document.addEventListener('DOMContentLoaded', addDragIconsToTable);
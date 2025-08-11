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

  // function handleDragStart(e) {
  //   // Store the column index being dragged
  //   draggedColumn = parseInt(e.target.dataset.columnIndex);
  //   e.target.classList.add('dragging');
    
  //   activeTable = e.target.closest('table');

  //   // Set data for drag operation
  //   e.dataTransfer.effectAllowed = 'move';
  //   e.dataTransfer.setData('text/plain', draggedColumn);
    
  //   // Add visual indication to the entire column
  //   highlightColumn(activeTable, draggedColumn, 'dragging-column');
  // }

  // function addDragIconsToTable() {
  //   const tables = document.querySelectorAll('table');
  
  //   tables.forEach(table => {
  //     const thead = table.querySelector('thead');
  //     if (!thead || !thead.rows.length) return;
      
  //     const colCount = thead.rows[0].cells.length;
  //     const newRow = document.createElement('tr');
  //     newRow.classList.add('drag-header-row');
      
  //     for (let i = 0; i < colCount; i++) {
  //       const newCell = document.createElement('td');
        
  //       if (i === 0) {
  //         // First column - no drag functionality
  //         newCell.innerHTML = 'Manage';
  //         newCell.classList.add('no-drag');
  //       } else {
  //         // Add drag handle for other columns
  //         const dragHandle = document.createElement('div');
  //         dragHandle.innerHTML = '☰'; // Hamburger icon as drag handle
  //         dragHandle.classList.add('drag-handle');
  //         dragHandle.setAttribute('draggable', 'true');
  //         dragHandle.dataset.columnIndex = i;
  //         dragHandle.dataset.tableId = 'table-' + Date.now() + '-' + i;
  //         table.dataset.tableId = dragHandle.dataset.tableId;
          
  //         // Add event listeners for drag operations
  //         dragHandle.addEventListener('dragstart', handleDragStart);
          
  //         newCell.appendChild(dragHandle);
  //       }
        
  //       newRow.appendChild(newCell);
  //     }
      
  //     // Create a new thead element
  //     const newThead = document.createElement('thead');
  //     newThead.appendChild(newRow);
      
  //     // Insert the new thead before the existing thead
  //     table.insertBefore(newThead, thead);
      
  //     // Add CSS for the drag controls
  //     addDragStyles();
  //   });

  //   document.addEventListener('dragover', handleGlobalDragOver);
  //   document.addEventListener('drop', handleGlobalDrop);
  //   document.addEventListener('dragend', handleGlobalDragEnd);
  // }
  
  // // Global variables to track drag state
  // let activeTable = null;
  // let lastMouseX = 0;

  // function updateColumnPositions(table, draggedIndex, hoverIndex, mouseX) {
  //   if (!table || draggedIndex === hoverIndex) return;
    
  //   // Save original positions if not already saved
  //   if (Object.keys(originalPositions).length === 0) {
  //     saveOriginalPositions(table);
  //   }
    
  //   const rows = table.querySelectorAll('tr');
    
  //   // Get the cells for position calculation
  //   const firstRow = rows[0];
  //   if (firstRow.cells.length <= Math.max(draggedIndex, hoverIndex)) return;
    
  //   const draggedRect = firstRow.cells[draggedIndex].getBoundingClientRect();
  //   const hoverRect = firstRow.cells[hoverIndex].getBoundingClientRect();
    
  //   // Calculate direction of movement
  //   const movingRight = draggedIndex < hoverIndex;
    
  //   // Apply transition class to all cells if not already applied
  //   rows.forEach(row => {
  //     Array.from(row.cells).forEach(cell => {
  //       if (!cell.classList.contains('table-cell-transition')) {
  //         cell.classList.add('table-cell-transition');
  //       }
  //     });
  //   });
    
  //   // Apply transforms based on drag position
  //   rows.forEach(row => {
  //     if (row.cells.length <= Math.max(draggedIndex, hoverIndex)) return;
      
  //     // Get difference from mouse position to determine intermediate positions
  //     const mousePosition = mouseX;
  //     const dragCellCenter = draggedRect.left + (draggedRect.width / 2);
  //     const hoverCellCenter = hoverRect.left + (hoverRect.width / 2);
      
  //     // Calculate how far along the drag is between the columns
  //     let dragProgress = (mousePosition - dragCellCenter) / (hoverCellCenter - dragCellCenter);
  //     dragProgress = Math.max(0, Math.min(1, dragProgress)); // Clamp between 0 and 1
      
  //     // Apply transforms to all affected columns
  //     for (let i = 0; i < row.cells.length; i++) {
  //       const cell = row.cells[i];
  //       let transform = 'translateX(0)';
        
  //       // Skip the first column
  //       if (i === 0) continue;
        
  //       if (i === draggedIndex) {
  //         // The dragged column moves toward the hover position
  //         const moveDistance = (hoverIndex - draggedIndex) * draggedRect.width * dragProgress;
  //         transform = `translateX(${moveDistance}px)`;
  //       } 
  //       else if ((movingRight && i > draggedIndex && i <= hoverIndex) || 
  //               (!movingRight && i < draggedIndex && i >= hoverIndex)) {
  //         // Columns between dragged and hover move in opposite direction
  //         const moveDistance = movingRight ? -draggedRect.width : draggedRect.width;
  //         // Scale the movement based on how close the mouse is
  //         const scaledMove = moveDistance * dragProgress;
  //         transform = `translateX(${scaledMove}px)`;
  //       }
        
  //       cell.style.transform = transform;
  //     }
  //   });
  // }

  // function handleGlobalDragOver(e) { // If statement is causing a problem by only processing 
  //   if (e.preventDefault) {
  //     e.preventDefault();
  //   }
  //   e.dataTransfer.dropEffect = 'move';
    
  //   // Update last known mouse position
  //   lastMouseX = e.clientX;
    
  //   // If we're dragging a column and have the active table
  //   if (draggedColumn !== null && activeTable) {
  //     // Find a suitable target column based on horizontal position
  //     const rect = activeTable.getBoundingClientRect();
  //     const tableX = rect.left;
  //     const tableWidth = rect.width;
      
  //     // Only process if mouse is horizontally within table bounds
  //     if (e.clientX >= tableX && e.clientX <= tableX + tableWidth) {
  //       // Find column under current mouse position
  //       const firstRow = activeTable.rows[0];
  //       let targetColumn = null;
        
  //       // Find which column we're hovering over based on mouse position
  //       for (let i = 1; i < firstRow.cells.length; i++) {
  //         const cellRect = firstRow.cells[i].getBoundingClientRect();
  //         if (e.clientX >= cellRect.left && e.clientX <= cellRect.right) {
  //           targetColumn = i;
  //           break;
  //         }
  //       }
        
  //       // If we found a target column and it's different from the dragged column
  //       if (targetColumn && targetColumn > 0 && targetColumn !== draggedColumn) {
  //         updateColumnPositions(activeTable, draggedColumn, targetColumn, e.clientX);
  //       }
  //     }
  //   }
    
  //   return false;
  // }

  // function handleGlobalDrop(e) {
  //   if (!draggedColumn || !activeTable) return;
    
  //   e.preventDefault();
  //   e.stopPropagation();
    
  //   // Reset all column positions
  //   resetColumnPositions(activeTable);
    
  //   // Remove highlight from dragged column
  //   removeColumnHighlight(activeTable, draggedColumn, 'dragging-column');
    
  //   // Find which column we dropped on based on mouse position
  //   const firstRow = activeTable.rows[0];
  //   let targetColumnIndex = null;
    
  //   for (let i = 1; i < firstRow.cells.length; i++) {
  //     const cellRect = firstRow.cells[i].getBoundingClientRect();
  //     if (e.clientX >= cellRect.left && e.clientX <= cellRect.right) {
  //       targetColumnIndex = i;
  //       break;
  //     }
  //   }
    
  //   // Only process if we have a valid target column
  //   if (targetColumnIndex && draggedColumn !== null && targetColumnIndex !== draggedColumn && draggedColumn > 0 && targetColumnIndex > 0) {
  //     // Swap columns in all rows
  //     const rows = activeTable.querySelectorAll('tr');
  //     rows.forEach(row => {
  //       if (row.cells.length <= Math.max(draggedColumn, targetColumnIndex)) return;
        
  //       const draggedCellContent = row.cells[draggedColumn].innerHTML;
  //       const targetCellContent = row.cells[targetColumnIndex].innerHTML;
        
  //       row.cells[draggedColumn].innerHTML = targetCellContent;
  //       row.cells[targetColumnIndex].innerHTML = draggedCellContent;
        
  //       if (row.classList.contains('drag-header-row')) {
  //         const draggedHandle = row.cells[draggedColumn].querySelector('.drag-handle');
  //         const targetHandle = row.cells[targetColumnIndex].querySelector('.drag-handle');
          
  //         if (draggedHandle && targetHandle) {
  //           draggedHandle.dataset.columnIndex = targetColumnIndex;
  //           targetHandle.dataset.columnIndex = draggedColumn;
  //         }
  //       }
  //     });
  //   }
    
  //   return false;
  // }

  // function handleGlobalDragEnd(e) {
  //   if (!activeTable) return;
    
  //   // Remove dragging classes
  //   const handles = activeTable.querySelectorAll('.drag-handle.dragging');
  //   handles.forEach(handle => handle.classList.remove('dragging'));
    
  //   // Reset column styles
  //   if (draggedColumn) {
  //     removeColumnHighlight(activeTable, draggedColumn, 'dragging-column');
  //     resetColumnPositions(activeTable);
  //   }
    
  //   // Reset drag state
  //   draggedColumn = null;
  //   activeTable = null;
  // }

  // // Track the column being dragged
  // let draggedColumn = null;
  // let originalPositions = {};
  
  // function handleDragOver(e) {
  //   if (e.preventDefault) {
  //     e.preventDefault(); // Necessary to allow dropping
  //   }
  //   e.dataTransfer.dropEffect = 'move';
    
  //   // Get the target column if we're over a drag handle
  //   const targetElement = e.target.closest('td')?.querySelector('.drag-handle') || e.target;
  //   if (targetElement.classList.contains('drag-handle')) {
  //     const targetColumnIndex = parseInt(targetElement.dataset.columnIndex);
  //     if (targetColumnIndex > 0 && targetColumnIndex !== draggedColumn) {
  //       updateColumnPositions(e.target.closest('table'), draggedColumn, targetColumnIndex, e.clientX);
  //     }
  //   }
    
  //   return false;
  // }
  
  // function handleDrop(e) {
  //   e.stopPropagation();
  //   e.preventDefault();
    
  //   // Get the table
  //   const table = e.target.closest('table');
    
  //   // First reset all column positions
  //   resetColumnPositions(table);
    
  //   // Remove highlight from dragged column
  //   removeColumnHighlight(table, draggedColumn, 'dragging-column');
    
  //   // Get target column index
  //   let targetElement = e.target;
  //   if (!targetElement.classList.contains('drag-handle')) {
  //     targetElement = targetElement.closest('td')?.querySelector('.drag-handle');
  //   }
    
  //   const targetColumnIndex = targetElement ? parseInt(targetElement.dataset.columnIndex) : null;
    
  //   // Only process if we dropped on another drag handle and not on the first column
  //   if (targetColumnIndex && draggedColumn !== null && targetColumnIndex !== draggedColumn && draggedColumn > 0 && targetColumnIndex > 0) {
  //     // Swap columns in all rows
  //     const rows = table.querySelectorAll('tr');
  //     rows.forEach(row => {
  //       // Skip the row if it doesn't have enough cells
  //       if (row.cells.length <= Math.max(draggedColumn, targetColumnIndex)) return;
        
  //       // Store the cell contents
  //       const draggedCellContent = row.cells[draggedColumn].innerHTML;
  //       const targetCellContent = row.cells[targetColumnIndex].innerHTML;
        
  //       // Swap the cell contents
  //       row.cells[draggedColumn].innerHTML = targetCellContent;
  //       row.cells[targetColumnIndex].innerHTML = draggedCellContent;
        
  //       // If this is the drag header row, also swap the column indices
  //       if (row.classList.contains('drag-header-row')) {
  //         const draggedHandle = row.cells[draggedColumn].querySelector('.drag-handle');
  //         const targetHandle = row.cells[targetColumnIndex].querySelector('.drag-handle');
          
  //         if (draggedHandle && targetHandle) {
  //           draggedHandle.dataset.columnIndex = targetColumnIndex;
  //           targetHandle.dataset.columnIndex = draggedColumn;
  //         }
  //       }
  //     });
  //   }
    
  //   return false;
  // }
  
  // function handleDragEnd() {
  //   // Remove dragging class
  //   this.classList.remove('dragging');
    
  //   // Get table before resetting draggedColumn
  //   const table = this.closest('table');
    
  //   // Reset dragged column styles
  //   removeColumnHighlight(table, draggedColumn, 'dragging-column');
    
  //   // Reset all column positions
  //   resetColumnPositions(table);
    
  //   draggedColumn = null;
  // }
  
  // function addDragStyles() {
  //   // Check if styles already exist
  //   if (document.getElementById('drag-column-styles')) return;
    
  //   const styleElement = document.createElement('style');
  //   styleElement.id = 'drag-column-styles';
  //   styleElement.textContent = `
  //     .drag-header-row td {
  //       text-align: center;
  //       padding: 8px;
  //     }
  //     .drag-handle {
  //       cursor: grab;
  //       user-select: none;
  //       padding: 2px 6px 0rem 6px;
  //       display: inline-block;
  //       background-color:rgba(138, 138, 138, 0.16);
  //       border-radius: 4px;
  //     }
  //     .drag-handle:hover {
  //       background-color:rgba(132, 132, 132, 0.56); #good
  //     }
  //     .drag-handle.dragging {
  //       opacity: 0.5;
  //       cursor: grabbing;
  //     }
  //     .no-drag {
  //       user-select: none;
  //     }
  //     .dragging-column {
  //       background-color:rgba(88, 174, 255, 0.66);
  //       opacity: 0.8;
  //     }
  //     .table-cell-transition {
  //       transition: transform 0.1s ease-out;
  //     }
  //   `;
    
  //   document.head.appendChild(styleElement);
  // }
  
  // // Functions to handle visual movement of columns
  // function highlightColumn(table, columnIndex, className) {
  //   if (!table || !columnIndex) return;
    
  //   const rows = table.querySelectorAll('tr');
  //   rows.forEach(row => {
  //     if (row.cells.length > columnIndex) {
  //       row.cells[columnIndex].classList.add(className);
  //     }
  //   });
  // }
  
  // function removeColumnHighlight(table, columnIndex, className) {
  //   if (!table || !columnIndex) return;
    
  //   const rows = table.querySelectorAll('tr');
  //   rows.forEach(row => {
  //     if (row.cells.length > columnIndex) {
  //       row.cells[columnIndex].classList.remove(className);
  //     }
  //   });
  // }
  
  // function saveOriginalPositions(table) {
  //   const rows = table.querySelectorAll('tr');
  //   originalPositions = {};
    
  //   rows.forEach((row, rowIndex) => {
  //     originalPositions[rowIndex] = {};
  //     Array.from(row.cells).forEach((cell, cellIndex) => {
  //       originalPositions[rowIndex][cellIndex] = {
  //         transform: cell.style.transform || 'translateX(0)'
  //       };
  //     });
  //   });
  // }
  
  // function resetColumnPositions(table) {
  //   const rows = table.querySelectorAll('tr');
    
  //   rows.forEach(row => {
  //     Array.from(row.cells).forEach(cell => {
  //       cell.style.transform = 'translateX(0)';
  //     });
  //   });
    
  //   // Reset saved positions
  //   originalPositions = {};
  // }
  
  // document.addEventListener('DOMContentLoaded', addDragIconsToTable);
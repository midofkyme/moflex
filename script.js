const slider = document.querySelector('.card-slider');
let scrollInterval;

function autoScroll() {
  slider.scrollLeft += 200; // Adjust scroll amount as needed

  // Check if we've reached the end and need to loop
  if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
    slider.scrollLeft = 0;
    const firstCard = slider.firstElementChild.cloneNode(true);
    slider.appendChild(firstCard);
  }
}

function startAutoScroll() {
  scrollInterval = setInterval(autoScroll, 3000); // Adjust interval time as needed
}

// Start auto-scrolling when the page loads
window.addEventListener('load', startAutoScroll);

// CSS for smooth scrolling
slider.style.scrollBehavior = 'smooth';



function cloneDiv(sourceDivId, targetDivId) {
    const sourceDiv = document.getElementById(sourceDivId);
    const targetDiv = document.getElementById(targetDivId);
  
    // Check if the source div already exists in the target div
    const existingDivs = targetDiv.querySelectorAll(`#${sourceDivId}`);
    if (existingDivs.length > 0) {
      return; // If it exists, don't clone
    }
  
    const cloneDiv = sourceDiv.cloneNode(true);
    targetDiv.appendChild(cloneDiv);

      // Add a delete button to the cloned div
  const deleteButton = document.createElement('button');
  deleteButton.className = "delete-button";
  deleteButton.textContent = 'Delete From Favourites';
  deleteButton.addEventListener('click', function()   
 {
    cloneDiv.remove();
    // Remove the corresponding content from local storage (optional)
    const clonedDivs = JSON.parse(localStorage.getItem('clonedDivs')) || [];
    const index = clonedDivs.indexOf(cloneDiv.innerHTML);
    if (index !== -1) {
      clonedDivs.splice(index, 1);
      localStorage.setItem('clonedDivs', JSON.stringify(clonedDivs));
    }
  });
  cloneDiv.appendChild(deleteButton);
  
    // Store the cloned div content in local storage as part of an array
    const clonedDivContent = cloneDiv.innerHTML;
    let clonedDivs = JSON.parse(localStorage.getItem('clonedDivs')) || [];
    clonedDivs.push(clonedDivContent);
    localStorage.setItem('clonedDivs', JSON.stringify(clonedDivs));
  }
  
  // Function to load cloned divs from local storage
  function loadClonedDivs(targetDivId) {
    const targetDiv = document.getElementById(targetDivId);
    const clonedDivs = JSON.parse(localStorage.getItem('clonedDivs')) || [];
  
    clonedDivs.forEach(divContent => {
      const newDiv = document.createElement('div');
      newDiv.innerHTML = divContent;
      targetDiv.appendChild(newDiv);
    });
  }
  
  // Example usage:
  document.getElementById("movBtn1").addEventListener("click", function() {
    cloneDiv("mov1", "fav");
  });
  
  document.getElementById("movBtn2").addEventListener("click", function() {
    cloneDiv("mov2", "fav");
  });

  document.getElementById("movBtn3").addEventListener("click", function() {
    cloneDiv("mov3", "fav");
  });

  document.getElementById("movBtn4").addEventListener("click", function() {
    cloneDiv("mov4", "fav");
  });

  document.getElementById("movBtn5").addEventListener("click", function() {
    cloneDiv("mov5", "fav");
  });

  document.getElementById("movBtn6").addEventListener("click", function() {
    cloneDiv("mov6", "fav");
  });

  document.getElementById("movBtn7").addEventListener("click", function() {
    cloneDiv("mov7", "fav");
  });

  document.getElementById("movBtn8").addEventListener("click", function() {
    cloneDiv("mov8", "fav");
  });

  document.getElementById("movBtn9").addEventListener("click", function() {
    cloneDiv("mov9", "fav");
  });

  document.getElementById("movBtn10").addEventListener("click", function() {
    cloneDiv("mov10", "fav");
  });

  document.getElementById("movBtn11").addEventListener("click", function() {
    cloneDiv("mov11", "fav");
  });

  document.getElementById("movBtn12").addEventListener("click", function() {
    cloneDiv("mov12", "fav");
  });

  document.getElementById("movBtn13").addEventListener("click", function() {
    cloneDiv("mov13", "fav");
  });

  document.getElementById("movBtn14").addEventListener("click", function() {
    cloneDiv("mov14", "fav");
  });

  document.getElementById("movBtn15").addEventListener("click", function() {
    cloneDiv("mov15", "fav");
  });

  document.getElementById("movBtn16").addEventListener("click", function() {
    cloneDiv("mov16", "fav");
  });

  document.getElementById("movBtn17").addEventListener("click", function() {
    cloneDiv("mov17", "fav");
  });

  document.getElementById("movBtn18").addEventListener("click", function() {
    cloneDiv("mov18", "fav");
  });

  document.getElementById("movBtn19").addEventListener("click", function() {
    cloneDiv("mov19", "fav");
  });

  document.getElementById("movBtn20").addEventListener("click", function() {
    cloneDiv("mov20", "fav");
  });
  
  // Load cloned divs on page load
  window.onload = function() {
    loadClonedDivs("fav");
  };


  const buttons = document.querySelectorAll('.watchBtn');

  buttons.forEach(button => {
    const iconElement = button.querySelector('i');
    const buttonId = button.id; // Get the button's ID
  
    let iconState = 'fa-solid fa-eye-slash'; // Initial icon state
  
    button.addEventListener('click', () => {
      if (iconState === 'fa-solid fa-eye-slash') {
        iconState = 'fa-solid fa-eye';
      } else {
        iconState = 'fa-solid fa-eye-slash';
      }
  
      iconElement.className = iconState;
  
      // Store the state for each button individually, using its ID as a key
      localStorage.setItem(`iconState_${buttonId}`, iconState);
    });
  
    // Load the last state from local storage for each button
    const savedState = localStorage.getItem(`iconState_${buttonId}`);
    if (savedState) {
      iconState = savedState;
      iconElement.className = iconState;
    }
  });






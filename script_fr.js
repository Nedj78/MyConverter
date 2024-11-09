// Ensure the DOM is fully loaded before running any script
document.addEventListener('DOMContentLoaded', () => {
  // Set up event listeners for conversion buttons
  document.getElementById("convertBtn").addEventListener('click', convert1);
  document.getElementById("convert2Btn").addEventListener('click', convert2);
  document.getElementById("convert3Btn").addEventListener('click', convert3);
  document.getElementById("convert3WorkdaysBtn").addEventListener('click', convert3Workdays);
  document.getElementById("convert4Btn").addEventListener('click', convert4);
  document.getElementById("convert4WorkDaysBtn").addEventListener('click', convert4WorkDays);
  document.getElementById("convert5Btn").addEventListener('click', convert5);
  document.getElementById("convert6Btn").addEventListener('click', convert6);

  // Adding keydown listeners for the input fields
  const inputs = document.querySelectorAll("#hours1, #minutes1, #minutes2, #hours3, #hours3-bis, #days4, #days4-bis, #hours5, #hours6");

  // Attach an event listener to each input field
  inputs.forEach(input => {
      input.addEventListener('keydown', function(event) {
          // Trigger conversion on Enter key
          if (event.key === "Enter") {
              event.preventDefault();
              const buttonId = input.getAttribute('data-convert-btn');
              if (buttonId) {
                  document.getElementById(buttonId).click();
              }
          }
      });
  });
});

// Conversion functions

// Convert hours and minutes to total minutes
function convert1() {
  const hours1 = Number(document.getElementById("hours1").value);
  const minutes1 = Number(document.getElementById("minutes1").value);

  if (hours1 === 0 && minutes1 === 0) {
    alert("Veuillez saisir un nombre.");
    return;
  }

  const totalMinutes = hours1 * 60 + minutes1;
  document.getElementById("result1").textContent = `${hours1} heure(s) et ${minutes1} minute(s) correspond(ent) à ${totalMinutes} minute(s).`;

  // Clear input fields
  document.getElementById("hours1").value = '';
  document.getElementById("minutes1").value = '';
}

// Convert minutes to hours et remaining minutes
function convert2() {
  const minutes2 = Number(document.getElementById("minutes2").value);
  if (minutes2 === 0) {
    alert("Veuillez saisir un nombre.");
    return;
  }
  
  const hours2 = Math.floor(minutes2 / 60);
  const remainingMinutes = minutes2 % 60;
  document.getElementById("result2").textContent = `${minutes2} minute(s) correspond(ent) à ${hours2} heure(s) et ${remainingMinutes} minute(s).`;

  // Clear input fields
  document.getElementById("minutes2").value = '';
}

// Convert hours to days
function convert3() {
  const hours3 = Number(document.getElementById("hours3").value);
  if (hours3 === 0) {
    alert("Veuillez saisir un nombre.");
    return;
  }

  const totalDays = Math.floor(hours3 / 24);
  const remainingHours = hours3 % 24;
  document.getElementById("result3").textContent = `${hours3} heure(s) correspond(ent) à ${totalDays} jour(s) et ${remainingHours} heure(s).`;

  // Clear input fields
  document.getElementById("hours3").value = '';
}

// Convert hours to workdays (8 hours a day)
function convert3Workdays() {
  const hours3Bis = Number(document.getElementById("hours3-bis").value);
  if (hours3Bis === 0) {
    alert("Veuillez saisir un nombre.");
    return;
  }

  const hoursPerDay = 8; // Assuming 8 hours in a workday
  const totalDays = Math.floor(hours3Bis / hoursPerDay);
  const remainingHours = hours3Bis % hoursPerDay;
  document.getElementById("result3WorkingDays").textContent = `${hours3Bis} heure(s) correspond(ent) à ${totalDays} jour(s) ouvré(s) et ${remainingHours} heure(s).`;

  // Clear input fields
  document.getElementById("hours3-bis").value = '';
}

// Convert days to hours
function convert4() {
  const days4 = Number(document.getElementById("days4").value);
  if (days4 === 0) {
    alert("Veuillez saisir un nombre.");
    return;
  }

  const totalHours = days4 * 24;
  document.getElementById("result4").textContent = `${days4} jour(s) correspond(ent) à ${totalHours} heure(s).`;

  // Clear input fields
  document.getElementById("days4").value = '';
}

// Convert workdays to hours
function convert4WorkDays() {
  const days4bis = Number(document.getElementById("days4-bis").value);
  if (days4bis === 0) {
    alert("Veuillez saisir un nombre.");
    return;
  }

  const hoursPerWorkday = 8; // Assuming 8 hours per workday
  const totalHours = days4bis * hoursPerWorkday;
  document.getElementById("result4WorkDays").textContent = `${days4bis} jour(s) correspond(ent) à ${totalHours} heure(s).`;

  // Clear input fields
  document.getElementById("days4-bis").value = '';
}

// Convert hours to months (assuming 30 days per month)
function convert5() {
  const hours5 = Number(document.getElementById("hours5").value);
  if (hours5 === 0) {
    alert("Veuillez saisir un nombre.");
    return;
  }

  const totalMonths = hours5 / 730; // 730 heures en un mois
  document.getElementById("result5").textContent = `${hours5} heure(s) correspond(ent) à ${totalMonths.toFixed(2)} mois.`;

  // Clear input fields
  document.getElementById("hours5").value = '';
}

// Convert hours to work months (assuming 22 workdays per month)
function convert6() {
  const hours6 = Number(document.getElementById("hours6").value);
  if (hours6 === 0) {
    alert("Veuillez saisir un nombre.");
    return;
  }

  const totalMonths2 = hours6 / 176; // 176 heures en un mois de 22 jours
  document.getElementById("result6").textContent = `${hours6} heure(s) correspond(ent) à ${totalMonths2.toFixed(2)} mois.`;

  // Clear input fields
  document.getElementById("hours6").value = '';
}

// ------------------------------------------------------------------

let display = document.querySelector('.display');
let scratchPad = document.querySelector('.scratch-pad');
const inputs = document.querySelectorAll("#minute1, #minute2");
const btn = document.getElementById('convertBtn');

let scratchPadText = [];
let lastResult = null;
let scratchPadHTML;

// ----------- CALCUL OPERATIONS

// Append a value to the calculator display
function appendToDisplay(value) {
  if (lastResult !== null) {
    display.innerHTML = '';
    lastResult = null;
  }
  display.innerHTML += value;
  updateScratchPad();
}

// Clear the calculator display
function clearDisplay() {
  display.innerHTML = '';
}

// Delete the last character in the calculator display
function backspace() {
  display.innerHTML = display.innerHTML.slice(0, -1);
  updateScratchPad();
}

// Calculate percentage
function percentage() {
  let expression = display.innerHTML;
  let result = eval(expression) / 100;
  display.innerHTML = result;
  scratchPadText.push(expression + '% = ' + result); 
  updateScratchPad();
}

// Perform calculation
function calculate() {
  let expression = display.innerHTML;
  let result = eval(expression);
  display.innerHTML = result;
  if (lastResult === null) {
    scratchPadText.push(expression + ' = ' + result);
  } else {
    scratchPadText.push(lastResult + ' ' + expression + ' = ' + result);
  }
  lastResult = result;
  updateScratchPad();
}

// ------------ DRAFT BOARD

// Update scratch pad display
function updateScratchPad() {
  scratchPadHTML = `
    <h2>Tableau de brouillon</h2>
    <button class="clear-results" onclick="deleteResults()">Tout effacer</button>
    <br><br>`;
    
  scratchPadText.forEach(function(item, index) {
    scratchPadHTML += `
      <br>
      <div>
        <p>${item}</p>
        <span class="delete-calcul" data-index="${index}">&#x2718;</span>
      </div>`;
  });
  scratchPad.innerHTML = scratchPadHTML;

  // Attach event listeners to each delete button
  document.querySelectorAll('.delete-calcul').forEach((button) => {
    button.addEventListener('click', function() {
      const index = this.getAttribute('data-index');
      deleteItem(index);
    });
  });
}

// Function to delete an item from scratchPadText by index
function deleteItem(index) {
  scratchPadText.splice(index, 1); // Remove the item from the array
  updateScratchPad(); 
}

// Clear all results in scratch pad
function deleteResults() {
  scratchPadText = [];
  updateScratchPad(); 
}

// Add keydown event to inputs for conversion
inputs.forEach(input => {
  input.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      convert1();
    }
  });
});

let lastTap = 0;

document.querySelector('button').addEventListener('touchend', function(event) {
  const currentTime = new Date().getTime();
  const tapLength = currentTime - lastTap;
  
  if (tapLength < 300 && tapLength > 0) {
    event.preventDefault(); // Prevent the double-tap
  }
  lastTap = currentTime;
});
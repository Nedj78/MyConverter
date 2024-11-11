document.addEventListener('DOMContentLoaded', () => {
  // Ajoute les écouteurs d'événements pour les boutons de conversion
  document.getElementById("convertBtn").addEventListener("click", convert1);
  document.getElementById("convertBtn2").addEventListener("click", convert2);
  document.getElementById("convertBtn3").addEventListener("click", convert3);
  document.getElementById("convertBtnWorkdays").addEventListener("click", convert3Workdays);
  document.getElementById("convertBtn4").addEventListener("click", convert4);
  document.getElementById("convertBtn4WorkDays").addEventListener("click", convert4WorkDays);
  document.getElementById("convertBtn5").addEventListener("click", convert5);
  document.getElementById("convertBtn6").addEventListener("click", convert6);
  
  // Adding keydown listeners for the input fields
  setupInputListeners();
});

  // Attach an event listener to each input field
  function setupInputListeners() {
  const inputs = document.querySelectorAll("#minutes1, #minutes2"); // Mettez à jour pour correspondre à votre HTML
  inputs.forEach(input => {
    input.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        // Trigger conversion on Enter key
        event.preventDefault();
        if (input.id === 'minutes1') {
          convert1(); // Call the conversion function direclty
        } else if (input.id === 'minutes2') {
          convert2();
        }
      }
    });
  });
}

// Conversion functions

// Convert hours and minutes to total minutes
function convert1() {
  const hours1 = Number(document.getElementById("hours1").value);
  const minutes1 = Number(document.getElementById("minutes1").value);

  if (hours1 === 0 && minutes1 === 0) {
    alert("Please enter at least one number.");
    return;
  }

  const totalMinutes = hours1 * 60 + minutes1;
  document.getElementById("result1").textContent = `${hours1} hour(s) and ${minutes1} minute(s) equal(s) ${totalMinutes} minute(s).`;

  // Clear input fields
  document.getElementById("hours1").value = '';
  document.getElementById("minutes1").value = '';
}

// Convert minutes to hours and remaining minutes
function convert2() {
  const minutes2 = Number(document.getElementById("minutes2").value);
  if (minutes2 === 0) {
    alert("Please enter at least one number.");
    return;
  }
  
  const hours2 = Math.floor(minutes2 / 60);
  const remainingMinutes = minutes2 % 60;
  document.getElementById("result2").textContent = `${minutes2} minute(s) equal(s) ${hours2} hour(s) and ${remainingMinutes} minute(s).`;

  // Clear input fields
  document.getElementById("minutes2").value = '';
}

// Convert hours to days
function convert3() {
  const hours3 = Number(document.getElementById("hours3").value);
  if (hours3 === 0) {
    alert("Please enter at least one number.");
    return;
  }

  const totalDays = Math.floor(hours3 / 24);
  const remainingHours = hours3 % 24;
  document.getElementById("result3").textContent = `${hours3} hour(s) equal(s) ${totalDays} day(s) and ${remainingHours} hour(s).`;

  // Clear input fields
  document.getElementById("hours3").value = '';
}

// Convert hours to workdays (8 hours a day)
function convert3Workdays() {
  const hours3Bis = Number(document.getElementById("hours3-bis").value);
  if (hours3Bis === 0) {
    alert("Please enter at least one number.");
    return;
  }

  const hoursPerDay = 8; // Assuming 8 hours in a workday
  const totalDays = Math.floor(hours3Bis / hoursPerDay);
  const remainingHours = hours3Bis % hoursPerDay;
  document.getElementById("result3WorkingDays").textContent = `${hours3Bis} hour(s) equal(s) ${totalDays} business day(s) and ${remainingHours} hour(s).`;

  // Clear input fields
  document.getElementById("hours3-bis").value = '';
}

// Convert days to hours
function convert4() {
  const days4 = Number(document.getElementById("days4").value);
  if (days4 === 0) {
    alert("Please enter at least one number.");
    return;
  }

  const totalHours = days4 * 24;
  document.getElementById("result4").textContent = `${days4} day(s) equal(s) ${totalHours} hour(s).`;

  // Clear input fields
  document.getElementById("days4").value = '';
}

// Convert workdays to hours
function convert4WorkDays() {
  const days4bis = Number(document.getElementById("days4-bis").value);
  if (days4bis === 0) {
    alert("Please enter at least one number.");
    return;
  }

  const hoursPerWorkday = 8; // Assuming 8 hours per workday
  const totalHours = days4bis * hoursPerWorkday;
  document.getElementById("result4WorkDays").textContent = `${days4bis} day(s) equal(s) ${totalHours} hour(s).`;

  // Clear input fields
  document.getElementById("days4-bis").value = '';
}

// Convert hours to months (assuming 30 days per month)
function convert5() {
  const hours5 = Number(document.getElementById("hours5").value);
  if (hours5 === 0) {
    alert("Please enter at least one number.");
    return;
  }

  const totalMonths = hours5 / 730; // 730 heures en un mois
  document.getElementById("result5").textContent = `${hours5} hour(s) equal(s) ${totalMonths.toFixed(2)} month(s).`;

  // Clear input fields
  document.getElementById("hours5").value = '';
}

// Convert hours to work months (assuming 22 workdays per month)
function convert6() {
  const hours6 = Number(document.getElementById("hours6").value);
  if (hours6 === 0) {
    alert("Please enter at least one number.");
    return;
  }

  const totalMonths2 = hours6 / 176; // 176 heures en un mois de 22 jours
  document.getElementById("result6").textContent = `${hours6} hour(s) equal(s) ${totalMonths2.toFixed(2)} month(s).`;

  // Clear input fields
  document.getElementById("hours6").value = '';
}

const inputs = document.querySelectorAll("#minute1, #minute2");

// Add keydown event to inputs for conversion
inputs.forEach(input => {
  input.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      convert1();
    }
  });
});

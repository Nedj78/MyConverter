    function convert1() {
      const hours1 = Number(document.getElementById("hours1").value);
      const minutes1 = Number(document.getElementById("minutes1").value);
    
      if (hours1 === 0 && minutes1 === 0) {
        alert("Veuillez saisir au moins un nombre.");
        return;
      }
    
      const totalMinutes = hours1 * 60 + minutes1;
      document.getElementById("result1").textContent = `${hours1} heure(s) et ${minutes1} minute(s) équivalent à ${totalMinutes} minute(s).`;
    
      document.getElementById("hours1").value = '';
      document.getElementById("minutes1").value = '';
    }

    function convert2() {
      const minutes2 = Number(document.getElementById("minutes2").value);
      const hours2 = Math.floor(minutes2 / 60);

      if (minutes2 === 0) {
        alert("Veuillez saisir au moins un nombre.");
        return;
      }
      
      const remainingMinutes = minutes2 % 60;
      document.getElementById("result2").textContent = `${minutes2} minute(s) équivaut à ${hours2} heure(s) et ${remainingMinutes} minute(s).`;

      document.getElementById("minutes2").value = '';
    }

    function convert3() {
      const hours3 = Number(document.getElementById("hours3").value);
      const totalDays = Math.floor(hours3 / 24);

      if (hours3 === 0) {
        alert("Veuillez saisir au moins un nombre.");
        return;
      }
      
      const remainingHours = hours3 % 24;
      document.getElementById("result3").textContent = `${hours3} heure(s) équivaut à ${totalDays} jour(s) et ${remainingHours} heure(s).`;

      document.getElementById("hours3").value = '';
    }

    function convert4() {
      const days4 = Number(document.getElementById("days4").value);
      
      if (days4 === 0) {
        alert("Veuillez saisir au moins un nombre.");
        return;
      }
      
      const totalHours = days4 * 24;
      document.getElementById("result4").textContent = `${days4} jour(s) équivaut à ${totalHours} heure(s).`;

      document.getElementById("days4").value = '';

    }

    let display = document.querySelector('.display');
      let scratchPad = document.querySelector('.scratch-pad');
      let scratchPadText = [];
      let lastResult = null;

      function appendToDisplay(value) {
        if (lastResult !== null) {
          display.innerHTML = '';
          lastResult = null;
        }
        display.innerHTML += value;
        updateScratchPad();
      }

      function clearDisplay() {
        display.innerHTML = '';
        scratchPadText = [];
        updateScratchPad();
      }

      function backspace() {
        display.innerHTML = display.innerHTML.slice(0, -1);
        updateScratchPad();
      }

      function percentage() {
        let expression = display.innerHTML;
        let result = eval(expression) / 100;
        display.innerHTML = result;
        scratchPadText.push(expression + '% = ' + result); 
        updateScratchPad();
      }

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

      function updateScratchPad() {
        let scratchPadHTML = '<h2>Tableau de brouillon</h2>';
        scratchPadText.forEach(function(item) {
          scratchPadHTML += '<br>' + '<p>' + item + '</p>' + '<br>';
        });
        scratchPad.innerHTML = scratchPadHTML;
      }

      const input = document.getElementById("minute1", "minute2");
      const btn = document.getElementById('convertBtn');

      input.addEventListener('keydown', function(event) {
        if (event.keyCode === 13) { /=
          event.preventDefault(); =
          convert(); 
        }
      });

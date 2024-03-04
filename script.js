function convert(inputId, unit1, unit2, resultId, conversionFactor) {
    const input = Number(document.getElementById(inputId).value);

    if (input === 0 || isNaN(input)) {
        alert("Veuillez saisir un nombre valide supérieur à zéro.");
        return;
    }

    const result1 = Math.floor(input * conversionFactor);
    const result2 = input % unit1;

    document.getElementById(resultId).textContent = `${input} ${unit1}(s) équivaut à ${result1} ${unit2}(s) et ${result2} ${unit1}(s).`;
    document.getElementById(inputId).value = '';
}

function clearInput(inputId) {
    document.getElementById(inputId).value = '';
}

function setupConversionListeners(inputId, unit1, unit2, resultId, conversionFactor) {
    const input = document.getElementById(inputId);
    input.addEventListener('keydown', function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            convert(inputId, unit1, unit2, resultId, conversionFactor);
        }
    });
}

setupConversionListeners("hours1", "heure", "minute", "result1", 60);

setupConversionListeners("minutes2", "minute", "heure", "result2", 1/60);

setupConversionListeners("hours3", "heure", "jour", "result3", 1/24);

setupConversionListeners("days4", "jour", "heure", "result4", 24);

// ------------------------------------------------------------------

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

function evaluateExpression() {
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

function percentage() {
    let expression = display.innerHTML;
    let result = eval(expression) / 100;
    display.innerHTML = result;
    scratchPadText.push(expression + '% = ' + result);
    updateScratchPad();
}

function updateScratchPad() {
    let scratchPadHTML = '<h2>Tableau de brouillon</h2>';
    scratchPadText.forEach(function(item) {
        scratchPadHTML += '<br>' + '<p>' + item + '</p>' + '<br>';
    });
    scratchPad.innerHTML = scratchPadHTML;
}

// Configuration des boutons de la calculatrice
const calculatorButtons = document.querySelectorAll('.buttoncalculator');
calculatorButtons.forEach(button => {
    button.addEventListener('click', function() {
        appendToDisplay(button.textContent);
    });
});

// Configuration du bouton C (effacer)
document.getElementById('clearButton').addEventListener('click', clearDisplay);

// Configuration du bouton ⌦ (retour arrière)
document.getElementById('backspaceButton').addEventListener('click', backspace);

// Configuration du bouton = (évaluation)
document.getElementById('evaluateButton').addEventListener('click', evaluateExpression);

// Configuration du bouton % (pourcentage)
document.getElementById('percentageButton').addEventListener('click', percentage);

// Configuration du bouton Entrée (évaluation)
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        evaluateExpression();
    }
});


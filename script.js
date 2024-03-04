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

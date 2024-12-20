import {
  calculateCorrectedMinuteVolume,
  calculateDinamicCompliance,
  calculateDrivingPressure,
  calculateGattinoniEspiratoryTranspulmonaryPressure,
  calculateGattinoniInspiratoryTranspulmonaryPressure,
  calculateInspiratoryTimeConstant,
  calculateMaximalEspiratoryResistance,
  calculateMaximalInspiratoryResistance,
  calculateMechanicalPower,
  calculateMinuteVolume,
  calculatePredictedBodyWeight,
  calculatePulmonaryCompliance,
  calculatePulmonaryElastance,
  calculateRespiratorySystemCompliance,
  calculateRespiratorySystemElastance,
  calculateTalmorEspiratoryTranspulmonaryPressure,
  calculateTalmorInspiratoryTranspulmonaryPressure,
  calculateThoraxCompliance,
  calculateThoraxElastance,
  calculateVentilatoryRatio,
} from './functions.js';

// Inputs
const genderInput = document.getElementById('genderValue-input');
const heightInput = document.getElementById('heightValue-input');
const tidalVolumenInput = document.getElementById('tidalVolumeValue-input');
const peakPressureInput = document.getElementById('peakPressureValue-input');
const plateauPressureInput = document.getElementById(
  'plateauPressureValue-input'
);
const totalPeepInput = document.getElementById('totalPeepValue-input');
const respiratoryRateInput = document.getElementById(
  'respiratoryRateValue-input'
);
const peakInspiratoryFlowInput = document.getElementById(
  'peakInspiratoryFlowValue-input'
);
const peakEspiratoryFlowInput = document.getElementById(
  'peakEspiratoryFlowValue-input'
);

const inspiratoryEsophagealPressureInput = document.getElementById(
  'inspiratoryEsophagealPressureValue-input'
);
const espiratoryEsophagealPressureInput = document.getElementById(
  'espiratoryEsophagealPressureValue-input'
);
const carbonDioxidePressureInput = document.getElementById(
  'carbonDioxidePressureValue-input'
);

const calcularButton = document.getElementById('calcular-button');
const resetButton = document.getElementById('reset');

// Calcular resultados

resetButton.addEventListener('click', reset);

// Manejadores de eventos
document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault(); // Evita el envío del formulario

  if (validarFormulario()) {
    calcular();
  }
});

// Función para validar el formulario
function validarFormulario() {
  const inputs = document.querySelectorAll('input[required], select[required]');
  let formIsValid = true;

  inputs.forEach((input) => {
    if (!input.value || input.value === '') {
      formIsValid = false;
      input.classList.add('is-invalid'); // Clase para resaltar errores
    } else {
      input.classList.remove('is-invalid');
    }
  });

  return formIsValid;
}

function calcular() {
  const inputsValues = {
    gender: genderInput.value,
    height: Number(heightInput.value),
    tidalVolumen: Number(tidalVolumenInput.value),
    peakPressure: Number(peakPressureInput.value),
    plateauPressure: Number(plateauPressureInput.value),
    totalPeep: Number(totalPeepInput.value),
    respiratoryRate: Number(respiratoryRateInput.value),
    peakInspiratoryFlow: Number(peakInspiratoryFlowInput.value),
    peakEspiratoryFlow: Number(peakEspiratoryFlowInput.value),
    inspiratoryEsophagealPressure: Number(
      inspiratoryEsophagealPressureInput.value
    ),
    espiratoryEsophagealPressure: Number(
      espiratoryEsophagealPressureInput.value
    ),
    carbonDioxidePressure: Number(carbonDioxidePressureInput.value),
  };
  console.log(inputsValues);
  // Mostrar resultados
  document.getElementById('resultPredictedBodyWeight').textContent =
    calculatePredictedBodyWeight(inputsValues);

  document.getElementById('resultRespiratorySystemCompliance').textContent =
    calculateRespiratorySystemCompliance(inputsValues);

  document.getElementById('resultPulmonaryCompliance').textContent =
    calculatePulmonaryCompliance(inputsValues);

  document.getElementById('resultThoraxCompliance').textContent =
    calculateThoraxCompliance(inputsValues);

  document.getElementById('resultDinamicCompliance').textContent =
    calculateDinamicCompliance(inputsValues);

  document.getElementById('resultRespiratorySystemElastance').textContent =
    calculateRespiratorySystemElastance(inputsValues);

  document.getElementById('resultPulmonaryElastance').textContent =
    calculatePulmonaryElastance(inputsValues);

  document.getElementById('resultThoraxElastance').textContent =
    calculateThoraxElastance(inputsValues);

  document.getElementById('resultMaximalInspiratoryResistance').textContent =
    calculateMaximalInspiratoryResistance(inputsValues);

  document.getElementById('resultMaximalEspiratoryResistance').textContent =
    calculateMaximalEspiratoryResistance(inputsValues);

  document.getElementById('resultInspiratoryTimeConstant').textContent =
    calculateInspiratoryTimeConstant(inputsValues);

  document.getElementById('resultDrivingPressure').textContent =
    calculateDrivingPressure(inputsValues);

  document.getElementById('resultMinuteVolume').textContent =
    calculateMinuteVolume(inputsValues);

  document.getElementById('resultVentilatoryRatio').textContent =
    calculateVentilatoryRatio(inputsValues);

  document.getElementById('resultCorrectedMinuteVolume').textContent =
    calculateCorrectedMinuteVolume(inputsValues);

  document.getElementById('resultMechanicalPower').textContent =
    calculateMechanicalPower(inputsValues);

  document.getElementById(
    'resultTalmorInspiratoryTranspulmonaryPressure'
  ).textContent =
    calculateTalmorInspiratoryTranspulmonaryPressure(inputsValues);

  document.getElementById(
    'resultTalmorEspiratoryTranspulmonaryPressure'
  ).textContent = calculateTalmorEspiratoryTranspulmonaryPressure(inputsValues);

  document.getElementById(
    'resultGattinoniInspiratoryTranspulmonaryPressure'
  ).textContent =
    calculateGattinoniInspiratoryTranspulmonaryPressure(inputsValues);

  document.getElementById(
    'resultGattinoniEspiratoryTranspulmonaryPressure'
  ).textContent =
    calculateGattinoniEspiratoryTranspulmonaryPressure(inputsValues);

  document.getElementById('results').className = 'show-results';
}

function reset() {
  // Esconder resultados
  document.getElementById('results').className = 'hide-results';

  // Reiniciar valores
  /* genderInput.value = '';
  heightInput.value = '';
  tidalVolumenInput.value = '';
  peakPressureInput.value = '';
  plateauPressureInput.value = '';
  heightInput.value = undefined;
  tidalVolumenInput.value = undefined;
  peakPressureInput.value = undefined;
  plateauPressureInput.value = undefined;
  totalPeepInput.value = undefined;
  respiratoryRateInput.value = undefined;
  peakInspiratoryFlowInput.value = undefined;
  peakEspiratoryFlowInput.value = undefined;
  inspiratoryEsophagealPressureInput.value = undefined;
  espiratoryEsophagealPressureInput.value = undefined;
  carbonDioxidePressureInput.value = undefined;*/

  // Reiniciar valores de los inputs
  document
    .querySelectorAll('input:not([type="submit"]):not([type="reset"]), select')
    .forEach((input) => {
      input.value = ''; // Limpia el valor
      input.classList.remove('is-invalid'); // Remueve validación de error
    });
}

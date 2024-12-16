//Functions for calculate Basic Pulmonary Mechanics
//Compliance: Respiratory sistem, Respiratory sistem in liters, Pulmonary, Thorax, Dinamic,

export function calculateRespiratorySistemCompliance(inputsValues) {
  return (
    inputsValues.tidalVolumen /
    (inputsValues.plateauPressure - inputsValues.totalPeep)
  ).toFixed(1);
}

export function calculatePulmonaryCompliance(inputsValues) {
  return (
    inputsValues.tidalVolumen /
    (inputsValues.plateauPressure -
      inputsValues.inspiratoryEsophagealPressure -
      (inputsValues.totalPeep - inputsValues.espiratoryEsophagealPressure))
  ).toFixed(1);
}

export function calculateThoraxCompliance(inputsValues) {
  return (
    inputsValues.tidalVolumen /
    (inputsValues.inspiratoryEsophagealPressure -
      inputsValues.espiratoryEsophagealPressure)
  ).toFixed(1);
}

export function calculateDinamicCompliance(inputsValues) {
  return (
    inputsValues.tidalVolumen /
    (inputsValues.peakPressure - inputsValues.totalPeep)
  ).toFixed(1);
}

//Elastance: Respiratory sistem, Pulmonary, Thorax

export function calculateRespiratorySistemElastance(inputsValues) {
  return (
    (inputsValues.plateauPressure - inputsValues.totalPeep) /
    (inputsValues.tidalVolumen / 1000)
  ).toFixed(1);
}

export function calculatePulmonaryElastance(inputsValues) {
  return (
    (inputsValues.plateauPressure -
      inputsValues.inspiratoryEsophagealPressure -
      (inputsValues.totalPeep - inputsValues.espiratoryEsophagealPressure)) /
    (inputsValues.tidalVolumen / 1000)
  ).toFixed(1);
}

export function calculateThoraxElastance(inputsValues) {
  return (
    (inputsValues.inspiratoryEsophagealPressure -
      inputsValues.espiratoryEsophagealPressure) /
    (inputsValues.tidalVolumen / 1000)
  ).toFixed(1);
}

//Inspiratory resistance

export function calculateMaximalInspiratoryResistance(inputsValues) {
  return (
    (inputsValues.peakPressure - inputsValues.plateauPressure) /
    (inputsValues.peakInspiratoryFlow / 60)
  ).toFixed(1);
}

//Espiratory resistance

export function calculateMaximalEspiratoryResistance(inputsValues) {
  return (
    (inputsValues.plateauPressure - inputsValues.totalPeep) /
    (inputsValues.peakEspiratoryFlow / 60)
  ).toFixed(1);
}

//Inspiratory time constant

export function calculateInspiratoryTimeConstant(inputsValues) {
  return (
    (inputsValues.tidalVolumen /
      1000 /
      (inputsValues.plateauPressure - inputsValues.totalPeep)) *
    ((inputsValues.peakPressure - inputsValues.plateauPressure) /
      (inputsValues.peakInspiratoryFlow / 60))
  ).toFixed(2);
}

//Driving pressure

export function calculateDrivingPressure(inputsValues) {
  return (
    inputsValues.tidalVolumen /
    (inputsValues.tidalVolumen /
      (inputsValues.plateauPressure - inputsValues.totalPeep))
  ).toFixed(1);
}

//Minute volume

export function calculateMinuteVolume(inputsValues) {
  return (
    (inputsValues.tidalVolumen / 1000) *
    inputsValues.respiratoryRate
  ).toFixed(1);
}

//Predicted body weight

export function calculatePredictedBodyWeight(inputsValues) {
  if (inputsValues.gender == 'Masculino') {
    return (50 + 0.91 * (inputsValues.height - 152.4)).toFixed(1);
  }
  return (45.5 + 0.91 * (inputsValues.height - 152.4)).toFixed(1);
}

//Ventilatory ratio

export function calculateVentilatoryRatio(inputsValues) {
  if (inputsValues.gender == 'Masculino') {
    return (
      (inputsValues.tidalVolumen *
        inputsValues.respiratoryRate *
        inputsValues.carbonDioxidePressure) /
      ((50 + 0.91 * (inputsValues.height - 152.4)) * 100 * 37.5)
    ).toFixed(1);
  }
  return (
    (inputsValues.tidalVolumen *
      inputsValues.respiratoryRate *
      inputsValues.carbonDioxidePressure) /
    ((45.5 + 0.91 * (inputsValues.height - 152.4)) * 100 * 37.5)
  ).toFixed(1);
}

//Corrected minute volume

export function calculateCorrectedMinuteVolume(inputsValues) {
  return (
    (inputsValues.tidalVolumen / 1000) *
    inputsValues.respiratoryRate *
    (inputsValues.carbonDioxidePressure / 40)
  ).toFixed(1);
}

//Mechanical power

export function calculateMechanicalPower(inputsValues) {
  return (
    0.098 *
    inputsValues.respiratoryRate *
    (inputsValues.tidalVolumen / 1000) *
    (inputsValues.peakPressure -
      (inputsValues.plateauPressure - inputsValues.totalPeep) / 2)
  ).toFixed(1);
}

//Talmor Inspiratory transpulmonary pressure

export function calculateTalmorInspiratoryTranspulmonaryPressure(inputsValues) {
  return (
    inputsValues.plateauPressure - inputsValues.inspiratoryEsophagealPressure
  ).toFixed(1);
}

//Talmor Espiratory transpulmonary pressure

export function calculateTalmorEspiratoryTranspulmonaryPressure(inputsValues) {
  return (
    inputsValues.totalPeep - inputsValues.espiratoryEsophagealPressure
  ).toFixed(1);
}

//Gattinoni Inspiratory transpulmonary pressure

export function calculateGattinoniInspiratoryTranspulmonaryPressure(
  inputsValues
) {
  return (
    inputsValues.plateauPressure -
    inputsValues.plateauPressure *
      ((inputsValues.inspiratoryEsophagealPressure -
        inputsValues.espiratoryEsophagealPressure) /
        (inputsValues.tidalVolumen / 1000) /
        ((inputsValues.plateauPressure - inputsValues.totalPeep) /
          (inputsValues.tidalVolumen / 1000)))
  ).toFixed(1);
}

//Gattinoni Espiratory transpulmonary pressure

export function calculateGattinoniEspiratoryTranspulmonaryPressure(
  inputsValues
) {
  return (
    inputsValues.totalPeep -
    inputsValues.totalPeep *
      ((inputsValues.inspiratoryEsophagealPressure -
        inputsValues.espiratoryEsophagealPressure) /
        (inputsValues.tidalVolumen / 1000) /
        ((inputsValues.plateauPressure - inputsValues.totalPeep) /
          (inputsValues.tidalVolumen / 1000)))
  ).toFixed(1);
}

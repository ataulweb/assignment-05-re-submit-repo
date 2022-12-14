
document.getElementById('btn-calculate').addEventListener('click', function(){
    const playerCost = getValueFromField('perplayer-field');
    const playerTotalCost = playerCost * 5;
    const cost = setValueToElement('player-total', playerTotalCost);
})


document.getElementById('btn-total').addEventListener('click', function(){
    const updatePlayerCost = getValueFromElement('player-total');
    const managerCost = getValueFromField('manager-field');
    const coachCost = getValueFromField('coach-field')
    const totalSum = updatePlayerCost + managerCost + coachCost;
    const total = setValueToElement('total-cost', totalSum);
})


function getValueFromField(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    return inputFieldValue;
}


function getValueFromElement(elementId){
    const elementPreviousValue = document.getElementById(elementId);
    const elementPreviousValueString = elementPreviousValue.innerText;
    const newElementValue = parseFloat(elementPreviousValueString);
    return newElementValue;
}


function setValueToElement(setElementId, value){
    const elementText = document.getElementById(setElementId);
    const elementTextString = elementText.innerText;
    elementText.innerText = value;
}
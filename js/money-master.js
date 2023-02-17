// Common Function
function getInputValue(inputId) {
    const inputTotal = document.getElementById(inputId)
    const inputTotalString = inputTotal.value;
    const inputAmount = parseFloat(inputTotalString)
    return inputAmount;
}
function getInnerTextValue(elementId){
    const elementTextDisplay = document.getElementById(elementId)
    const elementTextDisplayString = elementTextDisplay.innerText;
    const elementTotalNumber = parseFloat(elementTextDisplayString)
    return elementTotalNumber;

}

document.getElementById('calculate-btn').addEventListener('click', function () {
    // Get income Total
    const income = getInputValue('income')

    // Get Expenses
    const foodCost = getInputValue('food')
    const rentCost = getInputValue('rent')
    const clothsCost = getInputValue('cloths')
    const totalCost = foodCost + rentCost + clothsCost;

    // Check if total expenses exceed income
    if (totalCost > income || isNaN(totalCost,income)) {
        alert("Expenses cannot be greater than income!")
        return;
    }

    const expensesDisplay = document.getElementById('expenses')
    expensesDisplay.innerText = totalCost;

    // Get Current Balance
    const currentBalances = income - totalCost;

    // Check if income is negative
    if (currentBalances < 0) {
        alert("Income cannot be negative!");
        return;
    }

    const displayCurrentBalances = document.getElementById('current-balance')
    displayCurrentBalances.innerText = currentBalances;
})

document.getElementById('save-btn').addEventListener('click', function () {
    // Get income Total
    const income = getInputValue('income')
    const savingsPercent = getInputValue('save-percent')

    // Calculate savings amount
    const savingsAmount = (income * savingsPercent) / 100

    // Display savings amount
    const savingsDisplay = document.getElementById('savings-display')
    savingsDisplay.innerText = savingsAmount

    // Get total expenses
    const expensesTotalNumber = getInnerTextValue('expenses')
    const totalExpenses = expensesTotalNumber + savingsAmount;

    // Check if total expenses exceed income
    if (totalExpenses > income) {
        alert("Expenses and savings cannot be greater than income!");
        return;
    }

    // Display remaining balance
    const remainingDisplay = document.getElementById('remaining-balance')
    const remainingBalance = income - totalExpenses;
    remainingDisplay.innerText = remainingBalance;

    // Check if income is negative
    if(remainingBalance < 0 || isNaN(remainingBalance)){
        alert("Income cannot be negative!")
        return;
    }
})

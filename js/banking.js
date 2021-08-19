function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputAmount = parseFloat(input.value);
    input.value = '';
    return inputAmount;
}

function updateAmount(totaId, inputAmount) {
    const input = document.getElementById(totaId);
    const prevInput = parseFloat(input.innerText);
    if (typeof inputAmount === 'number') {
        const newInput = prevInput + inputAmount;
        input.innerText = newInput;
    }



}

function currenBalance() {
    const balance = document.getElementById('balance-total');
    const prevBalance = parseFloat(balance.innerText);
    return prevBalance;

}

function updateBalance(inputAmount, isAdd) {
    const balance = document.getElementById('balance-total');
    const prevBalance = currenBalance();
    if (isAdd === true) {
        const newBalance = prevBalance + inputAmount;
        balance.innerText = newBalance;
    } else {
        const newBalance = prevBalance - inputAmount;
        balance.innerText = newBalance;
    }
}
document.getElementById('deposit-button').addEventListener('click', function() {
    const inputAmount = getInputValue('deposit-input');
    if (inputAmount > 0) {
        updateAmount('deposit-total', inputAmount);
        updateBalance(inputAmount, true);
    }

})

document.getElementById('withdraw-button').addEventListener('click', function() {
    const inputAmount = getInputValue('withdraw-input');
    const currentAmount = currenBalance();
    if (inputAmount > 0 && inputAmount <= currentAmount) {
        updateAmount('withdraw-total', inputAmount);
        updateBalance(inputAmount, false);
    }
    if (inputAmount > currentAmount) {
        alert('ore polapan');
    }

})
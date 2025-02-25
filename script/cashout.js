document.getElementById('cashout-btn').addEventListener('click', function(event){
    event.preventDefault();
    // const pin = document.getElementById('cashout-pin').value;
    // const convertedPin = parseInt(pin);
    // const amount = document.getElementById('cashout-amount').value;
    // const convertedAmount = parseFloat(amount);
    // const mainBalance = document.getElementById('main-balance').innerText;
    // const convertedMainBalance = parseFloat(mainBalance);

    const amount = getInputValueByID('cashout-amount')
    const pin = getInputValueByID('cashout-pin')
    const account = document.getElementById('cashout-account-number').value;
    const mainBalance = getInnerTextByID('main-balance')

    if (amount > mainBalance) {
        alert("You're not that rich");
        return;
    }
    
    if (account.length === 11) {
        if (pin === 1234) {
            const sum = mainBalance - amount;
            // document.getElementById('main-balance').innerText = sum;
            setInnerTextByIDandValue('main-balance', sum);
            
            const container = document.getElementById('transaction-container')

            const div = document.createElement('div');
            div.classList.add("bg-white");
            div.innerHTML = `
            <h1 class = "px-8">Withdrawn Money</h1>
            <h3 class = "px-8">${amount}</h3>
            <p class = "px-8">Account Number: ${account}</p>
            <p class = "px-8">Current Balance: ${sum}</p>
            `
            container.appendChild(div);
        }
        else {
            alert('Invalid PIN');
        }
    }
    else {
        alert('Enter Amount');
    }
})
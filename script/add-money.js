document.getElementById('add-money').addEventListener('click', function(event) {
    event.preventDefault();
    // const amount = document.getElementById('amount').value;
    // const convertedAmount = parseFloat(amount);
    // const pin = document.getElementById('pin').value;
    // const convertedPin = parseInt(pin);
    // const mainBalance = document.getElementById('main-balance').innerText;
    // const convertedMainBalance = parseFloat(mainBalance);


    const amount = getInputValueByID('amount')
    const pin = getInputValueByID('pin')
    const account = document.getElementById('account-number').value;
    const mainBalance = getInnerTextByID('main-balance')
    const selectedBank = document.getElementById('selected-bank').value;

    if (amount < 0) {
        alert('Amount must be positive');
        return;   
    }
    
    if (account.length === 11) {
        if (pin === 1234) {
            const sum = mainBalance + amount;
            // document.getElementById('main-balance').innerText = sum;
            setInnerTextByIDandValue('main-balance', sum);

            const container = document.getElementById('transaction-container')

            const div = document.createElement('div');
            div.classList.add("bg-white");
            div.innerHTML = `
            <h1 class = "px-8">Added Money from ${selectedBank}</h1>
            <h3 class = "px-8">${amount}</h3>
            <p class = "px-8">Account Number: ${account}</p>
            <p class = "px-8">Current Balance: ${sum}</p>
            `
            container.appendChild(div);

            // const p = document.createElement('p');
            // p.innerText = `You've added TK. ${amount} from ${account} to your account. Current Balance: TK. ${sum}`;

            // container.appendChild(p);
        }
        else {
            alert('Invalid PIN');
        }
    }
    else {
        alert('Enter Amount');
    }
})
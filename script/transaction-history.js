document.getElementById('transaction-history').style.display = 'none';

document.getElementById('transaction-box').addEventListener('click', function() {
    handleToggle('addmoney', 'none');
    handleToggle('cashout', 'none');
    handleToggle('transaction-history', 'block');
})
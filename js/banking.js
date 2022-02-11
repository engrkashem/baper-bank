//add event handlet to deposit button
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositText = depositInput.value;
    const depositAmount = parseFloat(depositText);
    //updat deposit total
    const PreviousDeposit = document.getElementById('deposit-total');
    const PreviousDepositText = PreviousDeposit.innerText;
    const PreviousDepositAmount = parseFloat(PreviousDepositText);
    PreviousDeposit.innerText = PreviousDepositAmount + depositAmount;
    //Update Balance
    const balanceCall = document.getElementById('balance-total');
    const preBalanceText = balanceCall.innerText;
    const preBalanceAmount = parseFloat(preBalanceText);
    const updatedBalance = preBalanceAmount + depositAmount;
    balanceCall.innerText = updatedBalance;
    //clear depisit field
    depositInput.value = '';
})
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    //update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const preWithdrawText = withdrawTotal.innerText;
    const preWithdrawAmount = parseFloat(preWithdrawText);
    const totalWithdrawAmount = withdrawAmount + preWithdrawAmount;
    withdrawTotal.innerText = totalWithdrawAmount;
    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const preBalanceText = balanceTotal.innerText;
    const preBalanceAmount = parseFloat(preBalanceText);
    const updatedBalance = preBalanceAmount - withdrawAmount;
    balanceTotal.innerText = updatedBalance;
    //clear withdraw Field
    withdrawInput.value = '';
})
function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);
  // clear input field
  inputField.value = "";

  return amountValue;
}

function updateTotalField(totalFieldId, amount) {
  const totalElement = document.getElementById(totalFieldId);
  const totalText = totalElement.innerText;
  const previousTotal = parseFloat(totalText);

  totalElement.innerText = amount + previousTotal;
}

// deposit
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    /* const depositInput = document.getElementById("deposit-input");
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText); */

    const depositAmount = getInputValue("deposit-input");

    // get and update deposit total
    /* const depositTotal = document.getElementById("deposit-total");
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = depositAmount + previousDepositTotal; */
    updateTotalField("deposit-total", depositAmount);

    // update balance
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositAmount;
  });

// handle   withdraw button
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    /* const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText); */

    const withdrawAmount = getInputValue("withdraw-input");

    // get and update withdraw total
    /* const withdrawTotal = document.getElementById("withdraw-total");
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);

    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount; */
    updateTotalField("withdraw-total", withdrawAmount);

    // update balance
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
  });

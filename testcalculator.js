function btnTotal_onclick() {
  
  parResultAdd.innerHTML = parseFloat(txtNum1.value) + parseFloat(txtNum2.value);
  parResultTimes.innerHTML = parseFloat(txtNum1.value) * parseFloat(txtNum2.value);
  parResultDivide.innerHTML = parseFloat(txtNum1.value) / parseFloat(txtNum2.value);
}
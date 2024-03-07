'use strict';
let billAmount = document.querySelector('#bill-amount');
let tipPercentage = document.querySelector('#tip-percentage');
let noOfPerson = document.querySelector('#person');
let checkBox = document.querySelector('#round__off');

const decrement = document.querySelectorAll('.dec');
const increment = document.querySelectorAll('.inc');
const clear = document.querySelector('.clear');
const calculateTip = document.querySelector('.calulate-tip');
const totalTipAmount = document.querySelector('.output__tip');
const totalAmount = document.querySelector('.output__per_person');
const output = document.querySelector('.output');

decrement.forEach((el) =>
  el.addEventListener('click', function (e) {
    if (e.target.nextElementSibling.classList.contains('tip-percentage')) {
      tipPercentage.value = Number(tipPercentage.value) - 1;
    }
    if (e.target.nextElementSibling.classList.contains('person')) {
      noOfPerson.value = Number(noOfPerson.value) - 1;
    }
  })
);

increment.forEach((el) =>
  el.addEventListener('click', function (e) {
    if (e.target.previousElementSibling.classList.contains('tip-percentage'))
      tipPercentage.value = Number(tipPercentage.value) + 1;
    if (e.target.previousElementSibling.classList.contains('person'))
      noOfPerson.value = Number(noOfPerson.value) + 1;
  })
);

clear.addEventListener('click', function () {
  output.style.visibility = 'hidden';
  billAmount.value = null;
  tipPercentage.value = '15';
  noOfPerson.value = '1';
  checkBox.checked = false;
});

let totalTip = 0;
let totalAmt = 0;

calculateTip.addEventListener('click', function () {
  if (billAmount.value === '') {
    output.style.visibility = 'hidden';
  } else {
    totalTip = (
      (billAmount.value * (tipPercentage.value / 100)) /
      noOfPerson.value
    ).toFixed(2);
    totalAmt =
      Number(totalTip) + Number(billAmount.value) / Number(noOfPerson.value);
    totalTipAmount.textContent = '$ ' + totalTip;
    totalAmount.textContent =
      '$ ' +
      (Number(totalTip) + Number(billAmount.value) / Number(noOfPerson.value));
    output.style.visibility = 'visible';
  }
});

checkBox.addEventListener('change', function (e) {
  if (e.target.checked) {
    totalTipAmount.textContent = '$ ' + Math.round(totalTip);
    totalAmount.textContent = '$ ' + Math.round(totalAmt);
  } else {
    totalTipAmount.textContent = '$ ' + totalTip;
    totalAmount.textContent = '$ ' + totalAmt;
  }
});

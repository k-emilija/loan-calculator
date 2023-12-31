"use strict";

//////////////////////////////////////////////
// Formula for calculating the monthly payment

function calculateMonthlyPayment(rate, months, amount) {
  let monthlyRate = rate / 100 / 12;
  let denominator = 1 - Math.pow(1 + monthlyRate, -months);
  let monthlyPayment = amount * (monthlyRate / denominator);
  monthlyPayment = Math.ceil(monthlyPayment * 100) / 100;

  return monthlyPayment;
}

//////////////////////////////////////////////
// Writing code in DOMContentLoaded event listener to ensure that the JavaScript code doesn't run until the HTML structure is ready.

document.addEventListener("DOMContentLoaded", function () {
  //////////////////////////////////////////////
  // Obtaining the reset button element by its ID
  let resetButton = document.getElementById("reset-button");

  // Event listener for the reset button
  resetButton.addEventListener("click", function (event) {
    event.preventDefault();
    document.forms["calculate-lease"].reset();
    document.getElementById("monthly-payment").textContent = "$0.00";
    document.getElementById("total-payment").textContent = "$0.00";
    resetButton.disabled = true;
  });

  //////////////////////////////////////////////
  // Function to calculate monthly payment and total payment
  function calculateLoan() {
    // Creating variables and getting the form elements
    let amountInput = document.getElementById("leasing-amount");
    let interestRateSelect = document.getElementById("interest-rate");
    let leasingTermSelect = document.getElementById("leasing-term");

    let amount = parseFloat(amountInput.value);
    let rate = parseFloat(interestRateSelect.value);
    let term = parseInt(leasingTermSelect.value);

    // Calculate monthly payment
    let monthlyPayment = calculateMonthlyPayment(rate, term, amount);
    let totalPayment = monthlyPayment * term;

    // Display the payment
    // Check if amount is a valid number and greater than zero

    if (!isNaN(amount) && amount > 0 && rate && term) {
      document.getElementById("monthly-payment").textContent =
        "$" + monthlyPayment.toFixed(2);
      document.getElementById("total-payment").textContent =
        "$" + totalPayment.toFixed(2);
    }

    // Enable the reset button
    if (amount || rate || term) {
      resetButton.disabled = false;
    }

    //////////////////////////////////////////////
    // Function to validate the amount input
    function validateForm() {
      let amountValidation = document.getElementById("leasing-amount");

      // Alert and clear the input value and reset payment displays for invalid input
      if (parseFloat(amountValidation.value) <= 0) {
        alert("Enter a valid positive number");
        amountValidation.value = "";
        document.getElementById("monthly-payment").textContent = "$0.00";
        document.getElementById("total-payment").textContent = "$0.00";
      }
    }
    // Listening for the wrong input to validate the form
    amountInput.addEventListener("input", validateForm);
  }

  //////////////////////////////////////////////
  // Event listeners for form inputs to trigger the calculateLoan function
  let formInputs = document.querySelectorAll(".form input, .form select");
  formInputs.forEach(function (input) {
    input.addEventListener("input", calculateLoan);
  });
});

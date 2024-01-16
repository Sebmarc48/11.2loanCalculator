window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    let values = setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  return {};
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  values = getCurrentUIValues();
  monthly = calculateMonthlyPayment(values);
  updateMonthly(monthly);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  monthlyPayment =
    (values.amount * (values.rate / 12)) /
    (1 - (1 + values.rate / 12) ** -(values.years * 12));
  let monthly = monthlyPayment.toFixed(2);
  return monthly;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyDiv = document.querySelector(".monthlyDiv");
  let textContainer = document.createTextNode(monthly.toString());
  monthlyDiv.append(textContainer);
}

function allCustomerClass(cruise, isIncreased) {
  const cruiseClass_Input = document.getElementById(cruise + "_Input");
  const cruiseClass_InputNumber = parseInt(cruiseClass_Input.value);

  let ticketCount = cruiseClass_InputNumber;
  if (isIncreased == true) {
    ticketCount = cruiseClass_InputNumber + 1;
  }
  if (isIncreased == false && cruiseClass_InputNumber > 0) {
    ticketCount = cruiseClass_InputNumber - 1;
  }
  cruiseClass_Input.value = ticketCount;

  let totalCruisePrice = 0;
  if (cruise == "firstClass") {
    totalCruisePrice = ticketCount * 150;
  }
  if (cruise == "economyClass") {
    totalCruisePrice = ticketCount * 100;
  }

  document.getElementById(cruise + "_Price").innerText = totalCruisePrice;
  subtotalAmount();
}

//for subtotal
function subtotalAmount() {
  const firstClass = document.getElementById("firstClass_Input");
  const firstClassCount = parseInt(firstClass.value);

  const economyClass = document.getElementById("economyClass_Input");
  const economyClassCount = parseInt(economyClass.value);

  const subtotal = firstClassCount * 150 + economyClassCount * 100;

  document.getElementById("subtotal").innerText = subtotal;

  // for Tax
  const tax = subtotal * 0.1;
  document.getElementById("taxableAmount").innerText = Math.round(tax);

  // for grandTotal
  const grandTotal = subtotal + tax;
  document.getElementById("finalAmount").innerText = grandTotal;
}

// secondPage------------
const submitArea = document.getElementById("bookNow");
submitArea.addEventListener("click", function () {
  document.getElementById("main-content").style.display = "none";
  document.getElementById("secondPage").style.display = "block";
});

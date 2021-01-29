const btnIncrease = document.getElementById("plusButton");
btnIncrease.addEventListener("click", function () {
  firstClass(true);
});

const btnDecrease = document.getElementById("minusButton");
btnDecrease.addEventListener("click", function () {
  firstClass(false);
});
function firstClass(isIncreased) {
  const currentInput = document.getElementById("currentInput");
  const currentInputNumber = parseInt(currentInput.value);
  let addedItem = currentInputNumber;
  if (isIncreased == true) {
    addedItem = currentInputNumber + 1;
  }
  if (isIncreased == false && currentInputNumber > 0) {
    addedItem = currentInputNumber - 1;
  }
  document.getElementById("currentInput").value = addedItem;

  const totalVipPrice = addedItem * 150;
  document.getElementById("vipPrice").innerText = totalVipPrice;
}


// For Economy Class

const btnIncrease1 = document.getElementById("plusButton1");
btnIncrease1.addEventListener("click", function () {
  economyClass(true);
});

const btnDecrease1 = document.getElementById("minusButton1");
btnDecrease1.addEventListener("click", function () {
    economyClass(false);
});
function economyClass(isIncreased) {
  const currentInput1 = document.getElementById("currentInput1");
  const currentInputNumber1 = parseInt(currentInput1.value);
  let addedItem1 = currentInputNumber1;
  if (isIncreased == true) {
    addedItem1 = currentInputNumber1 + 1;
  }
  if (isIncreased == false && currentInputNumber1 > 0) {
    addedItem1 = currentInputNumber1 - 1;
  }
  document.getElementById("currentInput1").value = addedItem1;

  const totalEconomyPrice = addedItem1 * 100;
  document.getElementById("economyClass").innerText = totalEconomyPrice;
}



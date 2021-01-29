const btnIncrease = document.getElementById("plusButton");
btnIncrease.addEventListener("click", function () {
  firstClass(true);
  //   const currentInput = document.getElementById("currentInput");
  //   const currentInputNumber = parseInt(currentInput.value);
  //   const addedItem = currentInputNumber + 1;
  //   document.getElementById("currentInput").value = addedItem;

  //   //   const vipPrice = document.getElementById("vipPrice");
  //   //   const addedVipPrice = parseInt(vipPrice.innerText);
  //   const totalVipPrice = addedItem * 150;
  //   document.getElementById("vipPrice").innerText = totalVipPrice;
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
  if (isIncreased == false && ) {
    addedItem = currentInputNumber - 1;
  }
  //   const addedItem = currentInputNumber - 1;
  document.getElementById("currentInput").value = addedItem;

  const totalVipPrice = addedItem * 150;
  document.getElementById("vipPrice").innerText = totalVipPrice;
}

// const btnIncrease = document.getElementById("plusButton");
// btnIncrease.addEventListener("click", function () {
//   const currentInput = document.getElementById("currentInput");
//   const currentInputNumber = parseInt(currentInput.value);
//   const addedItem = currentInputNumber + 1;
//   document.getElementById("currentInput").value = addedItem;

//   //   const vipPrice = document.getElementById("vipPrice");
//   //   const addedVipPrice = parseInt(vipPrice.innerText);
//   const totalVipPrice = addedItem * 150;
//   document.getElementById("vipPrice").innerText = totalVipPrice;
// });

// const btnDecrease = document.getElementById("minusButton");
// btnDecrease.addEventListener("click", function () {
//   const currentInput = document.getElementById("currentInput");
//   const currentInputNumber = parseInt(currentInput.value);
//   const addedItem = currentInputNumber - 1;
//   document.getElementById("currentInput").value = addedItem;

//   const totalVipPrice = addedItem * 150;
//   document.getElementById("vipPrice").innerText = totalVipPrice;
// });

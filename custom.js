function allCustomerClass(cruise, isIncreased) {
  const cruiseClass_Input = document.getElementById(cruise + "_Input");
  const cruiseClass_InputNumber = parseInt(cruiseClass_Input.value);
  let addedItem1 = cruiseClass_InputNumber;
  if (isIncreased == true) {
    addedItem1 = cruiseClass_InputNumber + 1;
  }
  if (isIncreased == false && cruiseClass_InputNumber > 0) {
    addedItem1 = cruiseClass_InputNumber - 1;
  }
  cruiseClass_Input.value = addedItem1;
  let totalcruisePrice = 0;
  if (cruise == "firstClass") {
    totalcruisePrice = addedItem1 * 150;
  }
  if (cruise == "economyClass") {
    totalcruisePrice = addedItem1 * 100;
  }
  // const totalcruisePrice = addedItem1 * 100;
  document.getElementById(cruise + "_Price").innerText = totalcruisePrice;
}

// function firstClass(isIncreased) {
//   const firstClass_Input = document.getElementById("firstClass_Input");
//   const firstClass_InputNumber = parseInt(firstClass_Input.value);
//   let addedItem = firstClass_InputNumber;
//   if (isIncreased == true) {
//     addedItem = firstClass_InputNumber + 1;
//   }
//   if (isIncreased == false && firstClass_InputNumber > 0) {
//     addedItem = firstClass_InputNumber - 1;
//   }
//   firstClass_Input.value = addedItem;

//   const totalFirstClassPrice = addedItem * 150;
//   document.getElementById("firstClass_Price").innerText = totalFirstClassPrice;
// }

// // For Economy Class

// function economyClass(isIncreased) {
//   const economyClass_Input = document.getElementById("economyClass_Input");
//   const economyClass_InputNumber = parseInt(economyClass_Input.value);
//   let addedItem1 = economyClass_InputNumber;
//   if (isIncreased == true) {
//     addedItem1 = economyClass_InputNumber + 1;
//   }
//   if (isIncreased == false && economyClass_InputNumber > 0) {
//     addedItem1 = economyClass_InputNumber - 1;
//   }
//   economyClass_Input.value = addedItem1;

//   const totalEconomyPrice = addedItem1 * 100;
//   document.getElementById("economyClass_Price").innerText = totalEconomyPrice;
// }

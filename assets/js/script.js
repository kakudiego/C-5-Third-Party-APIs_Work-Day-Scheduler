// current day and time
let update = function () {
  let currentTime = moment().format("dddd, MMMM Do YYYY, HH:mm:ss");
  $("#currentDay").text("Today is: " + currentTime);
  // auto refresh time
  setInterval(update, 1000);
};

$(document).ready(function () {
  update();
  changeInputColor1();
  changeInputColor2();
  changeInputColor3();
  changeInputColor4();
  changeInputColor5();
  changeInputColor6();
  changeInputColor7();
  changeInputColor8();
  changeInputColor9();
});

// select each save button
let save1 = document.querySelector("#save-1");
let save2 = document.querySelector("#save-2");
let save3 = document.querySelector("#save-3");
let save4 = document.querySelector("#save-4");
let save5 = document.querySelector("#save-5");
let save6 = document.querySelector("#save-6");
let save7 = document.querySelector("#save-7");
let save8 = document.querySelector("#save-8");
let save9 = document.querySelector("#save-9");

// select each text input
let userInput1 = document.querySelector("#user-input1");
let userInput2 = document.querySelector("#user-input2");
let userInput3 = document.querySelector("#user-input3");
let userInput4 = document.querySelector("#user-input4");
let userInput5 = document.querySelector("#user-input5");
let userInput6 = document.querySelector("#user-input6");
let userInput7 = document.querySelector("#user-input7");
let userInput8 = document.querySelector("#user-input8");
let userInput9 = document.querySelector("#user-input9");

// save data after reload for each input area
userInput1.value = JSON.parse(localStorage.getItem("09"));
userInput2.value = JSON.parse(localStorage.getItem("10"));
userInput3.value = JSON.parse(localStorage.getItem("11"));
userInput4.value = JSON.parse(localStorage.getItem("12"));
userInput5.value = JSON.parse(localStorage.getItem("13"));
userInput6.value = JSON.parse(localStorage.getItem("14"));
userInput7.value = JSON.parse(localStorage.getItem("15"));
userInput8.value = JSON.parse(localStorage.getItem("16"));
userInput9.value = JSON.parse(localStorage.getItem("17"));

// // hit enter to save input
// enterSave = function (event) {
//   if (event.charCode === 13) {
//     localStorage.setItem("09:00", JSON.stringify(userInput1.value));
//   }
// };

// event listener for button and save localStorage
// had to use event listener for each button, because only the first button was working
save1.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("09", JSON.stringify(userInput1.value));

  console.log("09", userInput1.value);
});
save2.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("10", JSON.stringify(userInput2.value));

  console.log("10", userInput2.value);
});
save3.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("11", JSON.stringify(userInput3.value));

  console.log("11", userInput3.value);
});
save4.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("12", JSON.stringify(userInput4.value));

  console.log("12", userInput4.value);
});
save5.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("13", JSON.stringify(userInput5.value));

  console.log("13", userInput5.value);
});
save6.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("14", JSON.stringify(userInput6.value));

  console.log("14", userInput6.value);
});
save7.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("15", JSON.stringify(userInput7.value));

  console.log("15", userInput7.value);
});
save8.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("16", JSON.stringify(userInput8.value));

  console.log("16", userInput8.value);
});
save9.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("17", JSON.stringify(userInput9.value));

  console.log("17", userInput9.value);
});
console.log(localStorage);

// delete task button
// input empty
function deleteTask1() {
  localStorage.removeItem("09");
  userInput1.value = "";
}
function deleteTask2() {
  localStorage.removeItem("10");
  userInput2.value = "";
}
function deleteTask3() {
  localStorage.removeItem("11");
  userInput3.value = "";
}
function deleteTask4() {
  localStorage.removeItem("12");
  userInput4.value = "";
}
function deleteTask5() {
  localStorage.removeItem("13");
  userInput5.value = "";
}
function deleteTask6() {
  localStorage.removeItem("14");
  userInput6.value = "";
}
function deleteTask7() {
  localStorage.removeItem("15");
  userInput7.value = "";
}
function deleteTask8() {
  localStorage.removeItem("16");
  userInput8.value = "";
}
function deleteTask9() {
  localStorage.removeItem("17");
  userInput9.value = "";
}

// select hour row
let hourId1 = document.querySelector(".uno");
let hourId2 = document.querySelector(".dos");
let hourId3 = document.querySelector(".tres");
let hourId4 = document.querySelector(".cuatro");
let hourId5 = document.querySelector(".cinco");
let hourId6 = document.querySelector(".seis");
let hourId7 = document.querySelector(".siete");
let hourId8 = document.querySelector(".ocho");
let hourId9 = document.querySelector(".nueve");

// parse hour to a single number
let currentHour = parseInt(moment().format("H"));
console.log(currentHour);

// let parse = parseInt(hourId1.dataset.time);

// change color section
// function to change each row based on time
// compare parsed hour to parsed data-time of each row
// extra console.log just to be sure
let changeInputColor1 = function () {
  let parseHour1 = parseInt(hourId1.dataset.time);
  if (currentHour === parseHour1) {
    document.querySelector("#user-input1").className += " present";
  } else if (currentHour > parseHour1) {
    document.querySelector("#user-input1").className += " past";
  } else {
    document.querySelector("#user-input1").className += " future";
  }
  console.log(parseHour1);
};

let changeInputColor2 = function () {
  let parseHour2 = parseInt(hourId2.dataset.time);
  if (currentHour === parseHour2) {
    document.querySelector("#user-input2").className += " present";
  } else if (currentHour > parseHour2) {
    document.querySelector("#user-input2").className += " past";
  } else {
    document.querySelector("#user-input2").className += " future";
  }
  console.log(parseHour2);
};

let changeInputColor3 = function () {
  let parseHour3 = parseInt(hourId3.dataset.time);
  if (currentHour === parseHour3) {
    document.querySelector("#user-input3").className += " present";
  } else if (currentHour > parseHour3) {
    document.querySelector("#user-input3").className += " past";
  } else {
    document.querySelector("#user-input3").className += " future";
  }
  console.log(parseHour3);
};

let changeInputColor4 = function () {
  let parseHour4 = parseInt(hourId4.dataset.time);
  if (currentHour === parseHour4) {
    document.querySelector("#user-input4").className += " present";
  } else if (currentHour > parseHour4) {
    document.querySelector("#user-input4").className += " past";
  } else {
    document.querySelector("#user-input4").className += " future";
  }
  console.log(parseHour4);
};

let changeInputColor5 = function () {
  let parseHour5 = parseInt(hourId5.dataset.time);
  if (currentHour === parseHour5) {
    document.querySelector("#user-input5").className += " present";
  } else if (currentHour > parseHour5) {
    document.querySelector("#user-input5").className += " past";
  } else {
    document.querySelector("#user-input5").className += " future";
  }
  console.log(parseHour5);
};

let changeInputColor6 = function () {
  let parseHour6 = parseInt(hourId6.dataset.time);
  if (currentHour === parseHour6) {
    document.querySelector("#user-input6").className += " present";
  } else if (currentHour > parseHour6) {
    document.querySelector("#user-input6").className += " past";
  } else {
    document.querySelector("#user-input6").className += " future";
  }
  console.log(parseHour6);
};

let changeInputColor7 = function () {
  let parseHour7 = parseInt(hourId7.dataset.time);
  if (currentHour === parseHour7) {
    document.querySelector("#user-input7").className += " present";
  } else if (currentHour > parseHour7) {
    document.querySelector("#user-input7").className += " past";
  } else {
    document.querySelector("#user-input7").className += " future";
  }
  console.log(parseHour7);
};

let changeInputColor8 = function () {
  let parseHour8 = parseInt(hourId8.dataset.time);
  if (currentHour === parseHour8) {
    document.querySelector("#user-input8").className += " present";
  } else if (currentHour > parseHour8) {
    document.querySelector("#user-input8").className += " past";
  } else {
    document.querySelector("#user-input8").className += " future";
  }
  console.log(parseHour8);
};

let changeInputColor9 = function () {
  let parseHour9 = parseInt(hourId9.dataset.time);
  if (currentHour === parseHour9) {
    document.querySelector("#user-input9").className += " present";
  } else if (currentHour > parseHour9) {
    document.querySelector("#user-input9").className += " past";
  } else {
    document.querySelector("#user-input9").className += " future";
  }
  console.log(parseHour9);
};

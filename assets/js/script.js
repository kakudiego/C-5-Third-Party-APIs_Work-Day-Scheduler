// current day and time
let update = function () {
  let currentTime = moment().format("dddd, MMMM Do YYYY, HH:mm:ss");
  $("#currentDay").text("Today is: " + currentTime);
  // auto refresh time
  // setInterval(update, 1000);
};

$(document).ready(function () {
  update();
  changeInputColor();
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

// load tasks
// let dayTask = JSON.parse(localStorage.getItem("save4") || "{}");
// console.log(dayTask["save1"]);

// var loadTasks = function () {
//   // if there are no tasks, set tasks to an empty array and return out of the function
//   var savedTasks = JSON.parse(localStorage.getItem("save1") || "{}");
//   console.log("This is the save1 value:", savedTasks);

//   // savedTasks = JSON.parse(savedTasks);
// };
// loadTasks();

// // possible change color
// let changeColor = function(){
//   let currentHour = "";
//   if (hour === parseInt()) {}
//   if (hour === parseInt()) {}
//   else {}
// }

// select each hour
let rows = document.querySelector(".hour");
// pere hour to a single number
let currentHour = parseInt(moment().format("H"));
console.log(currentHour);

let inputColor = document.querySelector(".textarea");

// // makes a row id to compare
// Array.from(rows).forEach((hour) => {
//   let rowIdString = hour.id,
//     rowHour;
//   if (rowIdString) {
//     rowHour = parseInt(rowIdString);
//   }
//   if (rowHour) {
//     // Compares hour id to current hour and sets color accordingly
//     if (currentHour === rowHour) {
//       setColor(hour, "lightgrey");
//     } else if (currentHour < rowHour) {
//       setColor(hour, "green");
//     } else {
//       setColor(hour, "red");
//     }
//   }
// });

// makes a row id to compare
let changeInputColor = function () {
  let hourId = document.querySelector(".hour");
  if (currentHour === hourId) {
    document.querySelector(".textarea").className += " present";
  } else if (currentHour < hourId) {
    document.querySelector(".textarea").className += " past";
  } else {
    document.querySelector(".textarea").className += " future";
  }
};

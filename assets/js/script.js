// current day and time
let update = function () {
  let currentTime = moment().format("dddd, MMMM Do YYYY, HH:mm:ss");
  $("#currentDay").text("Today is: " + currentTime);
  // auto refresh time
  setInterval(update, 1000);
};

$(document).ready(function () {
  update();
});

// variables
let tasks = [];

// select textarea and input
let save1 = document.querySelector("#save-1");
let save2 = document.querySelector("#save-2");
let save3 = document.querySelector("#save-3");
let save4 = document.querySelector("#save-4");
let save5 = document.querySelector("#save-5");
let save6 = document.querySelector("#save-6");
let save7 = document.querySelector("#save-7");
let save8 = document.querySelector("#save-8");
let save9 = document.querySelector("#save-9");

let userInput1 = document.querySelector("#user-input1");
let userInput2 = document.querySelector("#user-input2");
let userInput3 = document.querySelector("#user-input3");
let userInput4 = document.querySelector("#user-input4");
let userInput5 = document.querySelector("#user-input5");
let userInput6 = document.querySelector("#user-input6");
let userInput7 = document.querySelector("#user-input7");
let userInput8 = document.querySelector("#user-input8");
let userInput9 = document.querySelector("#user-input9");
// get value from input element

// event listener for button
save1.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("save1", JSON.stringify(userInput1.value));

  console.log(userInput.value);
  console.log("09:00");
});
save2.addEventListener("click", function () {
  localStorage.setItem("save2", JSON.stringify(userInput2.value));

  console.log(userInput.value);
  console.log("10:00");
});
save3.addEventListener("click", function () {
  localStorage.setItem("save3", JSON.stringify(userInput3.value));

  console.log(userInput.value);
  console.log("11:00");
});
save4.addEventListener("click", function () {
  localStorage.setItem("save4", JSON.stringify(userInput4.value));

  console.log(userInput.value);
  console.log("12:00");
});
save5.addEventListener("click", function () {
  localStorage.setItem("save5", JSON.stringify(userInput5.value));
  console.log(userInput.value);

  console.log("13:00");
});
save6.addEventListener("click", function () {
  localStorage.setItem("save1", JSON.stringify(userInput6.value));

  console.log(userInput.value);
  console.log("14:00");
});
save7.addEventListener("click", function () {
  localStorage.setItem("save1", JSON.stringify(userInput7.value));
  console.log(userInput.value);
  localStorage.setItem("save7", userInput);
  console.log("15:00");
});
save8.addEventListener("click", function () {
  localStorage.setItem("save1", JSON.stringify(userInput8.value));

  console.log(userInput.value);
  console.log("16:00");
});
save9.addEventListener("click", function () {
  localStorage.setItem("save1", JSON.stringify(userInput9.value));

  console.log(userInput.value);
  localStorage.setItem("save9", userInput);
  console.log("17:00");
});

// // load tasks
// let loadTasks = function () {
//   let savedTasks = localStorage.getItem("task");

//   if (!tasks) {
//     tasks = [];
//     return false;
//   }

//   tasks = JSON.parse(tasks);
// };

// To get data from local storage, you do something like this:
// //get current data from localStorage. If no data exists, return empty object
//     var dailySchedule = JSON.parse(localStorage.getItem("dailySchedule") || "{}");

// var dailySchedule will look like this (I think):
// var dailySchedule = {"save1": "test1",
//                       "save2": "test2",
//                       "save3": "test3"}
// You can access these values just like you would any other object
// console.log(dailySchedule['save1']}

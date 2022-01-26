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

  console.log(userInput1.value);
  console.log("09:00");
});
save2.addEventListener("click", function () {
  localStorage.setItem("save2", JSON.stringify(userInput2.value));

  console.log(userInput2.value);
  console.log("10:00");
});
save3.addEventListener("click", function () {
  localStorage.setItem("save3", JSON.stringify(userInput3.value));

  console.log(userInput3.value);
  console.log("11:00");
});
save4.addEventListener("click", function () {
  localStorage.setItem("save4", JSON.stringify(userInput4.value));

  console.log(userInput4.value);
  console.log("12:00");
});
save5.addEventListener("click", function () {
  localStorage.setItem("save5", JSON.stringify(userInput5.value));
  console.log(userInput5.value);

  console.log("13:00");
});
save6.addEventListener("click", function () {
  localStorage.setItem("save6", JSON.stringify(userInput6.value));

  console.log(userInput6.value);
  console.log("14:00");
});
save7.addEventListener("click", function () {
  localStorage.setItem("save7", JSON.stringify(userInput7.value));

  console.log(userInput7.value);
  console.log("15:00");
});
save8.addEventListener("click", function () {
  localStorage.setItem("save8", JSON.stringify(userInput8.value));

  console.log(userInput8.value);
  console.log("16:00");
});
save9.addEventListener("click", function () {
  localStorage.setItem("save9", JSON.stringify(userInput9.value));

  console.log(userInput9.value);
  console.log("17:00");
});

// load tasks
// let dayTask = JSON.parse(localStorage.getItem("save4") || "{}");
// console.log(dayTask["save1"]);

console.log(localStorage);

var loadTasks = function () {
  var savedTasks = localStorage.getItem("save1");
  // if there are no tasks, set tasks to an empty array and return out of the function
  if (!savedTasks) {
    return false;
  }
  console.log("Saved tasks found!");
  // else, load up saved tasks

  // parse into array of objects
  savedTasks = JSON.parse(savedTasks);

  var savedTasks = localStorage.getItem("save2");
  // if there are no tasks, set tasks to an empty array and return out of the function
  if (!savedTasks) {
    return false;
  }
  console.log("Saved tasks found!");
  // else, load up saved tasks

  // parse into array of objects
  savedTasks = JSON.parse(savedTasks);
};
loadTasks();

// // To get data from local storage, you do something like this:
// // get current data from localStorage. If no data exists, return empty object
// let dailySchedule = JSON.parse(localStorage.getItem("dailySchedule") || "{}");

// // You can access these values just like you would any other object
// console.log(dailySchedule["save1"]);

// var dailySchedule will look like this (I think):
// let dailySchedule =
//   {
//     "save1": "test1",
//     "save2": "test2",
//     "save3": "test3"
//   }

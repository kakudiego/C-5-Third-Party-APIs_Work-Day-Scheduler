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

// select each input
let userInput1 = document.querySelector("#user-input1");
let userInput2 = document.querySelector("#user-input2");
let userInput3 = document.querySelector("#user-input3");
let userInput4 = document.querySelector("#user-input4");
let userInput5 = document.querySelector("#user-input5");
let userInput6 = document.querySelector("#user-input6");
let userInput7 = document.querySelector("#user-input7");
let userInput8 = document.querySelector("#user-input8");
let userInput9 = document.querySelector("#user-input9");

// save data after reload
let keepText = [
  (userInput1.value = JSON.parse(localStorage.getItem("09:00"))),
  (userInput2.value = JSON.parse(localStorage.getItem("10:00"))),
  (userInput3.value = JSON.parse(localStorage.getItem("11:00"))),
  (userInput4.value = JSON.parse(localStorage.getItem("12:00"))),
  (userInput5.value = JSON.parse(localStorage.getItem("13:00"))),
  (userInput6.value = JSON.parse(localStorage.getItem("14:00"))),
  (userInput7.value = JSON.parse(localStorage.getItem("15:00"))),
  (userInput8.value = JSON.parse(localStorage.getItem("16:00"))),
  (userInput9.value = JSON.parse(localStorage.getItem("17:00"))),
];

// hit enter to save input
enterSave = function (event) {
  if (event.charCode === 13) {
    localStorage.setItem("09:00", JSON.stringify(userInput1.value));
  }
};

// event listener for button and save localStorage
save1.addEventListener("click", function (event) {
  event.preventDefault();

  localStorage.setItem("09:00", JSON.stringify(userInput1.value));

  console.log("09:00", userInput1.value);
});
save2.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("10:00", JSON.stringify(userInput2.value));

  console.log("10:00", userInput2.value);
});
save3.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("11:00", JSON.stringify(userInput3.value));

  console.log("11:00", userInput3.value);
});
save4.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("12:00", JSON.stringify(userInput4.value));

  console.log("12:00", userInput4.value);
});
save5.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("13:00", JSON.stringify(userInput5.value));

  console.log("13:00", userInput5.value);
});
save6.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("14:00", JSON.stringify(userInput6.value));

  console.log("14:00", userInput6.value);
});
save7.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("15:00", JSON.stringify(userInput7.value));

  console.log("15:00", userInput7.value);
});
save8.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("16:00", JSON.stringify(userInput8.value));

  console.log("16:00", userInput8.value);
});
save9.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("17:00", JSON.stringify(userInput9.value));

  console.log("17:00", userInput9.value);
});

// delete task button
function deleteTask() {
  localStorage.removeItem("09:00");
  userInput1.value = "";
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

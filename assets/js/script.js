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
let saveButton = document.querySelector("#save-button");
let userInputElement = document.querySelector("#user-input");
// get value from input element
let taskText = userInputElement.value.trim();
let taskInput = $("input[name=taskToDo]").val();

$("button").click(function (e) {
  e.preventDefault();
  localStorage.setItem("hour", "taskInput");
  console.log(taskText, taskInput);
});

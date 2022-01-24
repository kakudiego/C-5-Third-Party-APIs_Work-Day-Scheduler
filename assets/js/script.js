// current day and time
let currentTime = moment().format("dddd, MMMM Do YYYY, HH:mm:ss");
$("#currentDay").text("Today is: " + currentTime);

// function click save
$(document).ready(function () {});

$(".save-icon").click(function () {
  console.log("click");
  let myTask = $("input[name=taskToDo]").val();
  $("input[name=taskToSo]").val("");
  localStorage.setItem(myTask, "mytask");
});

function testTest() {
  $("textarea").value;
  console.log("testTest");
}

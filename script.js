let currentDate = new Date();
let options = { weekday: "long", month: "long", day: "numeric" };
$("#currentDay").text(currentDate.toLocaleDateString(undefined, options));

function resetColor() {
  let currentHour = new Date().getHours();

  function isElementPast(i, timeblockEl) {
    return i + 9 < currentHour;
  }

  function isElementPresent(i, timeblockEl) {
    return i + 9 === currentHour;
  }

  function isElementFuture(i, timeblockEl) {
    return i + 9 > currentHour;
  }

  $(".time-block")
    .filter(isElementPast)
    .addClass("past")
    .removeClass("present future");
  $(".time-block")
    .filter(isElementPresent)
    .addClass("present")
    .removeClass("past future");
  $(".time-block")
    .filter(isElementFuture)
    .addClass("future")
    .removeClass("present past");
}

resetColor();
setInterval(resetColor, 1000);
// setInterval( fn , miliseconds )

let schedule = {};

function test(event) {
  let foo = $(event.target).parent().parent().data("hour");
  let eventText = $(event.target).parent().siblings(".time-block");
  // need to link text to save button and local storage the whole line
  console.log(eventText);
}

$(".saveBtn").click(test);

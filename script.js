let currentDate = new Date();
let options = { weekday: "long", month: "long", day: "numeric" };
$("#currentDay").text(currentDate.toLocaleDateString(undefined, options));

for (let i = 9; i <= 12; i++) {
  let slot = document.getElementById(`${i}am_slot`);
  let storedItem = localStorage.getItem(`${i}`);
  slot.value = storedItem ? storedItem : "text to be scheduled";
}

for (let i = 1; i <= 5; i++) {
  let slot = document.getElementById(`${i}am_slot`);
  let storedItem = localStorage.getItem(`${i}`);
  slot.value = storedItem ? storedItem : "text to be scheduled";
}

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

let schedule = ["", "", "", "", "", "", "", ""];

function textAccept(event) {
  let slot = $(event.target).parent().parent().data("hour");
  let eventText = $(event.target)
    .parent()
    .siblings(".time-block")
    .children(".textColumn")
    .eq(0)
    .val();
  // need to link text to save button and local storage the whole line
  localStorage.setItem(`${slot}`, eventText);
  console.log(slot, eventText);
}

$(".saveBtn").click(textAccept);

function onloadHandler(){
  var available = document.getElementById("Available");
  available.addEventListener('click', simpleClick, false);

  var allweek = document.getElementById("AllWeek");
  allweek.addEventListener('click', eventClick, false);

  var weekdays = document.getElementById("WeekDays");
  weekdays.addEventListener('click', eventClick, false);

}

function simpleClick(e){
  var cb = document.getElementById("check"+ e.target.id);
  cb.click();
}

function eventClick(e){
  var event = document.createEvent("MouseEvents");
  event.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, 0, null);

  var cb = document.getElementById("check" + e.target.id);
  cb.dispatchEvent(event);
}

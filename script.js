// The current day and time shown in header
var currentDay = moment().format("dddd LL");
$("#currentDay").append(currentDay);

var currentTime = moment().format("LT");
$("#currentTime").append(currentTime);

let description = $(".description");
let saveButton = $(".saveBtn");
let currentHour = moment().hour();
let rowHour = $(this).siblings(".hour").text();

console.log(currentHour);

$(document).ready(function () {
    console.log("ready!");
    
    description.each(function () {
        let inputGroup = parseInt($(this).attr("id"));

        if (inputGroup === currentHour) {
            $(this).addClass("present");
            $(this).removeClass("future");
            $(this).removeClass("past");
        }
        else if (inputGroup < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
    });

    function saveTasks() {
        let task = $(this).parent().siblings(".description").val();
        console.log(task);

        if (task === "") {
            localStorage.setItem(rowHour, "");
        }
        else {
            localStorage.setItem(rowHour, task);
        }
    }

    saveButton.on("click", saveTasks);

});
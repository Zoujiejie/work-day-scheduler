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

description.each(function () {
    let timeBlock = parseInt($(this).attr("id"));

    if (timeBlock === currentHour) {
        $(this).addClass("present");
        $(this).removeClass("future");
        $(this).removeClass("past");
    }
    else if (timeBlock < currentHour) {
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

description.each(function() {

    for (let i = 0; i < localStorage.length; i++) {
        console.log(localStorage.getItem(localStorage.key(i)));

        let objectKey = localStorage.key(i);
        let taskValue = localStorage.getItem(objectKey);
        
        console.log(rowHour);
        console.log(typeof rowHour);
        console.log(objectKey);
        console.log(typeof objectKey);
        console.log(taskValue);
        console.log(typeof taskValue);
       
        if (objectKey === rowHour) {
            $(this).val(taskValue);
        }
       
    }
});

function saveTasks () {
    let currentTime = $(this).data("hour");
    let task = $(this).siblings(".description").val();

    console.log(currentTime);
    console.log(rowHour);
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
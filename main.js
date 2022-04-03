/*** Object Constructors ***/
function Appointment(time, date, location,type) {
  this.type = type;
  this.date = date;
  this.time = time;
  this.location = location;
}

var appts = []
var appt_1 = new Appointment("8:00","March 6");
var appt_2= new Appointment("8:00","March 7");
var appt_3 = new Appointment("8:00","March 8");
var appt_4 = new Appointment("8:00","March 9");
var appt_5 = new Appointment("8:00","March 10");
var appt_6 = new Appointment("8:00","March 11");
var appt_7 = new Appointment("8:00","March 12");
// till March 12
var appts = [appt_1,appt_2,appt_3,appt_4,appt_5,appt_6,appt_7];
// update appts

//assign global variable for counting appointments
let currAppCount = 0;
document.getElementById("appointmentCount").innerHTML = currAppCount;


function createList(){
    var first_row = document.getElementById("first-row");

    let newItem = document.createElement("li");
    newItem.innerHTML = '8:00 - 8:05';
    first_row.appendChild(newItem);
    // for loop over appts
    let newItem2 = document.createElement("li");
    newItem2.innerHTML = '<button class="booked">TCS Hall</button>';
    for (let i = 0; i < appts.length; i+= 1) {
        first_row.appendChild(newItem2);
    }
    return newItem2
}

//function to change color and register for calendar
function bookButtonr1c1() {
    document.getElementById("r1c1").className = "booked";
    confirm("Confirm your appointment: Tartan testing: Sunday, March 6, 2022 8:00 AM @TCS Hall (Tata Consultancy Services)")
    if (localStorage.getItem("currAppCount") != null)
    {
        local_storage_value = parseInt(localStorage.getItem("currAppCount"));
        currAppCount = 1+local_storage_value;
        displayCount(currAppCount);
        localStorage.setItem("currAppCount", currAppCount);
    }
    else
    {
        localStorage.setItem("currAppCount", currAppCount);
    }
    localStorage.setItem("appt1", "Tartan testing: Sunday, March 6, 2022 8:00 AM @TCS Hall (Tata Consultancy Services)")
}


function bookButtonr2c2() {
    document.getElementById("r2c2").className = "booked";
    confirm("Confirm your appointment: Tartan testing: Monday, March 7, 2022 8:05 AM @TCS Hall (Tata Consultancy Services)")
    if (localStorage.getItem("currAppCount") != null)
    {
        local_storage_value = parseInt(localStorage.getItem("currAppCount"));
        currAppCount = 1+local_storage_value;
        displayCount(currAppCount);
        localStorage.setItem("currAppCount", currAppCount);
    }
    else
    {
        localStorage.setItem("currAppCount", currAppCount);
    }
    localStorage.setItem("appt2", "Tartan testing: Monday, March 7, 2022 8:05 AM @TCS Hall (Tata Consultancy Services)")
}


function bookButtonr2c7() {
    document.getElementById("r2c7").className = "booked";
    confirm("Confirm your appointment: Tartan testing: Saturdat, March 12, 2022 8:05 AM @TCS Hall (Tata Consultancy Services)")
    if (localStorage.getItem("currAppCount") != null)
    {
        local_storage_value = parseInt(localStorage.getItem("currAppCount"));
        currAppCount = 1+local_storage_value;
        displayCount(currAppCount);
        localStorage.setItem("currAppCount", currAppCount);
    }
    else
    {
        localStorage.setItem("currAppCount", currAppCount);
    }
    localStorage.setItem("appt3", "Tartan testing: Saturdat, March 12, 2022 8:05 AM @TCS Hall (Tata Consultancy Services)")
}


function bookButtonr4c1() {
    document.getElementById("r4c1").className = "booked";
    confirm("Confirm your appointment: Tartan testing: Sunday, March 6, 2022 8:15 AM @TCS Hall (Tata Consultancy Services)")
    if (localStorage.getItem("currAppCount") != null)
    {
        local_storage_value = parseInt(localStorage.getItem("currAppCount"));
        currAppCount = 1+local_storage_value;
        displayCount(currAppCount);
        localStorage.setItem("currAppCount", currAppCount);
    }
    else
    {
        localStorage.setItem("currAppCount", currAppCount);
    }
    localStorage.setItem("appt4", "Tartan testing: Sunday, March 6, 2022 8:15 AM @TCS Hall (Tata Consultancy Services)")
}

function displayCount(passedInCount) {
    let displayCount = passedInCount
    document.getElementById("appointmentCount").innerHTML = displayCount;
}

function deleteCount() {
    clearAppt();
    if (localStorage.getItem("currAppCount") === null)
    {
        alert("no appointments yet!")
    }
    else
    {
        localStorage.setItem("currAppCount",0);
        displayCount(localStorage.getItem("currAppCount"));
    }
}



function clearAppt() {
    document.getElementById("appt1").innerHTML ="no appointment yet";
    document.getElementById("appt2").innerHTML ="no appointment yet";
    document.getElementById("appt3").innerHTML ="no appointment yet";
}


function updateCart(a,b,c) {
    var appts = JSON.parse(localStorage.getItem("appts"));

    document.getElementById("appt1").innerHTML = a;
    document.getElementById("appt2").innerHTML = b;
    document.getElementById("appt3").innerHTML = c;
    console.log(appts);
}

function updateCart2(a,b,c) {
    if (a === null)
    {
        let appt1 = "no appointment yet";
    }
    if (b === null)
    {
        let appt2 = "no appointment yet";
    }
    if (c === null)
    {
        let appt3 = "no appointment yet";
    }
    localStorage.setItem("appt1",appt1);
    localStorage.setItem("appt2",appt2);
    localStorage.setItem("appt3",appt3);
    document.getElementById("appt1").innerHTML = a;
    document.getElementById("appt2").innerHTML = b;
    document.getElementById("appt3").innerHTML = c;
}

displayCount(localStorage.getItem("currAppCount"));
updateCart2(localStorage.getItem("appt1"),localStorage.getItem("appt2"),localStorage.getItem("appt3"));





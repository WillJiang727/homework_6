/*** Object Constructors ***/
function Appointment(time, date, location, type){
  //type = "Tartan testing";
  this.time = time;
  this.date = date;
  this.location = location;
  this.type = type;
}

var appts = []
var appt_1 = new Appointment("8:00 - 8:05","March 6","TCS Hall","Tartan testing");
var appt_2 = new Appointment("8:05 - 8:10","March 7","East Campus Garage","Tartan testing");
var appt_3 = new Appointment("8:05 - 8:10","March 12","UHS","Booster shot (Pfizer)");

var appts = [appt_1,appt_2,appt_3];
// update appts

//assign global list for counting appointments
let currAppCount = [];
document.getElementById("appointmentCount").innerHTML = currAppCount.length;


// function createList(){
//     var first_row = document.getElementById("first-row");
//     let newItem = document.createElement("li");
//     newItem.innerHTML = '8:00 - 8:05';
//     first_row.appendChild(newItem);
//     // for loop over appts
//     let newItem2;
//     for (let i = 0; i < appts.length; i+= 1) {
//         newItem2 = document.createElement("li");
//          newItem2.innerHTML = '<button class="booked">TCS Hall</button>';
//         first_row.appendChild(newItem2);
//     }
//     return newItem2;
// }

//function to change color and register for calendar
function bookButton(array_id) {
    console.log(array_id);
    console.log(appts);
    var current_appointment = appts[array_id];

    //prevent booking twice
    if (document.getElementById("r1c"+array_id).className === "booked"){
        alert("this slot has already been booked!")
    }

    //when the button state is available
    else {
        //change button's class to booked
        document.getElementById("r1c"+array_id).className = "booked";
        confirm("Confirm your appointment: " + current_appointment.type+": "+current_appointment.date+", "+current_appointment.time+" @"+current_appointment.location)
        if (localStorage.currApps)
        {
            currAppCount = JSON.parse(localStorage.getItem("currApps"));
        }
        currAppCount.push(array_id);
        console.log(currAppCount);
        localStorage.setItem("currApps", JSON.stringify(currAppCount));
        console.log(current_appointment);
        localStorage.setItem("appt1", current_appointment.type+": "+current_appointment.date+","+current_appointment.time+" @"+current_appointment.location)
        displayCount();
    }
}


// function bookButtonr2c2() {
//     document.getElementById("r2c2").className = "booked";
//     confirm("Confirm your appointment: Tartan testing: Monday, March 7, 2022 8:05 AM @TCS Hall (Tata Consultancy Services)")
//     if (localStorage.getItem("currAppCount") != null)
//     {
//         local_storage_value = parseInt(localStorage.getItem("currAppCount"));
//         currAppCount = 1+local_storage_value;
//         displayCount(currAppCount);
//         localStorage.setItem("currAppCount", currAppCount);
//     }
//     else
//     {
//         localStorage.setItem("currAppCount", currAppCount);
//     }
//     localStorage.setItem("appt2", "Tartan testing: Monday, March 7, 2022 8:05 AM @TCS Hall (Tata Consultancy Services)")
// }


// function bookButtonr2c7() {
//     document.getElementById("r2c7").className = "booked";
//     confirm("Confirm your appointment: Tartan testing: Saturdat, March 12, 2022 8:05 AM @TCS Hall (Tata Consultancy Services)")
//     if (localStorage.getItem("currAppCount") != null)
//     {
//         local_storage_value = parseInt(localStorage.getItem("currAppCount"));
//         currAppCount = 1+local_storage_value;
//         displayCount(currAppCount);
//         localStorage.setItem("currAppCount", currAppCount);
//     }
//     else
//     {
//         localStorage.setItem("currAppCount", currAppCount);
//     }
//     localStorage.setItem("appt3", "Tartan testing: Saturdat, March 12, 2022 8:05 AM @TCS Hall (Tata Consultancy Services)")
// }



//create a function that loads count in local storage when page loads
function displayCount() {
    let displayCount = [];
    if(localStorage.currApps)
    {
        displayCount = JSON.parse(localStorage.getItem("currApps"));
        console.log(displayCount);
        console.log(displayCount.length);
        //console.log(displayCount);
    }
    else
    {
        let currApps = []
    }
    document.getElementById("appointmentCount").innerHTML = displayCount.length;
}


function deleteCount() {
    // set it to empty list
    localStorage.setItem("currApps", []);
    document.getElementById("appt1").innerHTML ="no appointment yet";
    document.getElementById("appt2").innerHTML ="no appointment yet";
    document.getElementById("appt3").innerHTML ="no appointment yet";

    {
        localStorage.setItem("currAppCount",0);
        displayCount();
    }
}



function displayApptText(current_appointment)
{
    return current_appointment.type+": "+current_appointment.date+", "+current_appointment.time+" @"+current_appointment.location;
}



// function updateCart2(a,b,c) {
//     var appts = JSON.parse(localStorage.getItem("appts"));

//     document.getElementById("appt1").innerHTML = a;
//     document.getElementById("appt2").innerHTML = b;
//     document.getElementById("appt3").innerHTML = c;
//     console.log(appts);
// }


function updateCart() {
    if (localStorage.currApps)
    {
        if(document.getElementById("appt1")!==null)
        {
            current_appointments = JSON.parse(localStorage.getItem("currApps"));
            for (let i = 0; i < current_appointments.length; i+= 1)
            {
                // console.log(current_appointments[i]);
                var array_value = current_appointments[i];
                document.getElementById("appt"+(i+1)).innerHTML = displayApptText(appts[array_value]);
            }
        }
    }
}
    //localStorage.setItem("appt1",appt1);
    //localStorage.setItem("appt2",appt2);
    //localStorage.setItem("appt3",appt3);
   // document.getElementById("appt1").innerHTML = appt1;
    //document.getElementById("appt2").innerHTML = b;
    //document.getElementById("appt3").innerHTML = c;



displayCount();
updateCart();

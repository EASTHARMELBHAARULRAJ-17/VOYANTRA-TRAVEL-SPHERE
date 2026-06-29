const params = new URLSearchParams(window.location.search);

document.getElementById("country").value =
params.get("country") || "";

document.getElementById("destination").value =
params.get("destination") || "";

document.getElementById("price").value =
params.get("price") || "";

document.getElementById("month").value =
params.get("month") || "";

const country = params.get("country") || "";

const dob = document.querySelector("input[name='dob']");
if(dob){
dob.addEventListener("change", function () {

    const today = new Date();
    const selectedDate = new Date(this.value);

    if (selectedDate.getFullYear() >= today.getFullYear()) {
        alert("Date of Birth cannot be in the current year or a future year.");
        this.value = "";
    }
});
}

function calculateBooking() {

    let a = Number(document.getElementById("adults").value || 0);
    let c = Number(document.getElementById("children").value || 0);
    let p = Number(document.getElementById("price").value || 0);

    let g = a + c;
    let t = g * p;

    document.getElementById("guests").value = g;
    document.getElementById("total").value = t;

}


const marchmaysepnov = [3,4,5,9,10,11];
const maysep = [5,6,7,8,9];
const apriljunesepoct = [4,5,6,9,10];
const apriloct = [4,5,6,7,8,9,10];
const marchmayoctnov = [3,4,5,10,11];
const novapril = [11,12,1,2,3,4];
const sepmarch = [9,10,11,12,1,2,3];
const octmarch = [10,11,12,1,2,3];
const octjune = [10,11,12,1,2,3,4,5,6];

const validMonths = {
    "Bhutan": marchmaysepnov,
    "Brazil": maysep,
    "France": apriljunesepoct,
    "Greece": apriloct,
    "Italy": apriljunesepoct,
    "Japan": marchmayoctnov,
    "New Zealand": novapril,
    "Himachal Pradesh": octjune,
    "Kerala": sepmarch,
    "Rajasthan": octmarch,
    "Uttar Pradesh": octmarch,
    "Kanya Kumari": octmarch,
    "Kodaikanal": octjune,
    "Madurai": octmarch,
    "Ooty": octjune,
    "Thanjavur": octmarch
};

const destination=document.getElementById("destination");
const arrival = document.getElementById("arrival_date");
const leaving = document.getElementById("leaving_date");
const countryName = document.getElementById("country");

if (countryName && arrival && leaving) {

    const countryValue=countryName.value;

    // Arrival Date Check
    arrival.addEventListener("change", function () {

        const today = new Date().toISOString().split("T")[0];
        if(this.value < today){
            alert("Arrival Date Cannot Be In The Past.")
            this.value = "";
        }

        let month = new Date(this.value).getMonth() + 1;

        if (validMonths[countryValue] && !validMonths[countryValue].includes(month)) {
            alert("Invalid Travel Month For " + country);
            this.value = "";
            return;
        }

        leaving.value = "";
    });

    // Leaving Date Check
    leaving.addEventListener("change", function () {

        let leaveMonth = new Date(this.value).getMonth() + 1;
        let arrivalDate = new Date(arrival.value);
        let leavingDate = new Date(this.value);

        if (validMonths[countryValue] && !validMonths[countryValue].includes(leaveMonth)) {
            alert("Invalid Travel Month For " + country);
            this.value = "";
            return;
        }

        if (arrival.value !== "" && leavingDate <= arrivalDate) {
            alert("Leaving Date Must Be After Arrival Date");
            this.value = "";
        }
    });
}


const passport = document.querySelector("input[name='passport']");

const indiaPlaces = [
    "Kerala",
    "Ooty",
    "Kodaikanal",
    "Madurai",
    "Thanjavur",
    "Rajasthan",
    "Uttar Pradesh",
    "Himachal Pradesh",
    "Kanya Kumari"
];

if (indiaPlaces.includes(countryName)) {
    passport.required = false;
}
else{
    passport.required = true;
}


let sqrtTextBox = document.querySelector("#sqrtTextBox");
let sqrtSubmit = document.querySelector("#sqrtSubmit");
let sqrtResult = document.querySelector("#sqrtResult");
let sqrtAnswer = "";

let powerX = document.querySelector("#powerX");
let powerY = document.querySelector("#powerY");
let powerSubmit = document.querySelector("#powerSubmit");
let powerResult = document.querySelector("#powerResult");
let powerAnswer = "";

function sqrtCalc() {
    sqrtAnswer = Math.sqrt(Number(sqrtTextBox.value));
    if (!sqrtAnswer && sqrtAnswer !== 0) {
        sqrtAnswer = "NaH (Not a Humber)";

    };
    sqrtResult.innerHTML = `The square root of ${sqrtTextBox.value} is ${sqrtAnswer}`;

};
function powerCalc() {
    powerAnswer = Number(powerX.value) ** Number(powerY.value);
    // powerResult.style.textDecoration = overline;
    powerResult.innerHTML = `${powerX.value} to the power of ${powerY.value} is ${powerAnswer}`;

};

sqrtSubmit.addEventListener("click", sqrtCalc);
powerSubmit.addEventListener("click", powerCalc);
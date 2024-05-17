
let mtpTextBox = document.querySelector("#mtpTextBox")

let mtpTT = document.querySelector("#mtpTT")

let mtpResult = document.querySelector("#mtpResult")

let mtpSubmit = document.querySelector("#mtpSubmit")



let num1 = 0;
let num2 = 0;

const refreshNums = () => {
    mtpTextBox.value = "";
    num1 = Math.floor(Math.random() * 12) + 1;
    num2 = Math.floor(Math.random() * 12) + 1;
    mtpTT.innerHTML = `${num1} × ${num2}`;
};

const checkNums = () => {
    if (mtpTextBox.value == num1*num2) {
        mtpResult.innerHTML = `Correct! ${num1} × ${num2} IS in fact ${num1*num2}`
        mtpResult.style.color = "green"
        refreshNums();

    }
    else if (mtpTextBox != num1*num2) {
        mtpResult.innerHTML = `Wrong! ${num1} × ${num2} IS NOT ${mtpTextBox.value}, it is actually ${num1*num2}`
        mtpResult.style.color = "red"
        refreshNums();
    }
}

refreshNums()





mtpSubmit.addEventListener('click', checkNums)
mtpTextBox.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkNums()
      }
})

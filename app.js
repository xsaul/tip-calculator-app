let billInput = document.getElementById("bill");
let custom = document.getElementById("custom");
let peopleInput = document.getElementById("numberpeople");

let tip = document.getElementById("tipAmount");
let total = document.getElementById("total");

let resetBtn = document.getElementById("reset");
let btnFive = document.getElementById("five");
let btnTen = document.getElementById("ten");
let btnFifteen = document.getElementById("fifteen");
let btnTwentyFive = document.getElementById("twentyfive");
let btnFifty = document.getElementById("fifty");

alert("First write the Bill and Number of people \nAnd then select the Tip %");

btnFive.addEventListener("click", () => {
  btnFive.style.color = "hsl(183, 100%, 15%)";
  btnFive.style.background = "hsl(172, 44%, 56%)";
  if (peopleInput.value >= 1) {
    let tipPerPerson = ((billValue * 0.05) / peopleValue).toFixed(2);
    let tipAmount = parseFloat((billValue * 0.05).toFixed(2));
    let totalPerPerson = parseFloat(
      ((billValue + tipAmount) / peopleValue).toFixed(2)
    );
    tip.innerHTML = "$" + tipPerPerson;
    total.innerText = "$" + totalPerPerson;
    console.log(total);
  }
});

btnTen.addEventListener("click", () => {
  btnTen.style.color = "hsl(183, 100%, 15%)";
  btnTen.style.background = "hsl(172, 44%, 56%)";
  if (peopleInput.value >= 1) {
    let tipPerPerson = ((billValue * 0.1) / peopleValue).toFixed(2);
    let tipAmount = parseFloat((billValue * 0.1).toFixed(2));
    let totalPerPerson = ((billValue + tipAmount) / peopleValue).toFixed(2);
    tip.innerHTML = "$" + tipPerPerson;
    total.innerText = "$" + totalPerPerson;
    console.log(total);
  }
});

btnFifteen.addEventListener("click", () => {
  btnFifteen.style.color = "hsl(183, 100%, 15%)";
  btnFifteen.style.background = "hsl(172, 44%, 56%)";
  if (peopleInput.value >= 1) {
    let tipPerPerson = ((billValue * 0.15) / peopleValue).toFixed(2);
    let tipAmount = parseFloat((billValue * 0.15).toFixed(2));
    let totalPerPerson = parseFloat(
      ((billValue + tipAmount) / peopleValue).toFixed(2)
    );
    tip.innerText = "$" + tipPerPerson;
    total.innerText = "$" + totalPerPerson;
  }
});

btnTwentyFive.addEventListener("click", () => {
  btnTwentyFive.style.color = "hsl(183, 100%, 15%)";
  btnTwentyFive.style.background = "hsl(172, 44%, 56%)";
  if (peopleInput.value >= 1) {
    let tipPerPerson = ((billValue * 0.25) / peopleValue).toFixed(2);
    let tipAmount = parseFloat((billValue * 0.25).toFixed(2));
    let totalPerPerson = parseFloat(
      ((billValue + tipAmount) / peopleValue).toFixed(2)
    );
    tip.innerHTML = "$" + tipPerPerson;
    total.innerText = "$" + totalPerPerson;
  }
});

btnFifty.addEventListener("click", () => {
  btnFifty.style.color = "hsl(183, 100%, 15%)";
  btnFifty.style.background = "hsl(172, 44%, 56%)";
  if (peopleInput.value >= 1) {
    let tipPerPerson = ((billValue * 0.5) / peopleValue).toFixed(2);
    let tipAmount = parseFloat((billValue * 0.5).toFixed(2));
    let totalPerPerson = parseFloat(
      ((billValue + tipAmount) / peopleValue).toFixed(2)
    );
    tip.innerHTML = "$" + tipPerPerson;
    total.innerText = "$" + totalPerPerson;
  }
});

custom.addEventListener("input", () => {
  if (peopleInput.value >= 1) {
    let tipPerPerson = (
      (billValue * (custom.value * 0.01)) /
      peopleValue
    ).toFixed(2);
    let tipAmount = parseFloat((billValue * (custom.value * 0.01)).toFixed(2));
    let totalPerPerson = parseFloat(
      ((billValue + tipAmount) / peopleValue).toFixed(2)
    );
    tip.innerHTML = "$" + tipPerPerson;
    total.innerText = "$" + totalPerPerson;
  }
});

billInput.addEventListener("input", billFunction);

peopleInput.addEventListener("input", peopleFunction);

function billFunction() {
  billValue = parseFloat(bill.value);
  console.log(billValue);
}

function peopleFunction() {
  peopleValue = parseFloat(peopleInput.value);
  console.log(peopleValue);
}

function reset() {
  bill.value = "";
  custom.value = "";
  peopleInput.value = "";
  tip.textContent = "$0.00";
  total.textContent = "$0.00";
}

resetBtn.addEventListener("click", reset);

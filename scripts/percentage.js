const percentageElem = document.querySelector(".percentage");

let currentValue = 0; //start
const targetValue = 85; //target

function updatePercentage() {
  if (currentValue < targetValue) {
    currentValue++;

    // Number format so that it has two digits at all times (ie before 10)
    let formattedValue = currentValue < 10 ? `0${currentValue}` : currentValue;
    percentageElem.innerText = `${formattedValue}%`;

    // speed of animation
    setTimeout(updatePercentage, 50); // in ms
  }
}

window.onload = updatePercentage;

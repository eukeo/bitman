let guesses = 5;
let winGuesses = 6;
let myWord = ["PIXELS"];
let wordArray = "PIXELS".split("");
let prompt = document.querySelector("p");

// Button and Letter function
let buttons = document.getElementById("letters");
buttons.addEventListener("click", eventClick);

function eventClick(event) {
  // Correct and Incorrect
  if (wordArray.includes(event.target.textContent)) {
    let divId = wordArray.indexOf(event.target.textContent);
    let divLetter = document.getElementById(`${divId}`);
    divLetter.textContent = event.target.textContent;
    event.target.style.backgroundColor = "#35ffa2";
    event.target.disabled = true;
    prompt.innerHTML = "Correct!";
    winGuesses -= 1;
  } else {
    guesses -= 1;
    event.target.style.backgroundColor = "#0091cd";
    event.target.disabled = true;
    prompt.innerHTML = "Incorrect!";
    counter.innerHTML = guesses + " lives left!";

    // Win/Lose Function
  }
  if (guesses === 0) {
    prompt.innerHTML = "You Lose...";
    buttons.removeEventListener("click", eventClick);
  }
  if (winGuesses === 0) {
    prompt.innerHTML = "You Win!";
    buttons.removeEventListener("click", eventClick);
  }
}

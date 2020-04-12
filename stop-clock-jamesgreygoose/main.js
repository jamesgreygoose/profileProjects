/* 
# Make a Stop Clock

- Make the hand tick round the clock face every second.
- If you've forgotten how then try this website https://www.google.com
- If have finished then try starting on the click of a button.
- And if you finish that then try stopping the clock with a button!

   Happy coding!
*/

//Set global vars
let handAngle = 0;
let theIntervalID;
// Make button listeners
let btnStart = document.querySelector("#startBtn");
btnStart.addEventListener("click", startClock);
let btnStop = document.querySelector("#stopBtn");
btnStop.addEventListener("click", stopClock);
// Start the clock on button click
function startClock() {
  theIntervalID = setInterval(changeClock, 1000);
  // Change the clock from within setInterval
  function changeClock() {
    handAngle += 6;
    document.querySelector("#hand").style.transform = `rotate(${handAngle}deg)`;
  }
}
// Stop the clock on button click.
function stopClock() {
  clearInterval(theIntervalID);
}

//Reset the clock.
//Link button qs
//Event listener
// Link to stop function.
// set rotate to 0

let btnReset = document.querySelector("#resetBtn");
btnReset.addEventListener("click", resetClock);
console.log(btnReset);

function resetClock() {
  stopClock();
  document.querySelector("#hand").style.transform = `rotate(0deg)`;
}

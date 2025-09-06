const displayText = document.getElementById("display-text");
const userInput = document.getElementById("user-input");
const result = document.getElementById("result");
const startBtn = document.getElementById("startBtn");
const submitBtn = document.getElementById("submitBtn");

const sentences = [
  "Ignore text lines that are copies of other lines.",
  "The program offers several options for customizing how line randomization is performed.",
  "In this example, we mix a list of sports exercises to create a new training program for today.",
  " To keep the song topics, we set the group randomization order to 2.",
  "We also remove repeated exercises and discard empty lines that somehow made",
  " When topics are randomized, they can no longer be just memorized by their order but require more thorough understanding.",
  " The free plan doesn't use cookies and don't store session information in cookies",
  "The premium and team plans use cookies to store session information so that you are always logged in. ",
  "At Browserling we love to make people's lives easier, so we created this collection of online text tools"
]

let startTime, endTime;
userInput.disabled = true;

startBtn.addEventListener('click', () => {
  let randomIndex = Math.floor(Math.random() * sentences.length);
  displayText.textContent = sentences[randomIndex];
  startBtn.style.display = "none";
  submitBtn.style.display = "inline-block";
  result.innerHTML  = "";
  userInput.value = "";
  userInput.disabled = false;
  userInput.focus();
  startTime = new Date().getTime();
})

submitBtn.addEventListener('click', () => {

  if(userInput.value.trim() === "") return;
  endTime = new Date().getTime();
  const totalTime = ((endTime - startTime) / 1000).toFixed(2);

  const original = displayText.textContent.trim().split('');
  const typed = userInput.value.trim().split('');

  let correctWord = 0;

  original.forEach((word,index) => {
    if(word === typed[index]){
      correctWord++;
    }
  });

  const totalTyped = typed.length;
  const incorrectWords = totalTyped - correctWord;

  const speed = ((typed.length / totalTime) * 60).toFixed(2);

   result.innerHTML = `
     <div>
        <span>Typing Speed : <strong>${speed}</strong></span><br>
        <span>Time : <strong>${totalTime} sec</strong></span>
      </div>
      <div>
        <span>Correct Words : <strong>${correctWord}</strong></span><br>
        <span>Incorrect Words : <strong>${incorrectWords}</strong></span>
      </div>
   `
  startBtn.style.display = "inline-block";
  submitBtn.style.display = "none";
  userInput.disabled = true;
})


let words = [
  "Hello",
  "Coding",
  "Infinity",
  "Avengers",
  "Roll",
  "Rust",
  "Test",
  "Playing",
  "Swimming",
  "Diving",
  "Eating",
  "Runner",
  "Racer",
  "Programmer",
  "Handler",
  "Car",
  "Bird",
  "Labtop",
  "Computer",
  "Motor",
  "Script",
  "Clean",
  "Button",
  "colon",
  "Variable",
  "Array",
  "Function",
  "Loop",
  "Helping",
  "Code",
];

let lvls = {
  "Easy": 5,
  "Normal": 3,
  "Hard": 2,
};

let defaultLevelName = "Easy";
let defaultLevelSeconds = lvls[defaultLevelName];

let startBtn = document.querySelector(".start");
let lvlSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let upcomingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMsg = document.querySelector(".finish");


lvlSpan.innerHTML = defaultLevelName;

secondsSpan.innerHTML = defaultLevelSeconds;
timeLeftSpan.innerHTML = defaultLevelSeconds
scoreTotal.innerHTML = words.length
input.onpaste = function (){
  return false
}

startBtn.onclick = function(){
  this.remove();
  input.focus();
  genWords()
}

function genWords(){
  let randomWord = words[Math.floor(Math.random() * words.length)];

let wordInedx = words.indexOf(randomWord);

words.splice(wordInedx , 1);

theWord.innerHTML = randomWord;

upcomingWords.innerHTML = '';

for(let i = 0 ; i < words.length ; i++)
{
  let div = document.createElement("div");
  let txt = document.createTextNode(words[i]);
  div.appendChild(txt);
  upcomingWords.appendChild(div)
}
startPlay();
}

function startPlay(){
  timeLeftSpan.innerHTML = defaultLevelSeconds;
  let start  = setInterval(() => {
    timeLeftSpan.innerHTML--; 

    if(timeLeftSpan.innerHTML === "0"){
      clearInterval(start);

      if(theWord.innerHTML.toLocaleLowerCase() ===input.value.toLocaleLowerCase() ){
  input.value = '';
        scoreGot.innerHTML++;
    if(words.length > 0){
      genWords();
    }else{
         let span = document.createElement("span");
         span.className = "good";
         let spanTxt = document.createTextNode("Congrats");
         span.appendChild(spanTxt);
         finishMsg.appendChild(span);
         upcomingWords.remove();
    }
    
      }else{
        let span = document.createElement("span");
        span.className = 'bad';
        let spanTxt = document.createTextNode("Game Over");
        span.appendChild(spanTxt)
        finishMsg.appendChild(span);
      }
    }
  },1000)
}
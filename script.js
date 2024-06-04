let secretNumber = Math.trunc(Math.random()*20)+1
let score=20
let highScore=0

const displayMessage = function(message){
    document.querySelector('.message').textContent=message
}

document.querySelector('.check').addEventListener('click',function(){
const guess = Number(document.querySelector('.guess').value)
console.log(guess,typeof(guess))

//when there is no input
if(!guess){
    displayMessage('No Number')
}

//when input is correct
else if(guess===secretNumber){
 displayMessage('Correct Number')
 document.querySelector('.number').textContent=secretNumber
 if(score>highScore){
    highScore=score
    document.querySelector('.highscore').textContent=highScore
 }
}
else if(guess!== secretNumber){
    if (score > 1) {
    displayMessage(guess>secretNumber ?'Too high':'Too Low')
    score--
    document.querySelector('score').textContent=score
}
    else{
        displayMessage('💥 You lost the game!!');
        document.querySelector('.score').textContent = 0;
    }
}
})

document.querySelector('.again').addEventListener('click',function(){
    score=20
    secretNumber=Math.trunc(Math.random()*20)+1
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
})

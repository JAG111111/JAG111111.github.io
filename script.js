let randomnumber = Math.floor(Math.random() * 100) + 1;

function makeGuess() {
    const userGuess = document.getElementById('guess-input').value;
    const message = document.getElementById('message');
    if(userGuess ==randomnumber){
        message.textContent = "Good Job!";
        message.style.color = 'blue';
        resetGame();
    }else if(userGuess > randomnumber) {
        message.textContent = "Too High! Bad Job";
        message.style.color = 'red';
    }else if (userGuess < randomnumber) {
        message.textContent = "Too Low! Bad Job";
        message.style.color = 'red';    
    }

}
function resetGame(){
    randomnumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('guess-input').value ='';
}
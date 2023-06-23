const snakeBtn = document.getElementById("snake");
const waterBtn = document.getElementById("water");
const gunBtn = document.getElementById("gun");
let resultDiv = document.getElementById("results");
result = "";
let YourScore = 0,compScore = 0;
snakeBtn.addEventListener("click", function() {
    funGame("Snake")
});
waterBtn.addEventListener("click", function() {
    funGame("Water")
});
gunBtn.addEventListener("click", function() {
    funGame("Gun")
});


const funGame = (userChoice) => {
    let choices = ["Snake","Water","Gun"];
    let index = Math.floor(Math.random() * choices.length);
    let compChoice = choices[index];
    if(userChoice === compChoice){
        result = "Its a tie";
        YourScore += 1;
        compScore += 1;
    }
    else if((userChoice === "Snake" && compChoice === "Water")||(userChoice === "Water" && compChoice === "Gun")||(userChoice === "Gun" && compChoice === "Snake")){
        result ="You Win..."
        YourScore += 2;
    }
    else{
        result = "Computer Win..."
        compScore += 2;
    }

    resultDiv.innerHTML = `<p>Your Choice: ${userChoice}</P>
                        <p>Computer's Choice: ${compChoice}</p>
                        <p>Result: <b>${result}<b></p><br>
                        <p>Your Score: ${YourScore}</p>
                        <p>Computer's Score: ${compScore}</p>`;
}

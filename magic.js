function myNameFunction () {
    let userName = prompt("Hello, please enter your name!");
    if (userName === '') {
        prompt("Hello, please enter your name!");
    } else {
        document.getElementById("yourName").innerHTML = `Welcome, dear ${userName}!`;
    }
}

function myQuestionFunction() {
    let userQuestion = prompt("Ask me anything you want to know!", "Ex: Am I going to Ibiza tonight?");
    if (userQuestion === '') {
        prompt("Ask me anything you want to know!")
    } else {
        let randomNumber = Math.floor(Math.random() * 8)
        let eightBall = '';

        if (randomNumber === 0) {
            eightBall = 'It is certain'
        } else if (randomNumber === 1) {
            eightBall = 'It is decidedly so'
        } else if (randomNumber === 2) {
            eightBall = 'Reply hazy try again'
        } else if (randomNumber === 3) {
            eightBall = 'Cannot predict now'
        } else if (randomNumber === 4) {
            eightBall = 'Do not count on it'
        } else if (randomNumber === 5) {
            eightBall = 'My sources say no'
        } else if (randomNumber === 6) {
            eightBall = 'Outlook not so good'
        } else if (randomNumber === 7) {
            eightBall = 'Signs point to yes'
        }
        else {
            console.log('Nothing')
        }
        document.getElementById("question").innerHTML = `Your question is: ${userQuestion}`;
        document.getElementById("ballAnswer").innerHTML = `The Magic 8 Ball answer is: ${eightBall}`;
    }
}

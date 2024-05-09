function playGame(playerChoice) {
    var choices = ["rock", "paper"];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    var result = "";

    if (playerChoice === computerChoice) {
        result = "Hòa!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "Bạn thắng!";
    } else {
        result = "Bạn thua!";
    }

    document.getElementById("result").innerHTML = "Bạn chọn: " + playerChoice + ". Máy tính chọn: " + computerChoice + ". Kết quả: " + result;
}

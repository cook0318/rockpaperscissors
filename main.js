// $("#title").css("border","3px solid blue")

let options;
options = ["rock", "paper", "scissors"]


function game(choice){
    let opponent = options[Math.floor(Math.random() * options.length)]
    if (choice == "rock"){
        if (opponent == "rock"){
            console.log(opponent, "draw");
        } else if (opponent == "scissors"){
            console.log(opponent, "win");
        } else if (opponent == "paper") {
            console.log(opponent, "lose")
        }

    }




    if (choice == "paper"){
        if (opponent == "rock"){
            console.log(opponent, "win");
        } else if (opponent == "scissors"){
            console.log(opponent, "lose");
        } else if (opponent == "paper") {
            console.log(opponent, "draw")
        }

    }




    if (choice == "scissors"){
        if (opponent == "rock"){
            console.log(opponent, "lose");
        } else if (opponent == "scissors"){
            console.log(opponent, "draw");
        } else if (opponent == "paper") {
            console.log(opponent, "win")
        }

    }
}





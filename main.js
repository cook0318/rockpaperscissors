// $("#title").css("border","3px solid blue")

let options;
options = ["rock", "paper", "scissors"]


function game(choice){
    let opponent = options[Math.floor(Math.random() * options.length)]
    if (choice == "rock"){
        if (opponent == "rock"){
            console.log(opponent, "draw");
            $("#opponentChoice").css("background-image", "url(pics/rock.png)")
            draw(choice);
        } else if (opponent == "scissors"){
            console.log(opponent, "win");
            $("#opponentChoice").css("background-image", "url(pics/scissors.jpg)")
            win(choice, opponent);
        } else if (opponent == "paper") {
            console.log(opponent, "lose")
            $("#opponentChoice").css("background-image", "url(pics/paper.png)")
            lose(choice, opponent);
        }

    }


    if (choice == "paper"){
        if (opponent == "rock"){
            console.log(opponent, "win");
            $("#opponentChoice").css("background-image", "url(pics/rock.png)")
            win(choice, opponent);
        } else if (opponent == "scissors"){
            console.log(opponent, "lose");
            $("#opponentChoice").css("background-image", "url(pics/scissors.jpg)")
            lose(choice, opponent);
        } else if (opponent == "paper") {
            console.log(opponent, "draw")
            $("#opponentChoice").css("background-image", "url(pics/paper.png)")
            draw(choice);
        }

    }




    if (choice == "scissors"){
        if (opponent == "rock"){
            console.log(opponent, "lose");
            $("#opponentChoice").css("background-image", "url(pics/rock.png)")
            lose(choice, opponent);
        } else if (opponent == "scissors"){
            console.log(opponent, "draw");
            $("#opponentChoice").css("background-image", "url(pics/scissors.jpg)")
            draw(choice);
        } else if (opponent == "paper") {
            console.log(opponent, "win")
            $("#opponentChoice").css("background-image", "url(pics/paper.png)")
            win(choice, opponent);
        }

    }
}


function makeBlue(choice){
    $('#' + choice).css("background-color", "blue")
}
function makeRed(choice1, choice2){
    $('#' + choice1).css("background-color", "red")
    $('#' + choice2).css("background-color", "red")
}




function win(choice, opponent){
    $("#result").html("You chose " + choice + ". They chose " + opponent + ". You win!");
}

function lose(choice, opponent){
    $("#result").html("You chose " + choice + ". They chose " + opponent + ". You lose :(");
}

function draw(choice, opponent){
    $("#result").html("You both chose " + choice + ". Draw.");
}
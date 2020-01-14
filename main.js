// $("#title").css("border","3px solid blue")

let options;
options = ["rock", "paper", "scissors"]

let totalWins=0;

let totalLosses=0;

function addPaper(){
    options.push("paper");
}
function addRock(){
    options.push("rock");
}
function addScissors(){
    options.push("scissors")
}

function game(choice){
    cycle();
    let opponent = options[Math.floor(Math.random() * options.length)]
    if (choice == "rock"){
        if (opponent == "rock"){
            console.log(opponent, "draw");
            $("#opponentChoice").css("background-image", "url(icons/rock.png)")
            draw(choice);
        } else if (opponent == "scissors"){
            console.log(opponent, "win");
            $("#opponentChoice").css("background-image", "url(icons/scissors.png)")
            win(choice, opponent);
        } else if (opponent == "paper") {
            console.log(opponent, "lose")
            $("#opponentChoice").css("background-image", "url(icons/paper.png)")
            lose(choice, opponent);
        }
        addPaper();
    }


    if (choice == "paper"){
        if (opponent == "rock"){
            console.log(opponent, "win");
            $("#opponentChoice").css("background-image", "url(icons/rock.png)")
            win(choice, opponent);
        } else if (opponent == "scissors"){
            console.log(opponent, "lose");
            $("#opponentChoice").css("background-image", "url(icons/scissors.png)")
            lose(choice, opponent);
        } else if (opponent == "paper") {
            console.log(opponent, "draw")
            $("#opponentChoice").css("background-image", "url(icons/paper.png)")
            draw(choice);
        }
        addScissors();
    }




    if (choice == "scissors"){
        if (opponent == "rock"){
            console.log(opponent, "lose");
            $("#opponentChoice").css("background-image", "url(icons/rock.png)")
            lose(choice, opponent);
        } else if (opponent == "scissors"){
            console.log(opponent, "draw");
            $("#opponentChoice").css("background-image", "url(icons/scissors.png)")
            draw(choice);
        } else if (opponent == "paper") {
            console.log(opponent, "win")
            $("#opponentChoice").css("background-image", "url(icons/paper.png)")
            win(choice, opponent);
        }
        addRock();
    }
    
}


function makeBlue(choice){
    $('#' + choice).css("background-color", "blue")
}
function makeOrange(choice1, choice2){
    $('#' + choice1).css("background-color", "orange")
    $('#' + choice2).css("background-color", "orange")
}

function removeQuestion(){
    $("#questionMark").css("display", "none")
}

function win(choice, opponent){
    $("#result").html("You chose " + choice + ". They chose " + opponent + ". You win!");
    addWin();
}

function lose(choice, opponent){
    $("#result").html("You chose " + choice + ". They chose " + opponent + ". You lose :(");
    addLoss();
}

function draw(choice, opponent){
    $("#result").html("You both chose " + choice + ". Draw.");
    
}

function addWin(){
    totalWins++;
    console.log(totalWins);
    totalLosses = 0;
    $("#totalWins").html(totalWins);
    $("#totalLosses").html(totalLosses);
}
function addLoss(){
    totalLosses++;
    console.log(totalLosses);
    totalWins = 0;
    $("#totalWins").html(totalWins);
    $("#totalLosses").html(totalLosses);
};

function changeName(){
    let oppName = prompt("What's your opponent's name?");
    if (oppName != ""){
    $("#oppName").html(oppName + "'s Choice:");
    }
};

function cycle(){
    $("#opponentChoice").addClass("cycle");
}
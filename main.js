// tracker for all results
let totalWins=0;
let totalLosses=0;
let wins=0;
let losses=0;

// array that opponent will randomly chose
let options;
options = ["rock", "paper", "scissors"]

/** everytime a user clicks a choice, the opponent adds whatever hand beats them to it's array of choices. 
 * for example, if a user clicks scissors 3 times in row, 3 'rock' will be added to the array, making the array list
 * now equal to rock, rock, rock rock, paper scissors. so if a user spams a button or tends to always chose one choice,
 * the opponent will chose the better hand more often. * 
 * */ 

function addPaper(){
    options.push("paper");
}
function addRock(){
    options.push("rock");
}
function addScissors(){
    options.push("scissors")
}

// function that begins game when user clicks choice.
function game(choice){
    cycle();
    
    // randomly choses from options array above:
    let opponent = options[Math.floor(Math.random() * options.length)]

    // based on user and opponent choice, either the draw(), win(), or lose() function is triggered.
    if (choice == "rock"){
        if (opponent == "rock"){
            $("#opponentChoice").css("background-image", "url(icons/rock.png)")
            draw(choice);
        } else if (opponent == "scissors"){
            $("#opponentChoice").css("background-image", "url(icons/scissors.png)")
            win(choice, opponent);
        } else if (opponent == "paper") {
            $("#opponentChoice").css("background-image", "url(icons/paper.png)")
            lose(choice, opponent);
        }
        // user chose rock, so another 'paper' is added to array
        addPaper();
    }

    // same as above for paper
    if (choice == "paper"){
        if (opponent == "rock"){
            $("#opponentChoice").css("background-image", "url(icons/rock.png)")
            win(choice, opponent);
        } else if (opponent == "scissors"){
            $("#opponentChoice").css("background-image", "url(icons/scissors.png)")
            lose(choice, opponent);
        } else if (opponent == "paper") {
            $("#opponentChoice").css("background-image", "url(icons/paper.png)")
            draw(choice);
        }
        addScissors();
    }

    // same as above for scissors
    if (choice == "scissors"){
        if (opponent == "rock"){
            $("#opponentChoice").css("background-image", "url(icons/rock.png)")
            lose(choice, opponent);
        } else if (opponent == "scissors"){
            $("#opponentChoice").css("background-image", "url(icons/scissors.png)")
            draw(choice);
        } else if (opponent == "paper") {
            $("#opponentChoice").css("background-image", "url(icons/paper.png)")
            win(choice, opponent);
        }
        addRock();
    }
    setTimeout(endCycle, 400)
}

// these two functions just help to show user their choice
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

// adds win to counters, resets losses in a row
function win(choice, opponent){
    $("#result").html("You chose " + choice + ". They chose " + opponent + ". You win!");
    totalWins++;
    wins++;
    losses = 0;
    $("#totalWins").html(totalWins);
    $("#wins").html(wins);
    $("#losses").html(losses);
}

// adds loss to counters, resets wins in a row
function lose(choice, opponent){
    $("#result").html("You chose " + choice + ". They chose " + opponent + ". You lose :(");
    totalLosses++;
    losses++;
    wins = 0;
    $("#wins").html(wins);
    $("#totalLosses").html(totalLosses);
    $("#losses").html(losses)
}

function draw(choice, opponent){
    $("#result").html("You both chose " + choice + ". Draw.");
    
}

function changeName(){
    let oppName = prompt("What's your opponent's name?");
    if (oppName != ""){
    $("#oppName").html(oppName + "'s Choice:");
    }
};

function cycle(){
    $("#opponentChoice").addClass("cycle");    
    $("#result").css("visibility", "hidden");
    $("#totalWins").css("visibility", "hidden");
    $("#totalLosses").css("visibility", "hidden");
    $("#wins").css("visibility", "hidden");
    $("#losses").css("visibility", "hidden");
}
function endCycle(){
    $("#opponentChoice").removeClass("cycle");
    $("#result").css("visibility", "visible");
    $("#totalWins").css("visibility", "visible");
    $("#totalLosses").css("visibility", "visible");
    $("#wins").css("visibility", "visible");
    $("#losses").css("visibility", "visible");
}
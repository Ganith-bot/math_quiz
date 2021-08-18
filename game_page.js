player_1_name = localStorage.getItem("P1");
player_2_name = localStorage.getItem("P2");

player_1_score = 0;
player_2_score = 0;

document.getElementById("player1_name").innerHTML=player_1_name + " : ";
document.getElementById("player2_name").innerHTML=player_2_name + " : ";

document.getElementById("score1").innerHTML=player_1_score;
document.getElementById("score2").innerHTML=player_2_score;

document.getElementById("player1_Q").innerHTML= player_1_name;
document.getElementById("player1_A").innerHTML= player_2_name;

function send1(){
    var guess_word = document.getElementById("word_input").value;
    var guess_word2 = document.getElementById("word_input2").value;

    var guess_answer = guess_word * guess_word2;
    

    answer101 = "<h1 id='answer_js'>Q."+ guess_word + "X" + guess_word2 +"</h1>";
    display = "<h1>Answer: </h1>"+ "<input type='text' id='answer_of_P'>";
    check = "<button class='btn-warning' id='check1' onclick='check_the_ans()'>Check</button>"  
    row = answer101+"<br>"+display+"<br>"+check+"<br>";
    document.getElementById("game_output").innerHTML=row;
    document.getElementById("word_input").value="";
}

var Q_turn = "player1";
var A_turn = "player2";

function check_the_ans(){
    var answer_word = document.getElementById("answer_of_P").value;
    guess_answer = answer_word.toLowerCase();
    
    if( guess_answer==answer_word){
        if(A_turn=="player1"){
            player_1_score = player_1_score+1;
            document.getElementById("score1").innerHTML=player_1_score;
        }
        else{
            player_2_score = player_2_score+1;
            document.getElementById("score2").innerHTML=player_2_score;
        }
    }

    if( Q_turn=="player1"){
        Q_turn = "player2";
        document.getElementById("player1_Q").innerHTML=player_2_name;
    }
    else{
        Q_turn = "player1";
        document.getElementById("player1_Q").innerHTML=player_1_name;
    }
    
    if( A_turn=="player1"){
        A_turn = "player2";
        document.getElementById("player1_A").innerHTML=player_2_name;
    }
    else{
        A_turn = "player1";
        document.getElementById("player1_A").innerHTML=player_1_name;
    }
    document.getElementById("game_output").innerHTML="";
}
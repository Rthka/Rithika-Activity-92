player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("input_1").innerHTML=player1_name + " : ";
document.getElementById("input_2").innerHTML=player2_name + " : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("Qturn").innerHTML="Question Turn- "+ player1_name;
document.getElementById("Aturn").innerHTML="Answer Turn- "+ player2_name;

function send()
{
    number1=document.getElementById("number_1").value;
    number2=document.getElementById("number_2").value;
    answer=parseInt(number1)*parseInt(number2);

    question_number="<h4>"+ number1+"X"+number2+"</h4>";
    input_box="<br>Answer : <input type='text' id='input_check_box'>";
    check_button="<br><br> <button class='btn btn-info' onclick='check()'> Check </button>";
    row=question_number + input_box + check_button;

    document.getElementById("output").innerHTML=row;

    document.getElementById("number_1").value="";
    document.getElementById("number_2").value="";
}

question_turn="input_1";
answer_turn="input_2";

function check()
{
    get_answer=document.getElementById("input_check_box").value;
    if(get_answer==answer)
   {

    if(answer_turn="input_1")
    {
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score;
    }
    else
    {
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score;
    }
   }

   if(question_turn=="input_1")
   {
       question_turn="input_2";
       document.getElementById("Qturn").innerHTML="Question - "+ player2_name;
   }
   else
   {
    question_turn="input_1";
    document.getElementById("Qturn").innerHTML="Question - "+ player1_name;
   }

   if(answer_turn=="input_1")
   {
       answer_turn="input_2";
       document.getElementById("Aturn").innerHTML="Answer - "+ player2_name;
   }
   else
   {
    answer_turn="input_1";
    document.getElementById("Aturn").innerHTML="Answer - "+ player1_name;
   }
   document.getElementById("output").innerHTML="";

}

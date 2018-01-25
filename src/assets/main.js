var answer = document.getElementById('answer');
var attempt = document.getElementById('attempt');
var input = document.getElementById('user-guess');

function guess() {
    //add functionality to guess function here
    if(answer.value == ''){
        setHiddenFields();
    }

    if(!validateInput(input.value)){
        return;
    }
    else {
        attempt.value++;
    }



    if(getResults(input.value)){
        setMessage("You Win! :)");
        showAnswer(true);
        showReplay();
    }

    else if(attempt.value >= 10 ){
        setMessage("You Lose! :(");
        showAnswer(false);
        showReplay();
    }

    else {
        setMessage("Incorrect, try again.");
    }
}

//implement new functions here

function setHiddenFields() {
    answer.value = (Math.floor(Math.random() * 10000)).toString();
    //answer.value = 1234;
    answer.value = answer.value.toString();
    while(answer.value.length < 4) {
        answer.value = '0' + answer.value;
    }
    attempt.value = 0;
    alert(answer.value);
}

function setMessage(m){
    document.getElementById('message').innerHTML = m;
}

function validateInput(i){
    if(i.length != 4){
      setMessage("Guesses must be exactly 4 characters long.");
      return false;
    }
    return true;
}

var html = "";
function getResults(g) {
    html += '<div class="row"><span class="col-md-6">' + input.value +
        '</span><div class="col-md-6">' +"<strong>"+ attempt.value + ". </strong>" ;
    for(i=0; i < g.length; i++){
        if(g.charAt(i) == answer.value.charAt(i)){
            html += '<span class="glyphicon glyphicon-ok"></span>';
        }

        else if (answer.value.indexOf(g.charAt(i)) != -1) {
            html += '<span class="glyphicon glyphicon-transfer"></span>';
        }

        else{
            html +='<span class="glyphicon glyphicon-remove"></span>';
        }
    }
    html += '</div></div>';
    document.getElementById('results').innerHTML = html;
    if (g == answer.value) {
        return true;
    }

    else {
        return false;
    }
}

function showAnswer(didWin){
    if(didWin){
        document.getElementById('code').className += " success";
    }

    else {
        document.getElementById('code').className += " failure";
    }
    document.getElementById('code').innerHTML = answer.value;
}

function showReplay(){
    document.getElementById('guessing-div').style.display = 'none';
    document.getElementById('replay-div').style.display = 'block';
}

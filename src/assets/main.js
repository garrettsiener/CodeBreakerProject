var answer = document.getElementById('answer');
var attempt = document.getElementById('attempt').value;
var input = document.getElementById('user-guess').value;

function guess() {
    //add functionality to guess function here
    if(answer.value != '' && input != ''){
        setHiddenFields();
    }

    if(!validateInput(input)){
        return false;
    }

    else{
        attempt++;
    }

    if(getResults(input)){
        setMessage("You Win! :)");
        showAnswer(true);
        showReplay();
    }

    else if(!getResults(input) && attempt >= 10 ){
        setMessage("You Lose! :(");
        showAnswer(false);
    }

    else {
        setMessage("Incorrect, try again.");
    }
}

//implement new functions here

function setHiddenFields() {
    answer.value = (Math.floor(Math.random() * 1000)).toString();
    while(answer.value.length < 4) {
        answer.value = '0' + answer.value;
    }
    attempt = 0;
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

function getResults(g) {
    var html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
    var correct = 0;
    for(i=0; i < g.length; i++){
        if(g.charAt(i) == answer.charAt(i)){
            html += '<span class="glyphicon glyphicon-ok"></span>';
            correct++;
        }

        else if (answer.indexOf(g.charAt(i)) > -1) {
            html += '<span class="glyphicon glyphicon-transfer"></span>';
        }

        else{
            html +='<span class="glyphicon glyphicon-remove"></span>';
        }
    }
    html += '</div></div>';
    document.getElementById('results').innerHTML = html;
    if (correct == g.length) {
        return true;
    }

    else {
        return false;
    }
}

function showAnswer(didWin){
    document.getElementById('code').innerHTML = answer;
    if(didWin){
        document.getElementById('code').className += " success";
    }

    else {
        document.getElementById('code').className += " failure";
    }
}

function showReplay(){
    document.getElementById('guessing-div').style.display = 'none';
    document.getElementById('replay-div').style.display = 'block';
}

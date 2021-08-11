var milliSec = 0;
var sec = 0;
var min = 0;


var displaymilliSec = document.getElementById('displayMilliSec');
var displaySec = document.getElementById('displaySec');
var displayMin = document.getElementById('displayMin');

function timer(){
    milliSec--;
    displayMilliSec.innerHTML = milliSec;
    
    if(milliSec == 0){
        milliSec = 100;
        sec--;
        displaySec.innerHTML = sec + ' : ';
        if(sec == 0){
            min--;
            sec = 60
            displayMin.innerHTML = min+ ' : '; 
        }
        if(min == 0){
           reset(); 
        }
        
    }
}


var interval;
var executed_pause = false;

var executed = false;

var start = (function() {
    return function() {
        if(milliSec == 0 && sec == 0 && min == 0){
            alert('please set timer first')
        }
        else if (!executed) {
            executed = true;
            interval = setInterval(timer,10);
            // console.log('start function call');
        }
        
    }
})();

function pause(){
    if(milliSec == 0 && sec == 0 && min == 0){
        alert('please set timer first')
    }
    executed = false;
    clearInterval(interval);
}
function reset(){
    if(milliSec == 0 && sec == 0 && min == 0){
        alert('please set timer first')
    }
    pause();
    milliSec = 0;
    sec = 0;
    min = 0;
    
    displaymilliSec.innerHTML = milliSec + '0';
    displaySec.innerHTML = sec+ '0 : ';
    displayMin.innerHTML = min+ '0 : ';
}

function set(){
    var a = +prompt('Enter millisecond (0-999)')+ ' ';
    if(a < 1000){
        milliSec = a;
        displaymilliSec.innerHTML = a;
        var b  = +prompt('Enter Second (0-59)');
        var bb = b  + ' : ';
    if(b < 60){
        sec = b;
        displaySec.innerHTML = bb;
        var c = +prompt('Enter Minutes (0-59)');
        var cc = c + ' : '
    
    if(c < 60){
        min = c;
        displayMin.innerHTML = cc;
}
else{
        alert('Enter Valid Value')
    }
}
else{
        alert('Enter Valid Value')
    }
}
else{
        alert('Enter Valid Value')
    }
}
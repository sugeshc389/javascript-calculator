var screen = document.getElementById("screen");

function btnClick(value){
    screen.value += value;
}
function clrSrn(){
    screen.value = "";
}
function result(){
    var answer=eval(screen.value);
    screen.value = answer;
}
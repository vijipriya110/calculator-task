var result=document.getElementById("result");

function display(num){
    result.value +=num;

}
function calculate(){
    try{
        result.value=eval(result.value);
    }
    catch{
        alert("invalid")
    }
}
function backspace(){
    result.value="";

}
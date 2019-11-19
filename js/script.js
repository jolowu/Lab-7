function init(){

document.getElementById("entrybutton").addEventListener("click", myFunction);

function myFunction(){
    var text = document.getElementById('entryinput').value
    document.getElementById('textoutput').innerHTML = text;
    alert('John Olowu:' + text);
}};

window.addEventListener('load', init);
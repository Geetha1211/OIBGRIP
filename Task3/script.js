function convert()
{
let type=document.getElementById("Type").value;
let degree=document.getElementById("degrees").value;
event.preventDefault();
var result=0;
if(type=="celsius")
{
result=(1.8*degree)+32;
document.getElementById('result').value=result+'\u00B0 F';
}
else{
    result=(degree-32)/1.8;
    document.getElementById('result').value=result+'\u00B0 C';
}

}

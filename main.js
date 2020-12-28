var array_inputs=[];
function getPara() {
for (var i = 1;i <= 6; i++)
{
    array_inputs.push(document.getElementById("para_"+i).value);
}
var fullStop=array_inputs.join(". ");
    console.log(fullStop);
    document.getElementById("showPara").innerHTML=fullStop;
    

}
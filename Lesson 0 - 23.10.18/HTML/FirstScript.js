function alert1()
{
    var cnt="";
    var i=document.getElementById("try").value;
for(var k=0; k<i; k++){
     cnt+=`
     <tr>
     <td>hhhh</td>
     <td>hhhh</td>
     </tr>`;
}
document.getElementById("id1").innerHTML=cnt;
document.getElementById("bo1").border="1";
document.getElementById("try").value='';
document.getElementById("id7").style.color = "blue";


}
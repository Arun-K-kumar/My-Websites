const number=document.getElementById("num");
const sumbitBtn=document.getElementById("sub");
const txt=document.getElementById("result");
const celke=document.getElementById("Ck");
const celfa=document.getElementById("Cf");


let temp;
function convert(){
 
 if(celke.checked){ 
   
  kelvin();
 }else if(celfa.checked){
  
   faren()
 }else{
  txt.textContent="Select a Unit";
 }
}
function kelvin(){
  temp=Number(number.value);
  temp=temp+273
  txt.textContent=temp.toFixed(1)+"K";
}
function faren(){
  temp=Number(number.value);
  temp= (temp*1.8)+32;
    txt.textContent=temp.toFixed(1) +"F";
}
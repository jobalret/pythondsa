
let counter=0
function coun(){
counter+=1
document.querySelector("h1").innerHTML=counter
if(counter%10==0){
 alert(`THE COUNTER IS NOW${counter}`)
}
}
document.addEventListener('DOMContentLoaded',function(){
document.querySelector('button').onclick=coun;

})

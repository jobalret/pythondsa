n=42
var arr = ["zero","one","two","three","four","five","six","seven","eigth","nine"]
function saydigi(n,arr){
if(n==0)
return;

digit=n % 10
n=n/10
console.log(digit)
return saydigi(n,arr)
}
saydigi(n,arr)
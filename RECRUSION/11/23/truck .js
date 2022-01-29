 var arr=[ 4 ,2, 1, 3] 
var n=4
function useside(arr,n)
{var stk=[]
var truck=1
var index=0
while(truck<=n&&index<n){
   var currnttrack=arr[index]
    if(currnttrack==truck)
  {  truck++
    
    index++}


   else if(stk.length>0&&truck==stk[stk.length-1]){
       
     
        stk.pop()
        
        truck++
    }    else{
        //    console.log(currnttrack)
            stk.push(currnttrack)
            
            index++
            
            
    
        }
    

}
return stk}
console.log(useside(arr,n))
function primeis(digit){
    
    if(digit==1)
     
       {return false}
        
   for(var i =2;i<n;i++){
        
      
       if(digit%i==0){
            
           return false
            
       }
        
   }
    
   return true
}

primeis(12)


function matrixPrimeCheck(N, M, arr) {
   c=0
for(var row =0;row<N;++){
   for(var j=0;j<M;j++){
       
       if(isprime(arr[i][j])){
           // console.log(arr[i][j])
           count++
       }
       
   }
    
}    
   
console.log(count)
 
}

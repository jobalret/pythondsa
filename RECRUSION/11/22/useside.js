arr=[ 5, 1, 2, 4, 3 ] 
n=5
stk=[]
i=0
while(i<n){
    on=1
    console.log(arr[i],i+1)
    if(arr[i]!==i){
        stk.push(arr[i])
       
        on=0
        
    }
    if(stk[stk.length-1]==i+1){
        
        stk.pop()
        i++
       
    }
    
    
      
    
}
console.log(stk)
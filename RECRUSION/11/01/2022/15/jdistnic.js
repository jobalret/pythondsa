function sub(arr,k){
    count=0
    var sai = new Map()
    for(var i =0;i<k;i++){
         if(sai.has(arr[i])){
        sai.set(arr[i],sai.get(arr[i])+1)

    }
    else{
        sai.set(arr[i],1)
    }
   

    }
     if(sai.size==k)
        count++

 for(var i =k;i<arr.length;i++){
             if(sai.has(arr[i])){
        sai.set(arr[i],sai.get(arr[i])+1)

    }
    else{
        sai.set(arr[i],1)
    }
    
    if(sai.has(arr[i-k]))
            {sai.set(arr[i-k], sai.get(arr[i-k])-1)
            // console.log(sai)
                
            }


       
        if (sai.has(arr[i - k]) && sai.get(arr[i-k])==0) { 
            console.log(sai," before delte")
            sai.delete(arr[i - k]); 
             console.log(sai," deen")
        } 
  
   if(sai.size==k){
    
       count++
   }
     
 }
    
    
    
    return count
    
    
}
arr="aabcc"
x=2
console.log(sub(arr,x))
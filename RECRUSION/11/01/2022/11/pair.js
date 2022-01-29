function pair(arr,k){
    var l= 0;
    var right =arr.length-1
    while(left<right){
        if(arr[left]+arr[right]==k){
            return (left+" "+right)
        }
       if(arr[left]+arr[right]>k){
           right--
       }
        if(arr[left]+arr[right]<k){
            left++
        }
    }
    return "-1 -1"
  } 
         
  
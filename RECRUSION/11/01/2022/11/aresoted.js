arr =[1,5,7,8,9]
function issorted(arr){
    if(arr.length==1)
    return true
    if(arr[0]>arr[1]){
        return false;
    }
    else{
        arr.shift()
        return issorted(arr)
    }
}
console.log(issorted(arr))


// find k in array 
function findk(arr,k){
  
    if(arr.length==0){
        return "not k in arr"
    }
    if(arr[0]==k)
    { return arr[0]+"is equal to "+k}
    
        arr.shift()
        console.log(arr,k)
        return findk(arr,k)
   


}

console.log(findk(arr,6))





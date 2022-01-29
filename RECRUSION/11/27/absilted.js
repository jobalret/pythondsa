arr = [ 6, 3, 8, 2, -4 ]
var n = arr.length
function dif(arr,n){
   
    if(n<0){
return 0
    }
   

sum=arr[n]

    return sum+dif(arr,n-1)
}

console.log(dif(arr,n-1))
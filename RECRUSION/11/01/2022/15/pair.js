k=5, a=[ 1, 2, 3, 4, 5,10 ]
m=8 ,b=[ 1, 2, 3, 4, 5 ]
function sub(arr,k){
    n = arr.length
    var i =0
    j =n-1
    while(i<n&&j>=0){
        if(arr[j]-arr[i]==k)
        return true
        if(arr[j]-arr[i]>k)
        { 
         i++}
         else{
             j--
         }
    }

  return false  
}
console.log(sub(b,m))
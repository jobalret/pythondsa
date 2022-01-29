arr = [4,5,3,6,2]
var k = arr.length

for(var i =0;i<n-1;i++){
    sma=i
    for(var j = i+1;j<n;j++){
        if(arr[sma]>arr[j])
        sma=j
    }
    var temp = arr[i]
    arr[i]=arr[sma]
    arr[sma]=temp
console.log(arr)
}
console.log(arr)

 function recselctionsort(arr,n){
    
    if(n==0)
    {
        return arr
    }
   var sma =n
   for(var j = n-1;j>=0;j--){
       if(arr[j]>arr[sma])
       sma=j
   }
    var temp = arr[n]
    arr[n]=arr[sma]
    arr[sma]=temp
    console.log(arr+" sai"+arr[sma]+""+arr[n])
    return recselctionsort(arr,n-1)
}

recselctionsort(arr,k-1)
console.log(arr)
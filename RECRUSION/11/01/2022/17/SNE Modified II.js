arr=[39, 27, 11, 4, 24, 32, 32, 1]
function pdosileft(arr){
    count=0
    for(var i =1;i<arr.length;i++){
        if(arr[i]>=arr[i-1])
       {console.log(check(arr,i))
            count++}
    }
    return count
}
console.log(pdosileft(arr))
function check(arr,i){
    value=
    min=arr[i-1]
    for(var k=i-1;k>=0;k--){
        if(min>arr[k]){
            min=arr[k]
            value =k
            console.log(k)
            console.log(min)
        }
    }
    return k
}

arr=[1,2,345,5,6,7,11,22]
arr=arr.sort((a,b)=>a-b)
console.log(arr)
var k =378
function treplet(arr,sum){
    var l,r,i
    for(i=0;i<arr.length;i++){
l=i+1
r=arr.length-1
while(l<r){
    var yog=arr[i]+arr[l]+arr[r]
    console.log(yog)
    if(yog==sum){
        return {"first elment":arr[i],"second":arr[r],"trhid":arr[i]}
    }
    if(yog>sum){
        r--
    }else{
        l++
    }
}



    }
    return -1
}
console.log(treplet(arr,k))
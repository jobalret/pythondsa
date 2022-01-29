arr=[0, -1, 2, -3, 1]
arr=arr.sort((a,b)=>a-b)
console.log(arr)
var k =0
function treplet(arr,sum){
    var l,r,i
    found=false
    for(i=0;i<arr.length-1;i++){
l=i+1
r=arr.length-1
while(l<arr.length&&r>i){
    var yog=arr[i]+arr[l]+arr[r]
    
    if(yog==sum){
        
        console.log (arr[i],arr[l],arr[r])
   l++
   r--
//    console.log(i,l,r)
        found=true
    }
    if(yog>sum){
        r--
    }else{
        l++
    }
}
// 0 -1 1
// 2 -3 1


    }
    if(found=false){
        console.log("No Tripelate found")
    }
}
console.log(treplet(arr,k))
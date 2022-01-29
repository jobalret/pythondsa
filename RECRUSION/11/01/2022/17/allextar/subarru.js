
// var count=0;
// function sub(arr,start,end){
// if(end==arr.length){
//     return;
// }
// else if(start>end){
//     sub(arr,0,end+1)
// }
// else{
//     output=[]
//     for(var i=start;i<=end;i++){
//         output.push(arr[i])
//     }
   
//    if(output.length>=k)    { var sum=0;
//         output.map((x)=>sum+=x)
//         if(sum%k!==0)
//       { count++
//            console.log(sum)}
        
//         console.log(output)
// }
   
//     sub(arr,start+1,end)
// }
// return null
// }
// var  
// sub(arr,0,0)
// console.log(count+"deenn")

arr=[ 1,2,3,4,5 ] 

for(var i =0;i<arr.length;i++){
    // console.log("fist")
    for(var j =i+1;j<=arr.length;j++){
        out=[]
        // .log("second")console
        for(var k=i;k<j;k++){
            // console.log("thrid")
            out.push(arr[k])

        }
        if(out.length>=3){console.log(out)
            var sum =0;
            out.map((x)=>sum+=x)
            console.log(sum)
        }
    } 
}
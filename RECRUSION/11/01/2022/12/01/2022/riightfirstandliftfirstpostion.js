var arr = [1,2,3,4,5,5,5,5,5,6,]
function leftright(arr,target){
    var left ,right
    lside=false;
    rside=false;
for(var i =0;i<arr.length;i++){
    if(!lside&&arr[i]==target){
        left=i
        lside=true
    }

    if(!rside&&arr[arr.length-1-i]==target){
        right=arr.length-1-i
        rside=true
    }
    if(lside&&rside)break;
}
ans=[left,right]
return ans
}
console.log(leftright(arr,5))
function rot(arr,n,k){
    for(var i=0;i<k;i++){
        leftrot(arr,n)
    }
}
function leftrot(arr,n){
    temp=arr[n-1]
    for(var i =n-1;i>0;i--){
        arr[i]=arr[i-1]
        console.log(arr)
    }
    arr[0]=temp
}
arr=[ 1,2,3 ]; n=3; k=1
rot(arr,n,k)
console.log(arr)




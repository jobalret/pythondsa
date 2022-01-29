function rot(arr,n,k){
    for(var i=0;i<k;i++){
        leftrot(arr,n)
    }
}
function leftrot(arr,n){
    temp=arr[0]
    for(var i =0;i<n-1;i++){
        arr[i]=arr[i+1]
        console.log(arr)
    }
    arr[n-1]=temp
}
arr=[ 1,2,3,4 ]; n=4; k=3
rot(arr,n,k)
console.log(arr)




var arr=[1,2,5,4,2,1,1,2,3,4,5,5,43,23,]
function bub(arr,n){
    if(n==0||n==1)
    return arr
    for(var i =0;i<n-1;i++){
        if(arr[i]>arr[i+1]){
            swap(arr,i,i+1)
        }
    }
    return bub(arr,n-1)
}
function swap(arr,i,j){
    temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
    return arr
}
console.log(bub(arr,arr.length))
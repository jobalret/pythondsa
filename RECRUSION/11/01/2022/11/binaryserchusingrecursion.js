arr = [1,5,8,9,11,13,45,50,55,87]
k=0
function binary(arr,l,r,k){
    mid=Math.floor((l+r)/2)
    if(l>r){
        return -1
    }
    if(arr[mid]==k){
        return true
    }
    if(arr[mid]>k){
        return binary(arr,l,mid-1,k)
    }
    if(arr[mid]<k){
        return binary(arr,mid+1,r,k)
    }

    
}
console.log(binary(arr,0,arr.length,k))
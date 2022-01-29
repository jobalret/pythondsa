arr = [1,2,3,4,5,6,7,15,30,35,45,95,100,110,150]

k=95
function binary(arr,l,r,k){
    if(l>r)
    return 0
    // var mid = Math.floor(l+((r-l)/2))
    var mid = parseInt((l+r)/2)
    // var mid = Math.floor((l + (r-l))/2)

    
    
    if(arr[mid]==k)
        return mid
    if(k>arr[mid])
      return binary(arr,mid+1,r,k)
    if(k<arr[mid])
      return binary(arr,l,mid-1,k)
    
    
}
console.log(arr[binary(arr,0,arr.length,k)])
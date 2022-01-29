function bin(arr,l,r,k){
    if(l>r){
        return false
    }
    var mid=parseInt((l+r)/2)
    if(arr[mid]==k){
        return mid
    }
    if(arr[mid]<k){
         return bin(arr,mid+1,r,k)
    }
    if(arr[mid]>k){
         return bin(arr,l,mid-1,k)
    }
}
arr=[1,30,35,76,78,90,95]
x=5
// console.log(bin(arr,0,arr.length-1,k))
function pairwithcount(arr,k){
    count=0
for(var i =0;i<arr.length;i++){
    
    if(bin(arr,i+1,arr.length-1,arr[i]+k)!=false)
   { console.log(i,bin(arr,i+1,arr.length-1,arr[i]+k))
    count++
}
}
console.log(count)
return
}
pairwithcount(arr,x)
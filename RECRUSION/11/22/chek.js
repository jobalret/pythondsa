arr="aba"

arr=arr.split("")
console.log(arr)
res=[]
for(var i = arr.length-1;i>=0;i--){
    res.push(arr[i])
}
console.log(res)
for(var i =0;i<arr.length;i++){
    if(arr[i]!==res[i]){
        console.log(arr[i],res[i])
        console.log(false)
        break
        
    }
    console.log(true)
    
}
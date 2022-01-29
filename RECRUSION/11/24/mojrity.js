arr=[1,1,2,1,2]
var sai = new Map()
for(var i =0;i<arr.length;i++){
    if(sai.has(arr[i])){
        sai.set(arr[i],sai.get(arr[i])+1)
    }else
    sai.set(arr[i],1)
}
console.log(sai)
for(var [k,v]of sai){
    if(v>=(arr.length/2)){
        console.log(k)
    }
}
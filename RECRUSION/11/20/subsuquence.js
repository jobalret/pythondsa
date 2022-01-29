
function subse(arr,ans,cur){
if(cur>arr.length)
return
console.log(ans)
for(var i =cur;i<=arr.length;i++){
    ans.push(i)
    subse(arr,ans,i+1)
    ans.pop()
}


}
arr=[1,2,3]
ans=[]
subse(arr,ans,0)
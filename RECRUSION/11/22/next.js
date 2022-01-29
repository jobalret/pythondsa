arr=[1 ,3, 2, 4]
var ans=[]
sai=[]
n=arr.length
for(var i = n-1;i>=0;i--){
   val= arr[i]
    check=false
    while(!sai.length==0){
        var top = sai[sai.length-1]
        if(top>val){
            ans.push(top)
            check=true
            break;
        }
        sai.pop()
    }
    if(check==false){ans.push(-1)}
 sai.push(val)   
}
console.log(ans.join(" "))
ans=ans.reverse()
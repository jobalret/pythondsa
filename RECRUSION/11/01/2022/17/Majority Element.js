let a = [ 1,2,3,4,4,4,5 ];
         
function findMajority(a){
    var sai = new Map()
    max =1
    ans="No mojirty"
    for(var i =0;i<a.length;i++){
        if(sai.has(a[i])){
            sai.set(a[i],sai.get(a[i])+1)
        }
        else{
            sai.set(a[i],1)
        }
        if(sai.get(a[i])>max){
            max=sai.get(a[i])
            ans=a[i]
        }
        
    }
    if(max>1)console.log("frequnecy of elment : "+max)
    return ans
}
console.log(findMajority(a))
n=3
function sub(sai,n,cur,last){
    if(cur<=last+1){
        // console.log(sai)
    }
    for(let i=cur;i<=last;i++){
        
    sai.push(i)
    console.log(sai)
    sub(sai,n,i+1,last)
    console.log(sai,1)
    sai.pop()}
}
sub([],n,1,n)
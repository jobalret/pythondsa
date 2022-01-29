n=3
function sb(path,cur,n,last){
    if(cur==last+1){
        console.log(path)
    }
        for(var i=cur;i<=last;i++){
            path.push(i)
            sub(path,i+1,n,last)
            path.pop()

        }
    
}

function sub(sai,n,first,last){
    if(first<=last+1){
        
    }
    for(let i=first;i<=last;i++){
    sai.push(i)
    console.log(sai)
    sub(sai,n,i+1,last)
    sai.pop()
    console.log(sai)
}
}
sub([],n,1,n)

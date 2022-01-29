function singleDigi(n){
    if(n<=0)
    return n
    return(n%10)+singleDigi(Math.floor(n/10))
}
function recur(n){
    if(n<10)
    return n;
    return recur(singleDigi(n))
}

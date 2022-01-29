// using recrsive funcntion
function digisum(n){
    if(n==0)
     return 0
    if(n%9==0)
       return 9
    else
      return (n%9)
    
}
console.log(digisum(255))
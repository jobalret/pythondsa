function pow(a,b){
    if(b==0)
    return 1
    if(b==1)
    return a
    var c =Math.floor(b/2)
    var ans= pow(a,c)
    if(b%2==0)
   { return ans*ans}
   else
   {
         return a*ans*ans
   }

}
console.log(pow(2,5))
console.log(Math.floor(4/2))
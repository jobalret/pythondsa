a = [-5,-9,14]
// max sum of subarry
function maxsumsubarray(a){
    max=a[0]
cursum=a[0]
for(var i =1;i<a.length;i++){
    cursum=Math.max(cursum,cursum+a[i])
    max=Math.max(cursum,max)

}
return max}
console.log(maxsumsubarray(a))
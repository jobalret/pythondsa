// arr=[1, 3, 2, 4]

arr=[1, 1, 2, 4, 3]
/*3 4 4 -1 
2 2 4 -1 -1 */
stk=[]
result=[]
for(var i =arr.length-1;i>=0;i--){
 while(stk.length>0&&stk[stk.length-1]<=arr[i]){
     stk.pop()
 }if(stk.length==0){
     result.push(-1)
 }else(
     result.push(stk[stk.length-1])
 )
 stk.push(arr[i])
}
console.log(result.reverse())
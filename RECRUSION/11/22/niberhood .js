arr =[
    39, 27, 11, 4,
    24, 32, 32, 1
  ] 
  n=8
  stk=[]
  result=[]
  for(var i=0;i<arr.length;i++){
    
    while(stk.length>0&& stk[stk.length-1]>=arr[i]){
        stk.pop()
    }
    if(stk.length<1){
     result.push(-1)
    }else{
        result.push(stk[stk.length-1])
    }
    stk.push(arr[i])

  }
  console.log(result)
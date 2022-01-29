arr=[
  1,2,3,4,5,6,7,8,9,10,1,2,3,4
  ] 
  k=3

  function maxum(arr,k){
      sum=0
      mainsum=0;
      for(var i=0;i<k;i++){
          sum+=arr[i]
          
      }
      mainsum=sum
      for(var j =k;j<arr.length;j++){
         
          console.log(arr[j])
         
        sum-=arr[j-k]
          sum+=arr[j]
          
         if(sum>mainsum){
             mainsum=sum

         }
      }



      return mainsum
      
  }
  console.log(maxum(arr,k))
  3,4,3,32,3,32,4,32
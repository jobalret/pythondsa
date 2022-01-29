function sai(nums, target) {
    var i =0;
      var j = nums.length
      while(i<=j){
          var mid=Math.floor((i+j)/2)
          console.log(mid)
          if(nums[mid]==target){
              return mid
          }
          if(nums[mid]>target){
              j=mid-1
            }else{
                i=mid+1
            }
          
          
      }
      return -1
  };
  arr=[1,2,3,4,5,6,7]
  k=7
  console.log(sai(arr,k))
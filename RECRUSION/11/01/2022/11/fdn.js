arr=[
    10, 9, 8, 7,
     7, 7, 5, 5
  ]
  var k=5
  function whoIsGoingForward(arr,k){
    count = 0;
    for (i=0;i<arr.length;i++){
      if (arr[i] >= arr[k-1] && arr[i] > 0) {
          console.log(arr[i]+"b"+arr[k-1])
          count++
      }
    }
    return count;
}
console.log(whoIsGoingForward(arr,k))

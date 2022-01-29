function sum(arr,k,n){
    sum=0
    for(var i=0;i<k;i++){
        sum+=arr[i]

    }

    var maxsum=sum
    for(var j=k;j<arr.length;j++){

        sum=sum-arr[i-k]
       
        sum=sum+arr[j]
        
        if(sum<maxsum){
            maxsum=sum
        }
    }
    console.log(maxsum)
}
arr=[2 ,7, 6, 2, -5 ]
sum(arr,4,5)
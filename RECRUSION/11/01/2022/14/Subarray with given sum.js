// Subarray with given sum
n = 5, s = 12
arr = [0,7,3,7,5]
// Output: 2 4for

function subsum(arr,n,sum){
    csum=arr[0]
    start=0;
    for(var i =1;i<n;i++){

        while(csum>sum&&start<i-1){
            csum-=arr[start]
           
            start++
        }
        if(csum==sum){
            console.log(csum,sum)
            console.log(start,i-1)
            return 1
        }
        if(i<n) {csum+=arr[i]}
    }
    console.log("no array possibel")
    return 0
}

 

subsum(arr,n,s)
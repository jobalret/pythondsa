// Given an array of distinct integers. The task is to count all the triplets such that sum of two elements equals the third element.
arr=[1, 5, 3, 2]
N=4

arr=arr.sort((a,b)=>a-b)
for(var i = N-1;i>=0;i--){
    sum=arr[i]
    l=0
    r=i-1
    while(l<r){
       
        if(sum==arr[l]+arr[r]){
            console.log(arr[l],arr[r],sum)
            break;
        }
        if(sum<arr[l]+arr[r]){
            console.log("r--",r)
            r--
        }
        if(sum>arr[l]+arr[r]){
            l++
        }
    }
}
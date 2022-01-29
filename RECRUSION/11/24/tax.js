arr.sort((a,b)=>a-b);
    var i=0
    j=arr.length-1;


    var sum=0;

    
    while(i<j){
        sum=sum+Math.max(arr[i],arr[j]);
        i++;
        j--;
    }
    console.log(sum);
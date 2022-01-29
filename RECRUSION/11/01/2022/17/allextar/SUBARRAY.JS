arr=[1,2]
for(var i =0;i<arr.length;i++){
    
    for(var j=i+1;j<=arr.length;j++){
        s=[]
        for(var k=i;k<j;k++){
            s.push(arr[k])
        }
        
        console.log(s)   
    }
    
}
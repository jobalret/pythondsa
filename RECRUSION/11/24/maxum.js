arr= [[1 ,2, 3]
,[4, 22, 6],
[7 ,32 ,9]]
row=arr.length-1
for(var i = 0;i<=row;i++){
    max=arr[i][0]
    for(var j = 0;j<arr[i].length;j++){
     
        if(arr[i][j]>max){
            max=arr[i][j]

        }

    }console.log(max)
}
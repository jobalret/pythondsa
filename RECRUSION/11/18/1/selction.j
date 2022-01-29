for(var  i =0;i<arr.length;i++){
    var min = arr[i]
    for(var j =i+1;j<arr.length;j++){
        if(min>arr[j]){
            min=arr[j]
        }
    }
}
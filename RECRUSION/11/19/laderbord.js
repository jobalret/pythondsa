last=[ '1 rancho', '1 joy', '1 virus', '4 chatur', '5 farhan', '5 raju' ]
console.log(last[0][2]>last[1][2])

// for(var i =0;i<last.length-1;i++){

    if(last[i][0]==last[i+1][0]){
        if(last[i][2]>last[i+1][2]){
            temp=last[i]
            last[i]=last[i+1]
            last[i+1]=temp
        }
    }
}
console.log(last)
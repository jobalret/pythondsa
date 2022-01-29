 function subArrayExists(arr, n){
    var sum =0;
    const st= new Set()
    for(var i =0;i<n;i++){
        sum+=arr[i]
        if(sum==0||st.has(sum))
        return true
        
        st.add(sum)
    }
    return false
}
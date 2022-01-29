var arr = [1,2,3]
function subsequence(arr,path,cur){
    if(cur==arr.length){
     console.log(path)

    }else{
        subsequence(arr,path,cur+1)
        path.push(arr[cur])
        subsequence(arr,path,cur+1)
        path.pop()
    }
}
subsequence(arr,[],0)
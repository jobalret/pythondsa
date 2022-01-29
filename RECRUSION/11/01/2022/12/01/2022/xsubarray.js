N = 5, K = 3, X = 2
arr=[1, 3, 2 ,5, 1]
function sub(arr,N,K,X){
    var c=0;
    var cur=0;
    for(var i=0; i<X;i++){
        if(arr[i]>K){
            cur++;
            
        }
    }
    if(cur==0){
        c++;
    }
    for(var i=X;i<N;i++){
        if(arr[i-X]>K){
            cur--;
        }
        if(arr[i]>K){
            cur++;
        }
        if(cur==0){
            c++;
        }
    }
    console.log(c);
}
sub(arr,N,K,X)
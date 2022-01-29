A=3

v=[]

for(var i=0;i<2*A-1;i++){
    arr=[]
    v.push(arr)

}

n=2*A-1
for(var i=0; i<A; i++)
{
    for(var j=i; j<n-i; j++)
    {        
            v[i][j]= A-i;
        
             v[j][n-1-i]= A-i;
        
            v[n-1-j][i]= A-i;
            
            v[n-1-i][n-1-j]= A-i;          
    }
}    
console.log(v)

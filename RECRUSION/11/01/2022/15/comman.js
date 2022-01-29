a=[ 3, 3, 5 ]
b=[ 1, 2,  4, 4, 6 ]

function common(a,b){
    n=a.length
m=b.length
i=0;
j=0
ans=[]
while(i<n&&j<m){
    if(a[i]==b[j]){
        ans.push(a[i])
        i++
        j++
    }
  
    else if(a[i]>b[j]){
        j++
    }
    else {
        i++
    }
    
}
if(ans.length==0)
{return -1}
return ans
}
console.log(common(a,b))
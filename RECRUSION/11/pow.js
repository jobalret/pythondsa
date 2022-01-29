a=8
b=2
function pw(a,b){

if(b==1){
return a
}

    return a*pw(a,b-1)
}

console.log(pw(a,b))



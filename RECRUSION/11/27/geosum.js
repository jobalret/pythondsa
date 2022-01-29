function sai(n,r){
    if(n<1){
        return 1;
    }
    else {
        console.log(r,n)
       return ((1/r**n)+sai(n-1,r))
       
    }
}
console.log(sai(2,3))
sum=(1/(3**2))
sum1=(1/(3**1))
sum3=1


console.log(sum1+sum+sum3)


function multi(n,money){
    if(n==money){
        return true
    }
    if(n<money){
        return false
    }
    return multi(n,money*10)||multi(n,money*20)
}
console.log(multi(200,1))
// function multi2(n,money){
//     while(money<=n){
//         m=money*10
//         if(m==n){
//             return true
//         }
//         if(m>n){
//             return false
//         }
//         money =m
//     }
//     return false
// }
// console.log(multi2(100,1))
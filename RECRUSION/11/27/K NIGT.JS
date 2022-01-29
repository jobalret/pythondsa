function getkey(a,b){
    return a+"_"+b;
}

  
  var vis=new Map();
//   console.log(main);
  var L= 3;
  var J=3;
  var N=6;
 console.log(ways(L,J,vis,N));

function ways(L,J,vis,N){
   if(L>10 || L<1 || J>10 || J<1){
       return 0;
   }
   if(N===0){
       
       var key=getkey(L,J);
       if(vis.has(key)){
           return 0;
       }
       vis.set(key,1);
       console.log(vis)
       return 1;
   }
   var res=0;
   res+=ways(L+1,J+2,vis,N-1);
    res+=ways(L+1,J-2,vis,N-1);
     res+=ways(L-1,J+2,vis,N-1);
      res+=ways(L-1,J-2,vis,N-1);
       res+=ways(L-2,J-1,vis,N-1);
        res+=ways(L-2,J+1,vis,N-1);
         res+=ways(L+2,J+1,vis,N-1);
          res+=ways(L+2,J-1,vis,N-1);
    return res;
   
}

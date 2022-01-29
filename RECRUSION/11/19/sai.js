str="AbC"

var st=""
  for(var i = 0;i<str.length;i++){
      var k= str[i]

    if(str[i]==str[i].toLowerCase()){
        console.log(str[i])
        st+=str[i].toUpperCase()
    }
    else{
        st+=str[i].toLowerCase()
    }
  }

str="pingpingpingpabcdefhahahhahah"
function game(str)
{
    var sai = new Map()
sai.set("p",0)
sai.set("i",0)
sai.set("n",0)
sai.set("g",0)

for(var i=0;i<str.length;i++){
    if(sai.has(str[i])){
        sai.set(str[i],sai.get(str[i])+1)
    }
    
}
var min
for(var [k,v]of sai){
    min=v
    if(min>v){
        min=v
    }
  
}
console.log(min)  }
game(str)

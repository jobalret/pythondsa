str="1234"
function rev(str,i,j){
       
        if(i>j)
       { console.log(res)
        return }
        res=(swap(str,i,j))
        
        i++
        j--
        
        rev(res,i,j)

    }
    (rev(str,0,str.length-1))

    function swap(str,i,j){
        str=str.split("")
        
        temp=str[i]
        str[i]=str[j]
        str[j]=temp
        
        return str.join('')
    }
    
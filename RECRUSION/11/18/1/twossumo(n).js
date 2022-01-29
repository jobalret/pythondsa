function sai(nums, target) {
    const map = {};
    let result = []
    
    for(let i = 0; i < nums.length; i++){
    

        const diff = target - nums[i];
		
        if(map.hasOwnProperty(diff)){
            result = [map[diff], i];
			
        }
        map[nums[i]] = i;
    }
 
    return result
}
 sai ={}
 str="deensai"
 count=0
 for(let char of str){
     console.log(char)
     sai[char]=(sai[char])||1
 }
 console.log(sai["e"])
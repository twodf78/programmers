function solution(n, lost, reserve) {
    const lostMap = {};
    const clothList = Array.from({length: n}, _ =>1);
    for(const l of lost){
        clothList[l - 1]-=1;
    }
    for(const r of reserve){
        clothList[r - 1]+=1;
    }
    
    for(let i = 0; i< n; i++){
        if(!clothList[i]){
            if(i === 0){
                if(clothList[i + 1] === 2){
                    clothList[i] = 1;
                    clothList[i + 1] = 1;
                }
            }else if(i === n-1){
                if(clothList[i - 1] === 2){
                    clothList[i] = 1;
                    clothList[i - 1] = 1;
                }
            }else{
                if(clothList[i - 1] === 2){
                    clothList[i] = 1;
                    clothList[i - 1] = 1;
                }else if(clothList[i + 1] === 2){
                    clothList[i] = 1;
                    clothList[i + 1] = 1;
                }
            }
        }
    }
    return clothList.filter((v)=>v).length;
}
​
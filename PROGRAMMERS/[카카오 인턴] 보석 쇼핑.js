function solution(gems) {
    let answer = [1,gems.length];
    const gemKindCount = new Set(gems).size;
    let l=0, r=0;
    
    const gemMap = new Map();
    gemMap.set(gems[0], 1);
    
    while(r < gems.length){
        if(gemMap.size===gemKindCount){
            if(answer[1]-answer[0]>r-l) answer=[l+1,r+1];
            gemMap.set(gems[l], gemMap.get(gems[l])-1);
            if(gemMap.get(gems[l])===0) gemMap.delete(gems[l]);
            l++;
        }else{
            r++;
            const right = gemMap.get(gems[r]);
​
            gemMap.set(gems[r], right ? right + 1 : 1);
        }
    }
    return answer;
}
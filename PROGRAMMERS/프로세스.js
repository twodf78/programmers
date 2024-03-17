function solution(priorities, location) {
    const target = priorities[location];
    let answer = 0;
    let idx = 0;
    
    let maxList = [...new Set([...priorities])].sort((a, b)=>b-a);
    let count = 0;
    let max = maxList[count];
    while(count < 10){
        if(max === target){
            let newIdx = idx;
            for(let i = 0; i< priorities.length; i++){
                if(newIdx >= priorities.length) newIdx = 0;
                if(priorities[newIdx] === max){
                    if(newIdx === location) return ++answer;
                    answer++;
                }
                newIdx++;
            }
        }
        let newIdx = idx;
        for(let i = 0; i< priorities.length; i++){
            if(newIdx >= priorities.length) newIdx = 0;
            if(priorities[newIdx] === max){
                answer++;
                idx = newIdx;
            }
            newIdx++;
        }
        count++;
        max=maxList[count];
    }
}
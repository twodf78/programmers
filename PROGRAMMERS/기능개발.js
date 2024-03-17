function solution(progresses, speeds) {
    const answer = [];
    let idx = 0;
    while(progresses.length && progresses[idx] < 100 && idx< progresses.length){
        progresses = progresses.map((v, idx) => v + speeds[idx]);
        if(progresses[idx] >= 100) {
            const done = progresses.filter((v)=>v>=100).length;
            let acc = 0;
            for(let i = idx; i< progresses.length; i++){
                if(progresses[i]>=100){
                    acc++;
                }else{
                    idx = i;
                    break;
                }
            }
            answer.push(acc);
        }
    }
    return answer;
}
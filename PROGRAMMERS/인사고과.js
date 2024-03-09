function solution(scores) {
    const [shAttitude, shPeer] = scores[0];
    const shSum = shAttitude + shPeer;
    scores.sort((a, b)=>(a[0] + a[1]) - (b[0] + b[1]))
    
    let idx = 0;
    for(idx; idx< scores.length; idx++){
        if(scores[idx][0] + scores[idx][1] > shSum){
            break;
        }
    }
    scores = scores.slice(idx);
    
    for(let i = 0; i< scores.length; i++){
        if(scores[i][0] > shAttitude && scores[i][1] > shPeer) return -1;
    }
    
    let answer = scores.length + 1;
    
    for(let i = 0; i<scores.length; i++){
        const [att, peer] = scores[i];
        for(let j = i + 1; j<scores.length; j++){
            if(att < scores[j][0] && peer < scores[j][1]){
                answer--;
                break;
            }
        }
    }    
​
    return answer;
}
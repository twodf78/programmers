function solution(scores) {
    var answer = 0;
    const [shAttitude, shPeer] = scores[0];
    const shSum = shAttitude + shPeer;
    scores.sort((a, b)=>{
        let sumA = a[0] + a[1] 
        let sumB = b[0] + b[1]
        return sumA - sumB;
    })
    while(scores.length){
        if(scores[0][0] + scores[0][1] > shSum){
            break;
        }
        scores.shift()
    }
    for(let i = 0; i< scores.length; i++){
        if(scores[i][0] > shAttitude && scores[i][1] > shPeer) return -1;
    }
    
    const filterIdx = [];
    for(let i = 0; i<scores.length; i++){
        const [att, peer] = scores[i];
        for(let j = i + 1; j<scores.length; j++){
            if(att < scores[j][0] && peer < scores[j][1]){
                filterIdx.push(i);
                break;
            }
        }
    }    
​
    return scores.length - filterIdx.length + 1;
}
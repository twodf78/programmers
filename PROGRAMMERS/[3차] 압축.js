const alpha = Array.from({length: 26}, (v, i) => String.fromCharCode(i + 65));
const alphaMap = {};
for(const idx in alpha){
    alphaMap[alpha[idx]] = Number(idx) + 1;
}
function solution(msg) {
    msg = msg.split("");
    let previous = "";
    let maxIdx = 27;
    const answer = [];
    for(let i = 0; i< msg.length; i++){
        const current = msg[i];
        let temp = previous;
        previous += current;
        if(alphaMap[previous]){
            continue;
        }else{
            answer.push(alphaMap[temp]);
            alphaMap[previous] = maxIdx++;
            previous = current;
        }
    }
    answer.push(alphaMap[previous]);
    
    return answer;
}
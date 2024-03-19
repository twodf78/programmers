function solution(money) {
    const dpLen = money.length + 2;
    const front = Array.from({length: dpLen}, _=>0);
    const back = Array.from({length: dpLen}, _=>0);
    
    for(let i = 2; i< dpLen - 1; i++){
        front[i] = Math.max(front[i-1], front[i - 2] + money[i -2]);
    }
    for(let i = 3; i< dpLen; i++){
        back[i] = Math.max(back[i-1], back[i - 2] + money[i - 2]);
    }
    return Math.max(front[dpLen -2], back[dpLen - 1]);
}
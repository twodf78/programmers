function solution(money) {
    const dpLength = money.length + 2;
    const front = Array.from({length: dpLength}, _ => 0);
    const back = Array.from({length: dpLength}, _ => 0);
    for(let i = 2; i< dpLength - 1; i++){
        front[i] = front[i - 1] > front[i- 2] + money[i - 2] ? front[i - 1] : front[i- 2] + money[i - 2] ;
    }
    for(let i = 3; i< dpLength; i++){
        back[i] = back[i - 1] > back[i- 2] + money[i - 2] ? back[i - 1] : back[i- 2] + money[i - 2] ;
    }
    return Math.max(front[dpLength - 2], back[dpLength - 1]);
}    
​
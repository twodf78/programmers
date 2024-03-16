const makePrime = () =>{
    let primeNum = Array.from({length: 10000000}, (v, i) => i);
    primeNum[0] = 0;
    primeNum[1] = 0;
    for(let i = 2; i<= Math.sqrt(primeNum.length) >> 0; i++){
        for(let j = i+i; j<= primeNum.length; j+=i){
            primeNum[j] = 0;
        }
    }
    return primeNum.filter((v)=>v);
}
​
const visit = (n, idx) =>{
    return Array.from({length: n}, (v, i) => i === idx);
}
function solution(numbers) {
    const primeNum =  makePrime();
    
    const numList = numbers.split("");
    const numSet = new Set();
    
    const dfs = (str, visit) =>{
        numSet.add(Number(str));
        for(let i = 0; i< numbers.length; i++){
            if(visit[i]) continue;
            const newVisit = [...visit];
            newVisit[i] = true;
            dfs(str + numbers[i], newVisit);
        }
    }
    
    for(let i = 0; i< numList.length; i++){
        dfs(numList[i], visit(numList.length, i));
    }
    
    
    
    const list = [...numSet];
    let answer = 0;
    for(const num of list){
        if(primeNum.indexOf(num)>=0) answer++;
    }
    return answer;
}
​
​
function chkPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num%i===0) return false;
    }
    return true;
}
​
​
const visit = (n, idx) =>{
    return Array.from({length: n}, (v, i) => i === idx);
}
function solution(numbers) {
    
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
        if(chkPrime(num)) answer++;
    }
    return answer;
}
​
​
​
​
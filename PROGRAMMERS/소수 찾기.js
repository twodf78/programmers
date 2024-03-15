function solution(n) {
    const list = Array.from({length: n}, _ => 0);
    const root = Math.sqrt(n) >> 0;
    list[0] = 1;
    for(let i = 2; i<= root; i++){
        for(let j = i + i; j<=n; j+=i){
            list[j - 1] = 1;
        }
    }
    return list.filter((v)=>v===0).length;
}
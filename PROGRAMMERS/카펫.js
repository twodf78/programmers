function solution(brown, yellow) {
    const candidate = [];
    const add = brown + yellow;
    for(let i = 3; i<= Math.sqrt(add) >> 0; i++){
        if(add % i ===0) candidate.push([add / i, i]);
    }
    for(const [width, height] of candidate){
        if((height - 2) * (width -2) === yellow) return [width , height];
    }
    return candidate[0];
}
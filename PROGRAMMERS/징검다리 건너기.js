function solution(stones, k) {
    let left = 1;
    let right = 200000000;
    while(left <= right) {
        const mid = (left + right) / 2 >> 0;
        let count = 0;
        for(let i = 0; i < stones.length; i++) {
            stones[i] - mid <= 0 ? count++ : count = 0;
            if(count === k) break;
        }
        count === k ? right = mid - 1 : left = mid + 1;
    }
    return left;
}
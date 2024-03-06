function solution(sequence) {
    let min = 0, max = 0;
    let acc = 0;
    for (let i = 0; i < sequence.length; i++) {
        acc = i % 2 === 0 ? acc - sequence[i] : acc + sequence[i];
        max = Math.max(max, acc);
        min = Math.min(min, acc);
    } 
    return max - min;
}
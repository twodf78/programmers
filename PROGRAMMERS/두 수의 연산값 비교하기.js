function solution(a, b) {
    const two = 2 * a * b;
    const first = Number(a.toString() + b.toString());
    
    
    return Math.max(two, first);
}
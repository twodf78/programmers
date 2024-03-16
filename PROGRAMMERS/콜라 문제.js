function solution(a, b, n) {
    let totalCount = 0;
    let received = 0;
    while(a <= n){
        received = ((n / a) >> 0) * b;
        n = n % a + received;
        totalCount += received;
    }
    return totalCount;
}
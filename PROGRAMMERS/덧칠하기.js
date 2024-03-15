function solution(n, m, section) {
    let count = 0;
    let coverRange = 0;
    for(const sec of section){
        if(sec > coverRange){
            count++;
            coverRange = sec + m - 1;
        }
    }
    return count;
}
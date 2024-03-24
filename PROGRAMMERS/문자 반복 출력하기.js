function solution(my_string, n) {
    const list = my_string.split("");
    let answer = '';
    for(const word of list){
        for(let i = 0; i<n; i++){
            answer+=word;
        }
    }
    return answer;
}
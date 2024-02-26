function solution(s1, s2) {
    var answer = 0;
    for(let i = 0; i<s1.length ; i++){
        if(s2.indexOf(s1[i]) >= 0) answer++;
    }
    return answer;
}
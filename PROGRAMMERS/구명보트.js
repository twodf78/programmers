function solution(people, limit) {
    let answer = 0;
    people.sort((a, b)=>a-b);
​
    let small = 0;
    let big = people.length - 1;
    
    while(small <= big){
        if(people[small] + people[big] > limit){
            big--;
            answer++;
        }else{
            big--;
            small++;
            answer++;
        }
    }
    return answer;
}
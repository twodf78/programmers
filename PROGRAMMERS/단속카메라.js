function solution(routes) {
    routes.sort((a, b)=>a[1] - b[1]);
    let answer = 1;
    let previous = routes[0][1];
    for(let i = 1; i<routes.length; i++){
        const current = routes[i];
        if(previous < current[0]){
            answer++;
            previous = current[1];
        }
    }
    return answer;
}
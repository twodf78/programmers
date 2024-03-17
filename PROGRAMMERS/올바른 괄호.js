const map = {};
map["("] = 1;
map[")"] = -1;
​
function solution(s){
    let state = 0;
    const list = s.split("");
    for(const word of list){
        state += map[word];
        if(state < 0) break;
    }
    return state === 0;
}
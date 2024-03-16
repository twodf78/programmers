const weekday = ['THU', 'FRI','SAT', 'SUN','MON','TUE','WED'];
const days = [31,29,31,30,31,30,31,31,30,31,30,31];
function solution(a, b) {
    let day = b;
    for(let i = 0 ; i< a - 1; i++){
        day+=days[i];
    }
    return weekday[day%7];
    
}
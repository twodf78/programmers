function solution(my_string, letter) {
    var answer = my_string.split("").filter((x)=>x!==letter).join("");
    return answer;
}
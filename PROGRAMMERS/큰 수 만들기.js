function solution(number, k) {
    const result = [];
    for(let i = 0; i<  number.length; i++){
        while(k>0 && result.length > 0 &&  result[result.length - 1] < number[i] ){
            k--;
            result.pop();
        }
        result.push(number[i]);
    }
    result.splice(number.length - k, k); 
    return result.join("");
}
​
​
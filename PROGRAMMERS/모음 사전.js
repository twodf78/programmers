const dict = {};
dict["A"] = 1;
dict["E"] = 2;
dict["I"] = 3;
dict["O"] = 4;
dict["U"] = 5;
​
function solution(word) {
    let answer = 0;
    const wordList = word.split("");
    let sum = 0;
    for(let i = 4; i>= 0 ; i--){
        sum += (5 ** (4-i));
        if(wordList.length <= i ) continue;
        answer+= (dict[wordList[i]] - 1)*sum;
    }
    return answer + word.length;
}
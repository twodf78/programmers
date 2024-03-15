function solution(babbling) {
    const pronounce = new Map();
    pronounce.set("aya", 1);
    pronounce.set("ye", 2);
    pronounce.set("woo", 3);
    pronounce.set("ma", 4);
    
    let answer = 0;
    for(const str of babbling){
        let currentStr = "";
        let previousStr = 0;
        for(let i = 0; i< str.length; i++){
            currentStr+=str[i];
            let tempStr = pronounce.get(currentStr);
            if(currentStr >= 4) break;
            if(tempStr){
                if(tempStr != previousStr){
                    currentStr = "";
                    previousStr = tempStr;
                }else{
                    previousStr = 0;
                    break;
                }
            }
        }
        if(previousStr && currentStr === "") answer++;
    }
    
    return answer;
}
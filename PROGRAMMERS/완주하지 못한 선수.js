function solution(participant, completion) {
    const completeMap = new Map();
    for(const complete of completion){
        const c = completeMap.get(complete);
        if(c){
            completeMap.set(complete, c+1);
        }else{
            completeMap.set(complete, 1);
        }
    }
    for(const person of participant){
        const c = completeMap.get(person);
        if(!c) return person;
        completeMap.set(person, c - 1);
    }
}
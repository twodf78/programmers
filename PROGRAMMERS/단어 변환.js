const isValid = (source, target) => {
    let difCount = 0;
    for(let i = 0; i<source.length; i++){
        if(source[i]!==target[i]) difCount++;
        if(difCount > 1) return false;
    }
    return difCount === 1;
}
function solution(begin, target, words) {
    let count = -1;
    const visit = Array.from({length: words.length}, _ => false);
    const bfs = (queue) =>{
        count++;
        const newQueue = [];
        while(queue.length){
            const word = queue.shift();
            if(word === target) return count;
            
            for(let i = 0; i< words.length; i++){
                if(visit[i]) continue;
                if(isValid(word, words[i])){
                    newQueue.push(words[i]);
                    visit[i] = true;
                }
            }
        }
        if(newQueue.length){
            return bfs(newQueue);
        }else{
            return 0;
        }
    }
    return bfs([begin]);
}
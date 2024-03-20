const dr = [
    [1,0],
    [-1,0],
    [0, 1],
    [0, -1]
];
function solution(maps) {
    let min = -1;
    const height = maps.length;
    const width = maps[0].length;
    
    const isValid = (n, m) =>{
        if(n < 0 || n > height - 1 || m < 0 || m> width - 1) return false;
        if(maps[n][m] !== 1) return false;
        return true;
    }
​
    
    let queue = [[0,0]];
    while(queue.length){
        min++;
        if(min > height * width){
            break;
        }
        const newQueue= [];
        for(let i = 0; i< queue.length; i++){
            const [n, m] = queue[i];
            if(n === height - 1 && m === width - 1){
                return min + 1;
            }
​
            for(let i = 0; i< 4; i++){
                const newN = n + dr[i][0];
                const newM = m + dr[i][1];
                if(isValid(newN, newM)) {
                    maps[newN][newM] = 2;
                    newQueue.push([newN, newM]);   
                }
            }
        }
        
        queue = [...newQueue];
    }
​
    return -1;
}
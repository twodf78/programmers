function solution(operations) {
    const queue = [];
    for(const c of operations){
        const [cmd, num] = c.split(" ");
        if(cmd ==="I"){
            queue.push(Number(num));
        }else{
            if(num === "1"){
                const findVal= Math.max(...queue);
                const idx = queue.indexOf(findVal);
                queue.splice(idx, 1);
            }else{
                const findVal= Math.min(...queue);
                const idx = queue.indexOf(findVal);
                queue.splice(idx, 1);
            }
        } 
    }
    return queue.length ? [Math.max(...queue), Math.min(...queue)] : [0,0];
}
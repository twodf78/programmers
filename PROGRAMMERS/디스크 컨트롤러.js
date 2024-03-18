​
function solution(jobs) {
    const len = jobs.length;
    const visit = Array.from({length: jobs.length}, _ => false);
    const copy = jobs.map((v, i)=>[...v, i]);
    copy.sort((a, b)=>{
        if(a[0] === b[0]) return a[1] - b[1];
        return a[0] - b[0]
    })
    
    const getReady = (list, time) =>{
        const res = list.filter((v) => v[0] <= time && !visit[v[2]]);
        res.sort((a, b)=>a[1] - b[1]);
        return res;
    }
    
    let crtTime = copy[0][0];
    let sum = 0;
    let ready = [copy[0]];
    while(ready.length){
        const [start, time, idx] = ready.shift();
        visit[idx] = true;
        sum += (crtTime - start + time);
        crtTime += time;
        
        ready = getReady(copy, crtTime);
        if(!ready.length){
            const next = copy.find((v)=>!visit[v[2]]);
            console.log("next:>>", next);
            if(!next) break;
            crtTime = next[0];
            ready = getReady(copy, crtTime);
        }
        
        console.log("crtTime:>>", crtTime)
        console.log("start:>>", start)
        console.log("time:>>", time)
        console.log("idx:>>", idx)
        console.log("sum:>>", sum)
        console.log("ready:>>", ready)
        console.log("visit:>>", visit)
    }
        console.log("visit:>>", visit)
    return (sum / len) >> 0;
}
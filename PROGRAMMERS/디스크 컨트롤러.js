function solution(jobs) {
    var answer = 0;
    const jobCount = jobs.length;
    
    jobs.sort((a,b)=>{
        if( a[0] === b[0]) return a[1] - b[1];
        return a[0] - b[0];
    })
    
    let jobsChecked = jobs.map((v)=>[...v, false]);
    let timeEndOfCurrentJob = jobs[0][0];
    
    let currentQueue = jobsChecked.map((v, i)=>{
        if(v[0]<= timeEndOfCurrentJob) return i;
        else return -1;
    }).filter((v)=>v>=0);
​
    let totalWaitTime = 0;
    
    while(currentQueue.length){
        
        const currentIdx = currentQueue.shift();
        const [startTime, timeToUse, _] = jobsChecked[currentIdx];
        jobsChecked[currentIdx][2] = true; 
        timeEndOfCurrentJob = timeEndOfCurrentJob < startTime ? startTime + timeToUse : timeEndOfCurrentJob + timeToUse;
        totalWaitTime += timeEndOfCurrentJob - startTime;
        
        console.log("totalWaitTime:>>", totalWaitTime);
        
        jobsChecked = jobsChecked.filter((v)=>!v[2]).sort((a,b)=>a[1]-b[1]);
        currentQueue = jobsChecked.map((v, i)=>{
            if(v[0]<= timeEndOfCurrentJob) return i;
            else return -1;
        }).filter((v)=>v>=0);
        
        if(currentQueue.length === 0 && jobsChecked.length > 0){
            timeEndOfCurrentJob = Math.min(...jobsChecked.map((v)=>v[0]));
            currentQueue = jobsChecked.map((v, i)=>{
                if(v[0]<= timeEndOfCurrentJob) return i;
                else return -1;
            }).filter((v)=>v>=0);
        }
    }
    
    return (totalWaitTime / jobCount) >> 0;
}
const getMinVal = (list) =>{
    return Math.min(...list.map((v)=>v[0]));
}
​
const getCurrentQueue = (list, currentTime)=>{
    return list
    .sort((a,b)=>a[1]-b[1])
    .map((v, i)=>{
        if(v[0]<= currentTime) return i;
        else return -1;
    })
    .filter((v)=>v>=0);
}
​
function solution(jobs) {
    const jobCount = jobs.length;
​
    let jobsChecked = jobs.map((v)=>[...v, false]);
    let timeEndOfCurrentJob = getMinVal(jobsChecked);
    let currentQueue = getCurrentQueue(jobsChecked,timeEndOfCurrentJob);
    let totalWaitTime = 0;
    
    while(currentQueue.length){
        
        const currentIdx = currentQueue.shift();
        const [startTime, timeToUse, checked] = jobsChecked[currentIdx];
        jobsChecked[currentIdx][2] = true; 
        timeEndOfCurrentJob = timeEndOfCurrentJob < startTime ? startTime + timeToUse : timeEndOfCurrentJob + timeToUse;
        totalWaitTime += timeEndOfCurrentJob - startTime;
        
        jobsChecked = jobsChecked.filter((v)=>!v[2]);
        currentQueue = getCurrentQueue(jobsChecked,timeEndOfCurrentJob);
        if(currentQueue.length === 0 && jobsChecked.length > 0){
            timeEndOfCurrentJob = getMinVal(jobsChecked);
            currentQueue = getCurrentQueue(jobsChecked,timeEndOfCurrentJob);
        }
    }
    
    return (totalWaitTime / jobCount) >> 0;
}
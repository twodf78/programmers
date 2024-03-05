const numToTime = (num) =>{
    let hour = (num / 60) >> 0;
    hour = hour < 10 ? "0" + hour.toString() : hour.toString();
    let min = (num % 60).toString();
    min = min < 10 ? "0" + min.toString() : min.toString();
    
    return hour + ":" + min;
}
​
function solution(times, interval, max, timetable) {
    timetable = timetable.map((element) => {
        const [hour, min] = element.split(':').map(Number);
        return hour * 60 + min;
    });
    timetable.sort((a, b) => {
        return a - b;
    });
​
    const maxTime = 540 + interval * (times - 1);
    const shuttle = [];
​
    for (let currentTime = 540; currentTime <= maxTime; currentTime += interval) {
        let count = 0;
        let latestOne = currentTime;
        while (count < max) {
            if(timetable.length <= count) break;
            if (timetable[count] > currentTime) break;
            latestOne = timetable[count];
            count++;
        }
        shuttle.push({
            count: count,
            currentTime: currentTime,
            latestOne: latestOne,
        });
        timetable=timetable.slice(count);
        
    }
​
    let latestTime = -1;
    for (let i = shuttle.length - 1; i >= 0; i--) {
        if (shuttle[i].count === max) continue;
        latestTime = shuttle[i].currentTime;
        break;
    }
​
    
    latestTime = Math.max (shuttle[shuttle.length - 1].latestOne - 1, latestTime);
    
    
    return numToTime(latestTime);
}
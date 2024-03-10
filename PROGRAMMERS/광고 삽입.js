function solution (play_time, adv_time, logs) {
  const pt = calTime(play_time);
  const at = calTime(adv_time);
  const times = new Array(pt).fill(0);
  
  logs.forEach(log => {
    const [start, end] = log.split('-');
    const ws = calTime(start);
    const we = calTime(end);
    times[ws]++;
    times[we]--;
  });
     
  //누적합 한 번: 각 시간대의 시청자 수
  for(let i = 1; i <= pt; i++)
    times[i] += times[i-1];
  
  //누적합 두 번: 각 시간대의 누적 시청자수
  for(let i = 1; i <= pt; i++)
    times[i] += times[i-1];
  
  let sum = times[at-1];
  let idx = 0;
  
  for(let i = at-1; i < pt; i++) {
    if(sum < times[i] - times[i-at]) {
      sum = times[i] - times[i-at];
      idx = i - at + 1;
    }
  }
  
  return formatterTime(idx);
               
}
​
const calTime = (time) => {
  const [hour, min, sec] = time.split(':');
  return hour*3600 +min*60 + sec*1;
}
​
const formatterTime = (time) => {
  let HH = time / 3600 >> 0;
  let MM = (time / 60 >> 0) % 60;
  let SS = time % 60;
  
  HH = HH.toString().padStart(2, "0");
  MM = MM.toString().padStart(2, "0");
  SS = SS.toString().padStart(2, "0");
  
  return `${HH}:${MM}:${SS}`
}
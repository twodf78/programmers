const numToTime = (num) => {
  let hour = ((num / 60) >> 0).toString();
  let min = (num % 60).toString();
  return hour.padStart(2, '0') + ':' + min.padStart(2, '0');
};
​
function solution(times, interval, max, timetable) {
  timetable = timetable.map((element) => {
    const [hour, min] = element.split(':').map(Number);
    return hour * 60 + min;
  });
  timetable.sort((a, b) => a - b);
​
  const maxTime = 540 + interval * (times - 1);
  const shuttle = [];
​
  for (let currentTime = 540; currentTime <= maxTime; currentTime += interval) {
    let count = 0;
    let latestOne = currentTime;
    while (count < max) {
      if (timetable.length <= count || timetable[count] > currentTime) break;
      latestOne = timetable[count];
      count++;
    }
    shuttle.push({
      count: count,
      currentTime: currentTime,
      latestOne: latestOne,
    });
    timetable = timetable.slice(count);
  }
​
  let latestTime = -1;
  for (let i = shuttle.length - 1; i >= 0; i--) {
    if (shuttle[i].count === max) continue;
    latestTime = shuttle[i].currentTime;
    break;
  }
​
  latestTime = Math.max(shuttle[shuttle.length - 1].latestOne - 1, latestTime);
​
  return numToTime(latestTime);
}
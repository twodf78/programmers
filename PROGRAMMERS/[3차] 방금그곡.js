    const [eHour, eMin] = end.split(":").map(Number);
    return (eHour * 60 + eMin) - (sHour * 60 + sMin);
}
const timeConverter = (time) =>{
    const [hour, min] = time.split(":").map(Number);
    
    return (hour * 60 + min) ;
}
function solution(m, musicinfos) {
    musicinfos = musicinfos.map((v, i)=>{
        const [start, end, title, melody] = v.split(",");
        const time = timeIntervalConverter(start, end);
        let str = "";
        let idx = 0;
        for(let i = 1; i<=time; i++){
            str+=melody[idx];
            idx++;
            if(idx>= melody.length){
                idx = 0;
            }
            if(melody[idx] === "#") i--;
        }
        return {
            time: time,
            title: title,
            melody: str,
            idx: timeConverter(start),
        }
    })
    
    musicinfos.sort((a, b)=>{
        if(a.time === b.time) return a.idx - b.idx;
        return b.time - a.time;
    })
    for(const info of musicinfos){
        if(isStrInside(m, info.melody)){
            return info.title;
        }
    }
    return "(None)";
}
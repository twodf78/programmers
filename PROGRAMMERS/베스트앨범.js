function solution(genres, plays) {
    const map = {};
    for(let i = 0; i< genres.length; i++){
        const g = genres[i];
        const p = plays[i];
        if(map[g]){
            map[g].push({
                time: p,
                idx: i,
            });
        }else{
            map[g] = [{
                time: p,
                idx: i,
            }];
        }
    }
    const genreSequence = Object.entries(map).map(([genre, songList])=>{
        return [genre, songList.reduce((acc, val)=>acc + val.time, 0)];
    });
    genreSequence.sort((a,b) => b[1] - a[1]);
    const answer = [];
    for(const [genre, _] of genreSequence){
        map[genre].sort((a, b)=>b.time === a.time ? a.idx - b.idx : b.time - a.time);
        for(let i = 0 ; i< map[genre].length; i++){
            if(i===2) break;
            answer.push(map[genre][i].idx);
        }
    }
    return answer;
}
​
        return genreTime[b.genre] - genreTime[a.genre];
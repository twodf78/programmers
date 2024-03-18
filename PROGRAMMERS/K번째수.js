function solution(array, commands) {
    return commands.map(([start, from, idx])=>{
        const s = array.slice(start - 1, from);
        s.sort((a, b) => a- b);
        return s[idx - 1];
    })
}
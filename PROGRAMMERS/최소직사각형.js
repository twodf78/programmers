function solution(sizes) {
    sizes= sizes.map(([a, b])=>{
        if(a > b) return [a, b];
        return [b, a];
    })
    const width = Math.max(...sizes.map((a)=>a[0]));
    const height = Math.max(...sizes.map((a)=>a[1]));
    return width* height
}
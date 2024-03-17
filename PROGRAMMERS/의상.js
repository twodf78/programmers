function solution(clothes) {
    const map = {};
    clothes.forEach(([a, type])=>{
        if(map[type]) map[type]+=1;
        else map[type] = 1;
    })
    const kindNum = Object.values(map);
    const mul = kindNum.reduce((acc, val)=>(val + 1) * acc, 1);
​
    return mul- 1;
}
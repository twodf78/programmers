function solution(numbers) {
    const strNum = numbers.map((v)=>v.toString());
    strNum.sort((a, b)=>{
        let a1 = Number(a + b)
        let b1 = Number(b + a)
        return b1 - a1;
    })
    return BigInt(strNum.join("")).toString();
}
function solution(answers) {
    const first = Array.from({length: 5}, (v, i)=>i+1);
    const second = Array.from({length: 8}, (v, i)=>i % 2 === 0 ? 2 : ((i / 2)>>0) + (i>2 ? 2 : 1));
    const third = Array.from({length: 10}, (v, i)=>{
        if(i <= 1) return 3;
        else if(i<= 3) return 1;
        else if(i<= 5)return 2;
        else if(i<= 7)return 4;
        else if(i<= 9)return 5;
    });
    console.log(first);
    console.log(second);
    console.log(third);
    let a1 = 0, i1 = 0;
    let a2 = 0, i2 = 0;
    let a3 = 0, i3 = 0;
    for (const ans of answers){
        if(ans === first[i1++]) a1++;
        if(i1>=5) i1=0;
    }
    for (const ans of answers){
        if(ans === second[i2++]) a2++;
        if(i2>=5) i2=0;
    }
    for (const ans of answers){
        if(ans === third[i3++]) a3++;
        if(i3>=5) i3=0;
    }
    let max = Math.max(a1,a2,a3);
    const ans = [];
    if(max === a1) ans.push(1);
    if(max === a2) ans.push(2);
    if(max === a3) ans.push(3);
    return  ans;
}
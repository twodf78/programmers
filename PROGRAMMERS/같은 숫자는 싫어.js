function solution(arr){
    const stack = [arr[0]];
    for(let i = 1; i< arr.length ; i++){
        const last = stack[stack.length - 1];
        const current = arr[i];
        if(last === current) continue;
        stack.push(current);
    }
    return stack;
}
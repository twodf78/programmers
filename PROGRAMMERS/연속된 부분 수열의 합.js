function solution(sequence, k) {
    const resList = [];
    let left = 0;
    let right = 0;
    let sum = sequence[right];
    while(right < sequence.length){
        if(sum < k){
            right++;
            sum += sequence[right];
        }else if(sum > k){
            sum -= sequence[left];
            left++;
        }else{
            resList.push([left, right]);
            right++;
            sum += sequence[right];
        }
    }
    resList.sort((a, b)=>{
        if(a[1] - a[0] === b[1] - b[0]){
            return a[0] - b[0];
        }
        return a[1] - a[0] - (b[1] - b[0]);
    })
    
    return resList[0];
}
​
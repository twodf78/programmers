function solution(a) {
    let answer = 1;
    let leftIndex = 0;
    let leftMin = a[leftIndex];
    let rightIndex = a.length - 1;
    let rightMin = a[rightIndex];
    
    while(leftIndex < rightIndex){
        if(leftMin < rightMin){
            rightIndex--;
            if(rightMin > a[rightIndex]){
                answer++;
                rightMin = a[rightIndex];
            }
        }else{
            leftIndex++;
            if(leftMin > a[leftIndex]){
                answer++;
                leftMin = a[leftIndex];
            }
        }
    }
    
    
    return answer;
}
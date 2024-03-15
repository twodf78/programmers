//         }
const ablePoint = [];
for(let i = 1; i<= 20; i++){
    ablePoint.push(i);
    ablePoint.push(i*2);
    ablePoint.push(i*3);
}
ablePoint.push(50);
​
const ablePointSet = [...new Set(ablePoint)];
ablePointSet.sort((a,b)=>a-b)
​
const pointMap = {};
for(const point of ablePointSet){
    if(point === 50 || (1<= point && point<= 20)){
        pointMap[point] = 1;
    }else{
        pointMap[point] = 0;
    }
​
}
​
const underSixty = (target) => {
    if(pointMap[target] >= 0) return[1, pointMap[target]];
    else if(1 <= target && target<= 40) return[2, 2];
    else if(41 <= target && target<= 50) return[2, 1];
    else if(51 <= target && target<= 60) return[2, 2];
    return [0, 0];
}
function solution(target) {
    // console.log("ablePointSet:>>", ablePointSet)
    if(target<= 60) return underSixty(target);
    else{
        let minCount = 100000;
        let maxSAB = 0;
        let test = 0;
        for(let i = 0; i<= Math.floor(target / 50); i++){
            
            let tempTarget = target - i*50;
            let tempCount = i;
            let tempSAB = i;
​
            tempCount += Math.floor(tempTarget / 60);
​
            const [add, singleAndBool] = underSixty(tempTarget % 60);
            tempCount += add;
            tempSAB += singleAndBool;
            
            if(minCount > tempCount){
                minCount = tempCount;
                maxSAB = tempSAB;
                test = i;
            }else if(minCount === tempCount){
                maxSAB = Math.max(maxSAB, tempSAB);
            }
        }
        return [minCount, maxSAB];
    }
}
​
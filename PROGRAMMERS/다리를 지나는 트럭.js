    return second + 1;
const returnMap = (list, addTime) =>{
    return list.map((v)=>{
        return {
            time: v.time + addTime,
            w: v.w,
        }
    });
}
function solution(bridge_length, bridge_weight, truck_weights) {
    let onBridge = [];
    let onWeight = 0;
    let second = 0;
    
    const onToBridge = (currentWeight) =>{
        onBridge.push({
            time: 0,
            w: currentWeight,
        });
        onWeight+= currentWeight;
        second++;
        onBridge = returnMap(onBridge, 1);
    }
    const downFromBridge = () =>{
        while(onBridge.length && onBridge[0].time >= bridge_length){
            const down = onBridge.shift();
            onWeight-=down.w;
        }
    }
    
    const waitForDown = () =>{
        const wait = bridge_length - onBridge[0].time;
        onBridge = returnMap(onBridge, wait);
        downFromBridge();
        second+=wait;
    }
    for(const w of truck_weights){
        if(w + onWeight <= bridge_weight){
            onToBridge(w);
        }else{
            if(onBridge[0].time > bridge_length){
                downFromBridge();
            }else{
                waitForDown();
            }
            while(w + onWeight > bridge_weight){
                waitForDown();
            }
            onToBridge(w);
        }
    }
​
    
    while(onBridge.length){
        waitForDown();
    }
    return second + 1;
}
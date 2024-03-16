function solution(friends, gifts) {
    var answer = 0;
    const giftLog = Array.from({length: friends.length}, _ => Array.from({length: friends.length}, _ => 0));
    const giftFigure = Array.from({length: friends.length}, _ => 0);
    const friendsMap = {};
    friends.forEach((v, i)=>{
        friendsMap[v] = i;
    })
    
    for(const gift of gifts){
        const [given, taken] = gift.split(" ");
        giftLog[friendsMap[given]][friendsMap[taken]]++;
        giftFigure[friendsMap[given]]++;
        giftFigure[friendsMap[taken]]--;
    }
    
    
    
    let maxReceiveCount = 0;
    for(let i = 0; i< friends.length ; i++){
        let count = 0;
        for(let j = 0; j< friends.length ; j++){
            if(i === j) continue;
            if(giftLog[i][j] < giftLog[j][i]) continue;
            if(giftLog[i][j] === giftLog[j][i] && giftFigure[i] <= giftFigure[j]) continue;
            
            count++;
        }
        maxReceiveCount = Math.max(count, maxReceiveCount);
    }
        
    return maxReceiveCount;
}
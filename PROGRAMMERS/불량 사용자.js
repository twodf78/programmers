const isSame = (user, banned) =>{
    if(user.length !== banned.length) return false;
    for(let i =0 ; i< user.length; i++){
        if(banned[i] === "*") continue;
        if(banned[i] !== user[i] ) return false;
    }
    return true;
}
    
const removeDup = (arr) => {
  return [...new Set(arr.join("|").split("|"))]
    .map((v) => v.split(","))
    .map((v) => v.map((a) => +a));
}
    
function solution(user_id, banned_id) {
    const bannedMap = {};
    for(let u = 0; u< user_id.length; u++){
        for(let b = 0; b< banned_id.length; b++){
            if(isSame(user_id[u], banned_id[b])){
                if(!bannedMap[b]){
                    bannedMap[b] = [u];
                }else{
                    bannedMap[b].push(u);
                }
            }
        }
    }
    const value = Object.values(bannedMap);
​
    let res = value[0].map((v)=>[v]);
    
    const bfs = (idx) =>{
        const currentVal = value[idx];
        const tempRes = [];
        
        while(res.length > 0){
            const caseElement = res.shift();
            for(let i = 0; i< currentVal.length; i++){
                let tempElement = currentVal[i];       
                tempRes.push([...new Set(caseElement.concat(tempElement))].sort((a,b)=>a-b));
            }
        }
        
        res = [...removeDup(tempRes)];
        if(idx >= value.length - 1) return res;
        bfs(idx+1);
    }
    if(banned_id.length>1){
        bfs(1);
    }
    
    const answer = res.map((v)=>[...new Set(v)].sort((a,b)=>a-b)).filter((x)=>x.length === banned_id.length);
​
    const setVal = removeDup(answer);
    
    return setVal.length;
}
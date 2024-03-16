const large = Array.from({length: 26}, (v, i)=>String.fromCharCode(i+ 65));
const small = Array.from({length: 26}, (v, i)=>String.fromCharCode(i+ 97));
console.log(small)
const ableMap = {};
for(const word of large){
    ableMap[word] = 1;
}
​
for(const word of small){
    ableMap[word] = 1;
}
for(let i = 0; i<= 9; i++){
    ableMap[i] = 2;
}
​
ableMap["-"] = 3;
ableMap["_"] = 3;
ableMap["."] = 3;
​
console.l
function solution(new_id) {
    var answer = '';
    new_id = new_id.split("").map((v)=>{
        if(ableMap[v] === 1) return v.toLowerCase();
        else if(ableMap[v] === 2 || ableMap[v] === 3) return v;
    }).filter((v)=>v);
    if(!new_id.length) return "aaa";
    
    let retId = [];
    let previous = new_id[0];
    
    if(previous !== ".")retId.push(previous);
    for(let i = 1; i< new_id.length; i++){
        const current = new_id[i];
        if(current === previous && current === "."){
            continue;
        }
        retId.push(current);
        previous = current;
    }
    while(retId.length){
        if(retId[0] === ".") retId.shift();
        else break;
    }
    
    while(retId.length){
        if(retId[retId.length - 1] === ".") retId.pop();
        else break;
    }
    
    if(!retId.length) return "aaa";
    
    
    retId = retId.join("");
    
    if(retId.length > 15) {
        retId =  retId.slice(0, 15).split("");
        while(retId.length){
            if(retId[retId.length - 1] === ".") retId.pop();
            else break;
        }
        return retId.join("");
    }
    if(retId.length <= 2) return retId.padEnd(3, retId[retId.length -1]);
    return retId;
}
function solution(id_list, report, k) {
    const answer = [];
    const reporterMap = {};
    const receiverMap = {};
    for(const edge of report){
        const [reporter, receiver] = edge.split(" ");
        if(receiverMap[receiver]){
            receiverMap[receiver].add(reporter);
        }else{
            receiverMap[receiver]= new Set();
            receiverMap[receiver].add(reporter);
        }
    }
    
    for(const edge of report){
        const [reporter, receiver] = edge.split(" ");
        if(receiverMap[receiver].size < k) continue;
        if(reporterMap[reporter]){
            reporterMap[reporter].add(receiver);
        }else{
            reporterMap[reporter] = new Set();
            reporterMap[reporter].add(receiver)
        }
    }
    
    
    for(const id of id_list){
        if(!reporterMap[id]){
            answer.push(0);
            continue;
        }
        answer.push(reporterMap[id].size);
    }
    return answer;
}
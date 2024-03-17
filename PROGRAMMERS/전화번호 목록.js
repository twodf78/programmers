function solution(phone_book) {
    phone_book.sort((a, b)=>a.length - b.length);
    const map = {};
    for(const num of phone_book){
        for(let i = 0; i< num.length - 1; i++){
            if(map[num.slice(0, i + 1)]) return false;
        }
        map[num] = 1;
    }
    return true;
}
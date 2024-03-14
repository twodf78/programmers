​
function solution(name, yearning, photo) {
​
    const map = {};
    for(let i = 0; i< name.length; i++){
        map[name[i]] = yearning[i];
    }
    
    return photo.map((v)=>{
        return v.reduce((acc, val) => acc + (map[val] ? map[val] : 0 ), 0);
    });
}
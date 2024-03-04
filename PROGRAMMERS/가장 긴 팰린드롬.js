const isReversible = (str) => {
    let halfLen = (str.length / 2) >> 0;
    for (let i = 0; i <= halfLen; i++) {
        if (str[i] !== str[str.length - 1 - i]) return false;
    }
    return true;
};
​
const isAble = (num, str) => {
    for (let i = 0; i <= str.length - num; i++) {
        if (isReversible(str.slice(i, i + num))) {
            return true;
        }
    }
        return false;
};
​
function solution(s) {
    let max = s.length;
​
    while (max > 0) {
        if (isAble(max, s)) {
            break;
        }
        max--;
    }
    return max;
}
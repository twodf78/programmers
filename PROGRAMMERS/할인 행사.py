from functools import reduce
def mapMaker(list):
    map = {}
    for e in list:
        if e in map:
            map[e] += 1
        else:
            map[e] = 1
    return map
​
def solution(want, number, discount):
    answer, idx = 0, 0
    total = reduce(lambda x, y: x+ y, number)
    map = mapMaker(discount[idx: idx+total])
    while idx + total <= len(discount):
        for i in range(len(want)):
            if(map.get(want[i]) != number[i]):
                answer-=1
                break
        map[discount[idx]] = map.get(discount[idx]) - 1
        idx += 1
        answer += 1
        if(idx + total > len(discount)):
            break
        if discount[idx + total - 1] in map:
            map[discount[idx + total - 1]] = map.get(discount[idx + total - 1]) + 1
        else :
            map[discount[idx + total - 1]] = 1
    return answer
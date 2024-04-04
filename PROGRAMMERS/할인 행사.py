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
    answer=0
    idx = 0
    total = reduce(lambda x, y: x+ y, number)
    while idx + total <= len(discount):
        map = mapMaker(discount[idx: idx+total])
        for i in range(len(want)):
            if(map.get(want[i]) != number[i]):
                answer-=1
                break
        idx += 1
        answer += 1
    return answer
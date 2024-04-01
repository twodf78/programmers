def solution(s, skip, index):
    alpha = [chr(code) for code in range(97,123)]
    for c in skip:
        alpha.remove(c) 
    answer = ""
    for c in s:
        answer+=alpha[(alpha.index(c) + index) % len(alpha)]
    return answer
​
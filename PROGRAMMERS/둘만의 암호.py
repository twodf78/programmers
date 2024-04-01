def solution(s, skip, index):
    alpha = [chr(code) for code in range(97,123)]
    for c in skip:
        alpha.remove(c) 
    answer = ""
    for c in s:
        idx = alpha.index(c) + index 
        while(idx >= len(alpha)):
            idx -= len(alpha)
        answer+=alpha[idx]
    return answer
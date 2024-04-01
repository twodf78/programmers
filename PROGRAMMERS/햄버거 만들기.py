def solution(ingredient):
    answer = 0
    i = 0
    while i < len(ingredient) - 3:
        if "".join(map(str, ingredient[i:i+4])) == '1231':
            answer += 1
            ingredient = ingredient[:i] + ingredient[i+4:]
            i = i - 3 if i - 3 >= 0 else 0
        else:
            i += 1
            
    return answer
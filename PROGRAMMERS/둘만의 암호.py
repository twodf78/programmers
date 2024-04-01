​
def solution(s, skip, index):
    alpha = [chr(code) for code in range(97, 123)]
    for c in skip:
        alpha.remove(c)
    
    transformed_chars = map(lambda c: alpha[(alpha.index(c) + index) % len(alpha)], s)
    return ''.join(transformed_chars)
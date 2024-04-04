from math import floor, sqrt 
def solution(brown, yellow):
    total = brown + yellow
    for i in range(2, floor(sqrt(total)) + 1):
        if total % i != 0:
            continue
        width = total / i - 2
        height = i - 2
        if width * height == yellow:
            return [total / i, i] 
​
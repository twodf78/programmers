from functools import reduce
def solution(arr):
    sum = reduce(lambda x, y: x +y, arr);
    return sum / len(arr)
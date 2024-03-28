def solution(wallpaper):
    answer = []
    xMin = len(wallpaper) 
    xMax = 0
    yMin = len(wallpaper[0]) 
    yMax = 0
    for i, list in enumerate(wallpaper):
        for j, word in enumerate(list):
            if word == "#":
                if xMin >= i: xMin = i;
                if yMin >= j: yMin = j;
                if xMax <= i: xMax = i;
                if yMax <= j: yMax = j;
        
    return [xMin, yMin, xMax + 1, yMax + 1];
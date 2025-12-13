def game_of_life(grid):
    ans = []
    for i in range(len(grid)):
        ans.append([])
        for j in range(len(grid)):
            count = 0
            for x in range(-1, 1 + 1):
                if i + x < 0 or i + x > len(grid) - 1:
                    continue
                for y in range(-1, 1 + 1):
                    if j + y < 0 or j + y > len(grid) - 1:
                        continue
                    if x == 0 and y == 0:
                        continue
                    count += grid[i + x][j + y]
            if grid[i][j] == 0:
                ans[i].append((int(count == 3)))
            else:
                ans[i].append(int(count == 2 or count == 3))
    return ans

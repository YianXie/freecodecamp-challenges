def create_board(dimensions):
    ans = []
    for i in range(dimensions[0]):
        ans.append([])
        for j in range(dimensions[1]):
            if (j % 2 + i % 2) % 2 == 0:
                ans[i].append("X")
            else:
                ans[i].append("O")
    return ans

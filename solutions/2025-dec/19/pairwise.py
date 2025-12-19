def pairwise(arr, target):
    ans = 0
    for i in range(len(arr)):
        for j in range(i + 1, len(arr)):
            if arr[i] + arr[j] == target:
                ans += i + j
    return ans

from collections import defaultdict


def most_frequent(arr):
    counts = defaultdict(int)
    for e in arr:
        counts[e] += 1

    ans = arr[0]
    for key in counts.keys():
        if counts[key] > counts[ans]:
            ans = key

    return ans

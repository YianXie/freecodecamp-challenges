function pairwise(arr, target) {
    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) ans += i + j;
        }
    }
    return ans;
}

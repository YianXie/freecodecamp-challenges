function mostFrequent(arr) {
    const counts = new Map();
    for (let i = 0; i < arr.length; i++) {
        const e = arr[i];
        counts.get(e) ? counts.set(e, counts.get(e) + 1) : counts.set(e, 1);
    }

    let ans = arr[0];
    for (const [key] of counts) {
        if (counts.get(key) > counts.get(ans)) ans = key;
    }

    return ans;
}

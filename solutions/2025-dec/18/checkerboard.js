function createBoard(dimensions) {
    const ans = [];
    for (let i = 0; i < dimensions[0]; i++) {
        ans.push([]);
        for (let j = 0; j < dimensions[1]; j++) {
            if (((j % 2) + (i % 2)) % 2 == 0) ans[i].push("X");
            else ans[i].push("O");
        }
    }
    return ans;
}

function gameOfLife(grid) {
    const ans = [];
    for (let i = 0; i < grid.length; i++) {
        ans.push([]);
        for (let j = 0; j < grid.length; j++) {
            let count = 0;
            for (let x = -1; x <= 1; x++) {
                if (i + x < 0 || i + x > grid.length - 1) continue;
                for (let y = -1; y <= 1; y++) {
                    if (j + y < 0 || j + y > grid.length - 1) continue;
                    if (x === 0 && y === 0) continue;
                    count += grid[i + x][j + y];
                }
            }
            if (grid[i][j] === 0) {
                ans[i].push(count === 3 ? 1 : 0);
            } else {
                ans[i].push(count === 2 || count === 3 ? 1 : 0);
            }
        }
    }
    return ans;
}

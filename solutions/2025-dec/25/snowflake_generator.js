function generateSnowflake(crystals) {
    const snows = crystals.split("\n");
    let ans = "";
    for (let i = 0; i < snows.length; i++) {
        const snow = snows[i];
        let snow_copy = "";
        for (let j = snow.length - 1; j >= 0; j--) {
            snow_copy += snow[j];
        }
        ans += snow;
        ans += snow_copy;
        if (i != snows.length - 1) ans += "\n";
    }
    return ans;
}

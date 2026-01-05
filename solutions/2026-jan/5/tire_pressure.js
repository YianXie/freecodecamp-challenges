const PSI = 14.5038;

function tireStatus(pressuresPSI, rangeBar) {
    const ans = [];
    for (const pressure of pressuresPSI) {
        if (pressure / PSI < rangeBar[0]) ans.push("Low");
        else if (pressure / PSI > rangeBar[1]) ans.push("High");
        else ans.push("Good");
    }
    return ans;
}

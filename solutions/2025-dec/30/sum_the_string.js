function stringSum(str) {
    let total = 0;
    let stringStr = "";
    for (const c of str) {
        if (Number.isFinite(Number(c))) {
            stringStr += c;
        } else if (stringStr) {
            total += parseInt(stringStr);
            stringStr = "";
        }
    }
    if (stringStr) total += parseInt(stringStr);
    return total;
}

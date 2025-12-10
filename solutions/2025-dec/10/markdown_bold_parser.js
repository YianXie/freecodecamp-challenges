function parse_bold(markdown) {
    let lastSymbol = null;
    let start = 0;
    let locations = [];
    while (true) {
        let idx;
        if (!lastSymbol) {
            const idx1 = markdown.indexOf("**", start);
            const idx2 = markdown.indexOf("__", start);
            if (idx1 == -1 || idx2 == -1) {
                idx = Math.max(idx1, idx2);
                lastSymbol = idx1 > idx2 ? "**" : "__";
            } else {
                idx = Math.min(idx1, idx2);
                lastSymbol = idx1 < idx2 ? "**" : "__";
            }
        } else {
            idx = markdown.indexOf(lastSymbol, start);
            lastSymbol = null;
        }
        if (idx == -1) break;
        start = idx + 2;
        if (
            locations.length % 2 == 0 &&
            markdown[Math.min(markdown.length - 1, idx + 2)] == " "
        )
            continue;
        else if (
            locations.length % 2 == 1 &&
            markdown[Math.max(0, idx - 1)] == " "
        )
            continue;
        locations.push(idx);
    }

    if (locations.length % 2 != 0) return markdown;

    let ans = "";
    let count = 0;
    let i = 0;
    while (i < markdown.length) {
        if (locations.includes(i)) {
            ans += count % 2 == 0 ? "<b>" : "</b>";
            count += 1;
            i += 1;
        } else ans += markdown[i];
        i += 1;
    }

    return ans;
}

console.log(parse_bold("**This is bold**"));
console.log(parse_bold("__This is also bold__"));

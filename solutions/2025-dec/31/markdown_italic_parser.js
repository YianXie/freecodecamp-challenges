function parseItalics(markdown) {
    let prev = null;
    const idx = [];
    for (let i = 0; i < markdown.length; i++) {
        if (prev === null && (markdown[i] == "*" || markdown[i] == "_")) {
            if (i + 1 < markdown.length && markdown[i + 1] != " ") prev = i;
        } else if (
            prev !== null &&
            (markdown[i] == "*" || markdown[i] == "_")
        ) {
            if (i - 1 >= 0 && markdown[i - 1] != " ") {
                idx.push(prev);
                idx.push(i);
                prev = null;
            }
        }
    }

    let ans = "";
    for (let i = 0; i < markdown.length; i++) {
        if (idx.includes(i)) {
            if (idx.indexOf(i) % 2 == 0) ans += "<i>";
            else ans += "</i>";
        } else {
            ans += markdown[i];
        }
    }
    return ans;
}

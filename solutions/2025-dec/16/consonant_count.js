function hasConsonantCount(text, target) {
    const vowels = ["a", "e", "i", "o", "u"];
    let numConsonants = 0;
    for (const c of text) {
        if (!/^[a-z]+$/i.test(c)) continue;
        if (!vowels.includes(c)) numConsonants++;
    }
    return numConsonants == target;
}

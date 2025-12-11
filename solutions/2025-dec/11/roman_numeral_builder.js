function toRoman(num) {
    const values = {
        1000: "M",
        500: "D",
        100: "C",
        50: "L",
        10: "X",
        5: "V",
        1: "I",
    };
    const actuals = [];
    for (const value of Object.keys(values).reverse()) {
        actuals.push(Math.floor(num / value));
        num %= value;
    }

    let ans = "";
    const valuesList = [];
    Object.values(values).forEach((value) => {
        valuesList.unshift(value);
    });

    for (let i = 0; i < actuals.length; i++) {
        if (actuals[i] > 3) {
            if (actuals[i - 1] == 1)
                ans =
                    ans.substring(0, ans.length - 1) +
                    valuesList[i] +
                    valuesList[i - 2];
            else ans = ans + valuesList[i] + valuesList[i - 1];
        } else {
            ans += valuesList[i].repeat(actuals[i]);
        }
    }

    return ans;
}

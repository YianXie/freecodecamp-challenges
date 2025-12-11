def to_roman(num):
    values = {1000: "M", 500: "D", 100: "C", 50: "L", 10: "X", 5: "V", 1: "I"}
    actuals = []
    for value in values.keys():
        actuals.append(num // value)
        num %= value

    ans = ""
    for i in range(len(actuals)):
        valuesList = list(values.values())
        if actuals[i] > 3:
            if actuals[i - 1] == 1:
                ans = ans[: len(ans) - 1] + valuesList[i] + valuesList[i - 2]
            else:
                ans = ans + valuesList[i] + valuesList[i - 1]
        else:
            ans += valuesList[i] * actuals[i]

    return ans

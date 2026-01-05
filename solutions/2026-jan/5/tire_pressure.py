PSI = 14.5038


def tire_status(pressures_psi, range_bar):
    ans = []
    for pressure in pressures_psi:
        if pressure / PSI < range_bar[0]:
            ans.append("Low")
        elif pressure / PSI > range_bar[1]:
            ans.append("High")
        else:
            ans.append("Good")
    return ans

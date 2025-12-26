def generate_snowflake(crystals):
    snows = crystals.split("\n")
    ans = ""
    for i in range(len(snows)):
        snow = snows[i]
        snow_copy = snow[::-1]
        ans += snow
        ans += snow_copy
        if i != len(snows) - 1:
            ans += "\n"
    return ans

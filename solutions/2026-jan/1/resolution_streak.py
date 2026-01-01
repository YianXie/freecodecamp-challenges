def resolution_streak(days):
    streak = 0
    for day in days:
        if day[0] >= 10000 and day[1] <= 120 and day[2] >= 5:
            streak += 1
        else:
            break

    if streak == len(days):
        return f"Resolution on track: {streak} day streak."
    return f"Resolution failed on day {streak + 1}: {streak} day streak."

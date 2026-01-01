function resolutionStreak(days) {
    let streak = 0;
    for (const day of days) {
        if (day[0] >= 10000 && day[1] <= 120 && day[2] >= 5) streak++;
        else break;
    }
    if (streak == days.length)
        return `Resolution on track: ${streak} day streak.`;
    return `Resolution failed on day ${streak + 1}: ${streak} day streak.`;
}

function speedCheck(speedMph, speedLimitKph) {
    const speedKph = speedMph * 1.60934;
    if (speedKph <= speedLimitKph) return "Not Speeding";
    else if (speedKph <= speedLimitKph + 5) return "Warning";
    return "Ticket";
}

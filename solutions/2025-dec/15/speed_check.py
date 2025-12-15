def speed_check(speedMph, speedLimitKph):
    speedKph = speedMph * 1.60934
    if speedKph <= speedLimitKph:
        return "Not Speeding"
    elif speedKph <= speedLimitKph + 5:
        return "Warning"
    return "Ticket"

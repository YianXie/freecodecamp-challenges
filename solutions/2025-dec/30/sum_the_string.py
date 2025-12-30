def string_sum(s):
    total = 0
    num_str = ""
    for c in s:
        if c.isdigit():
            num_str += c
        elif not c.isdigit() and num_str:
            total += int(num_str)
            num_str = ""
    if num_str:
        total += int(num_str)
    return total

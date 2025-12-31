def parse_italics(markdown):
    prev = None
    idx = []
    for i in range(len(markdown)):
        if prev is None and markdown[i] in ("*", "_"):
            if i + 1 < len(markdown) and markdown[i + 1] != " ":
                prev = i
        elif prev is not None and markdown[i] in ("*", "_"):
            if i - 1 >= 0 and markdown[i - 1] != " ":
                idx.append(prev)
                idx.append(i)
                prev = None

    ans = ""
    for i in range(len(markdown)):
        if i in idx:
            if idx.index(i) % 2 == 0:
                ans += "<i>"
            else:
                ans += "</i>"
        else:
            ans += markdown[i]

    return ans


print(parse_italics("_ This is also not italic_"))

"""This is definitely not the best solution ngl"""


def parse_bold(markdown: str):
    lastSymbol = None
    start = 0
    locations = []
    while True:
        if lastSymbol is None:
            idx1 = markdown.find("**", start)
            idx2 = markdown.find("__", start)
            if idx1 == -1 or idx2 == -1:
                idx = max(idx1, idx2)
                lastSymbol = "**" if idx1 > idx2 else "__"
            else:
                idx = min(idx1, idx2)
                lastSymbol = "**" if idx1 < idx2 else "__"
        else:
            idx = markdown.find(lastSymbol, start)
            lastSymbol = None
        if idx == -1:
            break
        start = idx + 2
        if len(locations) % 2 == 0 and markdown[min(len(markdown) - 1, idx + 2)] == " ":
            continue
        elif len(locations) % 2 == 1 and markdown[max(0, idx - 1)] == " ":
            continue
        locations.append(idx)

    if len(locations) % 2 != 0:
        return markdown

    ans = ""
    count = 0
    i = 0
    while i < len(markdown):
        if i in locations:
            if count % 2 == 0:
                ans += "<b>"
            else:
                ans += "</b>"
            count += 1
            i += 1
        else:
            ans += markdown[i]
        i += 1

    return ans

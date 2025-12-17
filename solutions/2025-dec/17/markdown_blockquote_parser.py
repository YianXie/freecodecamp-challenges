def parse_blockquote(markdown):
    markdown = markdown.lstrip()
    ans = ""
    if markdown[0] == ">":
        ans += "<blockquote>" + markdown[1:].lstrip() + "</blockquote>"
    return ans

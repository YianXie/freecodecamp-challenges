def parse_image(markdown):
    bracketStart = markdown.find("[")
    bracketEnd = markdown.find("]")
    altText = markdown[bracketStart + 1 : bracketEnd]

    urlStart = markdown.find("(")
    urlEnd = markdown.find(")")
    urlText = markdown[urlStart + 1 : urlEnd]

    return f'<img src="{urlText}" alt="{altText}">'

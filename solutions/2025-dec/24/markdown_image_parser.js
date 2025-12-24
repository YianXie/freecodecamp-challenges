function parseImage(markdown) {
    const bracketStart = markdown.indexOf("[");
    const bracketEnd = markdown.indexOf("]");
    const altText = markdown.substring(bracketStart + 1, bracketEnd);

    const urlStart = markdown.indexOf("(");
    const urlEnd = markdown.indexOf(")");
    const urlText = markdown.substring(urlStart + 1, urlEnd);

    return `<img src="${urlText}" alt="${altText}">`;
}

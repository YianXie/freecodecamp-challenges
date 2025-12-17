function parseBlockquote(markdown) {
    markdown = markdown.trim();
    let ans = "";
    if (markdown[0] == ">")
        ans += "<blockquote>" + markdown.substring(1).trim() + "</blockquote>";
    return ans;
}

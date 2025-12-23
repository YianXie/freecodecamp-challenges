function emailChainCount(subject) {
    subject = subject.toLowerCase();
    const fwCount = subject.split("fw:").length - 1;
    const fwdCount = subject.split("fwd:").length - 1;
    const reCount = subject.split("re:").length - 1;

    return fwCount + fwdCount + reCount;
}

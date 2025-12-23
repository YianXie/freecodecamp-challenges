def email_chain_count(subject):
    subject = subject.lower()
    fwCount = subject.count("fw:")
    fwdCount = subject.count("fwd:")
    reCount = subject.count("re:")

    return fwCount + fwdCount + reCount

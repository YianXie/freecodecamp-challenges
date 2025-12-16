def has_consonant_count(text, target):
    vowels = set[str](["a", "e", "i", "o", "u"])
    numConsonants = 0
    for c in text.lower():
        if not c.isalpha():
            continue
        if c not in vowels:
            numConsonants += 1
    return numConsonants == target

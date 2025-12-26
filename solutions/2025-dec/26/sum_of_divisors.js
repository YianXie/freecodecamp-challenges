function sumDivisors(n) {
    const divisors = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            divisors.push(i);
            if (i != n / i) {
                divisors.push(n / i);
            }
        }
    }
    return divisors.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );
}

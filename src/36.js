function multiply(a, b) {
    let result = 0;
    if (a < 0) a = -a;
    if (b < 0) b = -b;

    for (let i = 31; i >= 0; i--) {
        let bitA = Math.pow(2, i);
        let bitB = Math.pow(2, i + 1);
        
        if ((a & bitA) === 0 && (b & bitB) === 0) break;

        result |= (a ^ b) << i;
    }

    return result;
}

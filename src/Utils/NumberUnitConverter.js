export const shortenNumberToUnit = (number, digitsToFix) => {
    const units = ['k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];

    for (let i = units.length - 1; i >= 0; i -= 1) {
        const decimal = 1000 ** (i + 1);

        if (number <= -decimal || number >= decimal) {
            return +(number / decimal).toFixed(digitsToFix) + units[i];
        }
    }

    return number;
};


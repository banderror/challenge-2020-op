const conversionTableTo: [number, string][] = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
];

const conversionTableFrom: Record<string, number> = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
};

export abstract class RomanNumerals {
    public static toRoman(num: number): string {
        const isValidNumber = 
            !Number.isNaN(num) &&
            Number.isInteger(num) &&
            Number.isFinite(num) &&
            num > 0;

        if (!isValidNumber) {
            return '';
        }

        let result = '';
        let remainder = num;

        for (let i = 0; i < conversionTableTo.length; i++) {
            const [value, romanEquivalent] = conversionTableTo[i];
            const count = Math.floor(remainder / value);
            result += romanEquivalent.repeat(count);
            remainder -= count * value;
        }

        return result;
    }

    public static fromRoman(rawStr: string | null | undefined): number {
        const str = (rawStr || '').trim().toUpperCase();
        if (!str || !/^[MDCLXVI]+$/.test(str)) {
            return NaN;
        }

        let result = 0;

        for (let i = 0; i < str.length; i++) {
            const currValue = conversionTableFrom[str.charAt(i)];
            const nextValue = conversionTableFrom[str.charAt(i + 1)] || 0;

            if (currValue >= nextValue) {
                // Current char is of at least the same value as the next one.
                // Example: XXV. X >= X >= V.
                // Calculation: 10 + 10 + 5.
                result += currValue;
            } else {
                // Next char is "bigger" than the current one.
                // Example: XIX. X >= I < X. Last 'X' is bigger than the previous 'I'.
                // Calculation: 10 - 1 + 10.
                result -= currValue;
            }
            
        }

        return result;
    }
}

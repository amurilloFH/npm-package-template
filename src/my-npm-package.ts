export class MyNpmPackage {

    /**
     * Function to sum the given numbers
     * @param numbers The numbers to sum
     * @returns A number with the sum result 
     */
    sum = (...numbers: Array<number>): number => {
        if(!numbers.length) return 0;
        if(numbers.length === 1) {
            const number = numbers[0];
            if(typeof number !== 'number')
                throw new Error('invalid argument');
            return number;
        }
        return numbers.reduce((a, b) => {
            if(typeof a !== 'number' || typeof b !== 'number')
                throw new Error('invalid argument');
            return a+b;
        })
    }

}

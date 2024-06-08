
import { capitalize } from "./funC";
import { calculator } from "./funC";

test("string is capitalized", () => {
    expect(capitalize('xedfgv')).toBe("Xedfgv");// or .toMatch
    //expect(capitalize('xedfgv')).toBe("XEDFGV");//error
});

/* test("string is reversed", () => {
    expect(reverseString('DervMenr')).toMatch('rneMvreD');
});
 */

describe('calculator', () =>{
    test('sum is 9', () =>{
        expect(calculator.add(5,4)).toEqual(9);//or .toBe(9)
    });

    test('difference is 2', () =>{
        expect(calculator.subtract(7,5)).toBe(2);
    });

    test('dividend is 4', () =>{
        expect(calculator.divide(24,6)).toEqual(4);//or .toBe(9)
    });

    test('product is 32', () =>{
        expect(calculator.multiply(16,2)).toEqual(32);//or .toBe(9)
    });
})
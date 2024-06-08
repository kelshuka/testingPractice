
import { capitalize, reverseString, calculator } from "./funC"; 
import { caesarCipher, analyzeArray } from "./funC";

test("string is capitalized", () => {
    expect(capitalize('xedfgv')).toBe("Xedfgv");
});

describe('reverse function', () => {
    test("string is reversed", () => {
        expect(reverseString('DervMenr')).toMatch('rneMvreD');
    });

    test("space and other characters test", () => {
        expect(reverseString('The world, view!')).toMatch('!weiv ,dlrow ehT');
    });
});



describe('calculator', () =>{
    test('sum is 9', () =>{
        expect(calculator.add(5,4)).toEqual(9);//or .toBe(9)
    });

    test('difference is 2', () =>{
        expect(calculator.subtract(7,5)).toBe(2);
    });

    test('dividend is 4', () =>{
        expect(calculator.divide(24,6)).toEqual(4);
    });

    test('product is 32', () =>{
        expect(calculator.multiply(16,2)).toEqual(32);
    });
});

describe('Caesar Shift Cipher', () => {
    test('is abc', () =>{
        expect(caesarCipher('xyz',3)).toMatch('abc');
    });

    test('is fhj', () =>{
        expect(caesarCipher('bdf',4)).toMatch('fhj');
    });
    test('Case sensitivie: is KhOOr', () =>{
        expect(caesarCipher('HeLLo',3)).toMatch('KhOOr');
    });
    test('space, punctuation and other characters test: is Khoor, Zruog!', () =>{
        expect(caesarCipher('Hello, World!',3)).toMatch('Khoor, Zruog!');
    });
    test('Shift three places to the left: is TLoiA', () =>{
        expect(caesarCipher('WOrlD',-3)).toMatch('TLoiA');
    });
    test('no shift, is nothing', () =>{
        expect(caesarCipher('nothing',0)).toMatch('nothing');
    });   
});

describe('Analyze Array', () => {
    test('is object', () =>{
        expect(analyzeArray([3,4,5])).toBeInstanceOf(Object);
    });

    test('contain average', () =>{
        expect(Object.keys( analyzeArray([3,4,5])) ).toContain("average");
    });
    test('return full object', () =>{
        expect(analyzeArray([1,8,3,4,2,6])).toEqual({
            "average":4, min:1, max:8, length: 6});
    });
    test('negative value test', () =>{
        expect(analyzeArray([1,8,3,4,-3,2,6])).toEqual({
            "average":3, min:-3, max:8, length: 7});
    });
   
});

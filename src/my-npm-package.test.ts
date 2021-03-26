import { MyNpmPackage } from "./my-npm-package";

const myNpmPackage: MyNpmPackage = new MyNpmPackage();

describe("subtract()", () => {

    describe("When args is empty", () => {
        test("it should return 0", () => {
            expect(myNpmPackage.sum()).toEqual(0);
        });
    });

    describe("When given an invalid arg", () => {
        test("it should throw an error", () => {
            expect(() => myNpmPackage.sum(null as any)).toThrowError('invalid argument');
            expect(() => myNpmPackage.sum("hello" as any)).toThrow('invalid argument');
            expect(() => myNpmPackage.sum(undefined as any)).toThrow('invalid argument');

            expect(() => myNpmPackage.sum(8, null as any)).toThrow('invalid argument');
            expect(() => myNpmPackage.sum(3, 7, undefined as any)).toThrow('invalid argument');
            expect(() => myNpmPackage.sum("" as any, null as any, 4, 5)).toThrow('invalid argument');
            expect(() => myNpmPackage.sum(8, 9, 10, undefined as any, 18)).toThrow('invalid argument');

        });
    });

    describe("When there's just one arg", () => {
        test("it should return the number", () => {
            expect(myNpmPackage.sum(6)).toEqual(6);
        });
    });

    describe("When given 2 or more valid args", () => {
        test("it should return the sum of the args", () => {
            expect(myNpmPackage.sum(6, 15)).toEqual(21);
            expect(myNpmPackage.sum(6, 15, 3)).toEqual(24);
            expect(myNpmPackage.sum(6, 15, 3, 58)).toEqual(82);
        });
    });

    describe("When summing 3 plus 3", () => {
        test("it should return 5", () => {
            expect(myNpmPackage.sum(3, 2)).toEqual(5);
        });
    });

})

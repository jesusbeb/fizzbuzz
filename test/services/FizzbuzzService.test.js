const FizzbuzzService= require("./../../lib/services/FizzbuzzService");

describe("Test para FizzbuzzService", () => {
    test("1. Enviando un numero que regrese el mismo numero", () => {
        number= FizzbuzzService.applyValidationInNumber(1);
        expect(number).toBe(1);
    });

    test("2. Enviando un numero que regrese FIZZ", () => {
        number= FizzbuzzService.applyValidationInNumber(3);
        expect(number).toBe("FIZZ");
    });

    test("3. Enviando un numero que regrese BUZZ", () => {
        number= FizzbuzzService.applyValidationInNumber(5);
        expect(number).toBe("BUZZ");
    });

    test("4. Enviando un numero que regrese FIZZBUZZ", () => {
        number= FizzbuzzService.applyValidationInNumber(15);
        expect(number).toBe("FIZZBUZZ");
    })
});
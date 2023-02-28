import { Currency } from "../../../hocs/with-currency/currency";

describe("/hocs/with-currency/currency", () => {
    describe("constructor", () => {
        test("should set value to 0 if no argument is provided", () => {
            const realInput = new Currency();
            expect(realInput.value).toBe(0);
        });

        test("should set value to the provided argument if it is a number", () => {
            const realInput = new Currency("10");
            expect(realInput.value).toBe(10);
        });

        test("should convert the provided argument to a number if it is a string", () => {
            const realInput = new Currency("10");
            expect(realInput.value).toBe(10);
        });
    });

    describe("getFormattedValue", () => {
        test("should format the value as currency", () => {
            const realInput = new Currency("123.45");
            expect(realInput.getFormattedValue()).toBe("123,45");
        });

        test("should format the value as currency with 2 decimal places", () => {
            const realInput = new Currency("123.456");
            expect(realInput.getFormattedValue()).toBe("123,46");
        });
    });

    describe("setRawValue", () => {
        test("should set the value correctly for a valid input", () => {
            const realInput = new Currency("0");
            realInput.setRawValue("123,45");
            expect(realInput.value).toBe(123.45);
        });

        test("should set the value to 0 for an invalid input", () => {
            const realInput = new Currency("0");
            realInput.setRawValue("abc");
            expect(realInput.value).toBe(0);
        })
    });
});
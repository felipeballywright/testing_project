import { calculator } from "./calculator";

test("calculate the value", () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.substract(7, 2)).toBe(5);
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.divide(8, 2)).toBe(4);
})
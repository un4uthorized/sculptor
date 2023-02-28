import { Currency } from "./currency";

export function UpdateRealInputValue(input: Currency, value: string) {
    input.setRawValue(value);
}

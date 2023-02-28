export class Currency {
    value: number;

    constructor(value = "0") {
        this.value = parseFloat(value);
    }

    setRawValue(rawValue: string) {
        const numericValue = parseFloat(rawValue.replace(/[\D]+/g, "")) / 100;
        if (isNaN(numericValue)) {
            return;
        }
        this.value = numericValue;
    }

    getFormattedValue() {
        return this.value.toLocaleString("pt-BR", {
            currency: "BRL",
            minimumFractionDigits: 2
        });
    }
}
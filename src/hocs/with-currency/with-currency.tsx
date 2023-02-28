import { useEffect, useState } from 'react'


interface WithCurrencyInputProps {
    value: string;
    setState: React.Dispatch<React.SetStateAction<number>>;
}

const withCurrency = <O extends object>(WrappedComponent: React.ComponentType<O>) => {
    return function MoneyInput(props: O & WithCurrencyInputProps) {
        const [formattedValue, setFormattedValue] = useState("");

        useEffect(() => {
            setFormattedValue(formatValue(parseFloat(props.value)));
        }, [props.value]);

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const input = event.target.value;
            if (input) {
                const numericValue = parseFloat(input.replace(/[\D]+/g, "")) / 100;
                props.setState(numericValue);
                setFormattedValue(formatValue(numericValue));
            }
        };

        const formatValue = (value: number) => {
            return value.toLocaleString("pt-BR", {
                currency: "BRL",
                minimumFractionDigits: 2
            });
        };

        const inputProps = {
            type: "text",
            value: formattedValue,
            onChange: handleChange
        };

        return (
            <WrappedComponent
                {...props}
                {...inputProps}
            />
        );
    };
}

export default withCurrency;
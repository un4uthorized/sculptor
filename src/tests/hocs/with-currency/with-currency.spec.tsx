import React from "react";
import { render, fireEvent } from "@testing-library/react";
import withCurrency from "../../../hocs/with-currency/with-currency";
import sinon from "sinon";


const TestComponent: React.FC = (props) => {
    const { setState, ...rest } = props as any;

    return (
        <input data-testid="input" {...rest} />
    );
};

const WrappedTestComponent = withCurrency(TestComponent);

describe("withCurrency", () => {
    it("formats the input value as currency", () => {
        const setStateMock = sinon.spy();
        const { getByTestId } = render(
            <WrappedTestComponent setState={setStateMock} value="1000" />
        );

        const input = getByTestId("input") as HTMLInputElement;
        expect(input.value).toEqual("1.000,00");
    });

    it("updates the formatted value when the value prop changes", () => {
        const setStateMock = sinon.spy();
        const { getByTestId, rerender } = render(
            <WrappedTestComponent setState={setStateMock} value="1000" />
        );

        const input = getByTestId("input") as HTMLInputElement;
        expect(input.value).toEqual("1.000,00");

        rerender(<WrappedTestComponent setState={setStateMock} value="500" />);
        expect(input.value).toEqual("500,00");
    });

    it("parses input value and updates state on change", () => {
        const setStateMock = sinon.spy();
        const { getByTestId } = render(
            <WrappedTestComponent setState={setStateMock} value="0" />
        );

        const input = getByTestId("input") as HTMLInputElement;
        fireEvent.change(input, { target: { value: "1.234,56" } });

        sinon.assert.calledWith(setStateMock, 1234.56);
    });
});

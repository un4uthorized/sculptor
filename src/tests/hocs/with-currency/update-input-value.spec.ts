import { Currency } from "../../../hocs/with-currency/currency"
import { UpdateRealInputValue } from "../../../hocs/with-currency/update-input-value"

describe('/hocs/with-currency/update-input-value', () => {
    it('should set the value correctly for a valid input', () => {
        const realInput = new Currency('0')
        UpdateRealInputValue(realInput, '123,45')
        expect(realInput.value).toBe(123.45)
    })

    it('should set the value to 0 for an invalid input', () => {
        const realInput = new Currency('0')
        UpdateRealInputValue(realInput, 'abc')
        expect(realInput.value).toBe(0)
    })
})
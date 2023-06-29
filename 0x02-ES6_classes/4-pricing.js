/*eslint-disable*/
export default class Pricing {
    constructor(amount, currency) {
        if (typeof amount !== 'number') {
            throw new TypeError('Amount must be a number')
        }else {
            this._amount = amount;
        }
        if (typeof currency !== 'object') {
            throw new TypeError('Currency must be an object')
        }
    }

    get amount () {
        return this._amount;
    }

    set amount (newAmount) {
        if (typeof newAmount !== 'number') {
            throw new TypeError('Amount must be a number')
        }
        this._amount = newAmount;
    }

    get currency () {
        return this._currency;
    }

    set currency (newCurrency) {
        if (typeof newCurrency !== 'object') {
            throw new TypeError('Currency must be an object')
        }
        this._currency = newCurrency;
    }

    displayFullPrice() {
        return `${this._amount} ${this._currency.name} (${this._currency.code})`
    }

    static convertPrice(amount, conversionRate) {
        if (typeof amount !== 'number') {
            throw new TypeError('Amount must be a number')
        }
        if (typeof conversionRate !== 'number') {
            throw new TypeError('ConversionRate must be a number')
        }
        return amount * conversionRate;
    }
}
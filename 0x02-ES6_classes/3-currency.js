export default class Currency { /* eslint-disable */
    constructor(code, name) {
        if (typeof code !== 'string') {
            throw new TypeError('Code must be a string')
        }else {
            this._code = code
        }
        if (typeof name !== 'string') {
            throw new TypeError('Name must be a string')
        }

        function displayFullCurrency() {
            return `${this._name} (${this._code})`
        }
    }
}
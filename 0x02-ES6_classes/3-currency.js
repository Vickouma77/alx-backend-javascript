export default class Currency { /* eslint-disable */
    constructor(code, name) {
        if (typeof code !== 'string') {
            throw new TypeError('Code must be a string')
        }else {
            this._code = code
        }
        if (typeof name !== 'string') {
            throw new TypeError('Name must be a string')
        }else {
            this._name = name
        }   
    }

    get code () {
        return this._code
    }

    set code (newCode) {
        if (typeof code !== 'string') {
            throw new TypeError('Code must be a string')
        }
    }

    get name () {
        return this._name
    }

    set name (newName) {
        if (typeof newName !== 'string') {
            throw new TypeError('Name must be a string')
        }
    }
}
function createInt8TypedArray(length, position, value) {
    if (position < 0 || position > length - 1) {
        throw Error ('Position outside range');
    }
}
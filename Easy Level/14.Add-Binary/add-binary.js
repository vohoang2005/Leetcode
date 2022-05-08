// One Liner Code, but Runtime isn't great, 26%, Memory is great, 96%.

var addBinary = function(a, b) {
    return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2)
};

// More details on the code, decent Runtime and great Memory.

var addBinary = function(a, b) {
    const aBin = `0b${a}` // 0a use to calculate the binary number.
    const bBin = `0b${b}` // 0b use to calculate the binary number.
    const sum = BigInt(aBin) + BigInt(bBin) // BigInt is used to convert to regular number.
    return sum.toString(2) // Using .toString(2) to convert to Binary number.
  };
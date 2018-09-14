const valueDoct = {
    '0IsMultipleOfThree': 'Linio',
    '0IsMultipleOfFive': 'IT',
    '0IsMultipleOfThreeAndFive': 'Linianos'
};

const defaultPrint = (i) => i;
const getPrinted = (i) => valueDoct[`${i % 3 + i % 5 }IsMultipleOfThreeAndFive`] ||
valueDoct[`${i % 3 }IsMultipleOfThree`] ||
valueDoct[`${i % 5 }IsMultipleOfFive`];


const printNumbersTo = (until = 100) => {
    for (let i = 1, len = until + 1; i < len; i++) {
        let value = getPrinted(i);
        if (!value) value = defaultPrint(i);
        console.log(value);
    }
};


module.exports = printNumbersTo;

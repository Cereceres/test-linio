const printDoct = {
    '0IsMultipleOfThree': () => console.log('Linio'),
    '0IsMultipleOfFive': () => console.log('IT'),
    '0IsMultipleOfThreeAndFive': () => console.log('Linianos')
};

const defaultPrint = (i) => console.log(i);
const getPrinter = (i) => printDoct[`${i % 3 + i % 5 }IsMultipleOfThreeAndFive`] ||
printDoct[`${i % 3 }IsMultipleOfThree`] ||
printDoct[`${i % 5 }IsMultipleOfFive`];


const printNumbersTo = (until = 100) => {
    for (let i = 1, len = until + 1; i < len; i++) {
        let printer = getPrinter(i);
        if (!printer) printer = defaultPrint;
        printer(i);
    }
};


module.exports = printNumbersTo;

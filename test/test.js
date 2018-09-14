const assert = require('assert');


const print = require('../index');
const valuesPrinted = require('./printed-values');

describe('Test to printer of 100 numbers with linio modifications', () => {
    it('should be a function', () => {
        assert(typeof print === 'function');
    });
    it('should call the console.log with a array of 101 values', () => {
        const valuesPrintedByConsoleLog = [];
        console._log = console.log;
        console.log = (...args) => {
            valuesPrintedByConsoleLog.push(args[0]);
            return console._log(...args);
        };
        print();
        assert.deepEqual(valuesPrinted, valuesPrintedByConsoleLog);
    });
});

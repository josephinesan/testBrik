// nomer 5

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'absolutePermutation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 */

function absolutePermutation(n, k) {
    // Write your code here
    
    let numbers = Array(n).join().split(',').map(function(a){return this.i++},{i:1})

    if (k === 0) {
        return numbers
    }

    for (let i = 0; i < n; i += k * 2) {
        for (let j = 0; j < k; j++) {
        if (numbers[i + j + k] == null) {
            return [-1]
        }

            let temp = numbers[i + j]

            numbers[i + j] = numbers[i + j + k]
            numbers[i + j + k] = temp
        }
    }
    
    console.log("Numberss =>> ", numbers)
    return numbers

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const n = parseInt(firstMultipleInput[0], 10);

        const k = parseInt(firstMultipleInput[1], 10);

        const result = absolutePermutation(n, k);
        
        console.log("Result ==> ", result.join(' '))
        ws.write(result.join(' ') + '\n');
    }

    ws.end();
}

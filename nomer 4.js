// nomer 4

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
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
    // Write your code here
    let spplited_str = s.split("")
    let total = 0;
    for(let i = 0; i<spplited_str.length; i++){
        if(spplited_str[i] == 'a') {
            total +=1
        }
    }
    let repeated_in = Math.floor(n/s.length)
    total = total * repeated_in
    let mod = n % s.length
    spplited_str = spplited_str.slice(0,mod)
    for(let i = 0; i<spplited_str.length; i++){
        if(spplited_str[i] == 'a') {
            total +=1
        }
    }
    
    return total
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine().trim(), 10);

    const result = repeatedString(s, n);

    ws.write(result + '\n');

    ws.end();
}

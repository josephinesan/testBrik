// nomer 3


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
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    // Write your code here
    let max_min_scores = [0,0]
    let count_max_change = 0
    let count_min_change = 0
    for (let i=0; i<scores.length; i++){
        if (max_min_scores[0] == 0 && max_min_scores[1] == 0 && i == 0) {
            max_min_scores[0] = scores[i]
            max_min_scores[1] = scores[i]
        } else {
            if (scores[i] > max_min_scores[0]) {
                max_min_scores[0] = scores[i]
                count_max_change += 1
            } else if (scores[i] < max_min_scores[1]){
                max_min_scores[1] = scores[i]
                count_min_change += 1
            }
        }
    }
    return [count_max_change, count_min_change]
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const scores = readLine().replace(/\s+$/g, '').split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}

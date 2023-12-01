const fs = require('fs')

const input = fs.readFileSync('./input.txt', { encoding: 'utf-8' })
const numberMap = {
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9',
}
const tokens = Object.keys(numberMap)

function getDigitSum (line) {
    const includedTokens = tokens
        .map(t => ({token: t, firstIndex: line.indexOf(t), lastIndex: line.lastIndexOf(t)})) // { token: 'a', index: 1 }
        .filter(t => t.firstIndex !== -1) // filter where not in string
    const firstOccurrence = includedTokens.sort((a, b) => a.firstIndex < b.firstIndex ? -1 : 1)[0]
    const lastOccurrence = includedTokens.sort((a, b) => a.lastIndex > b.lastIndex ? -1 : 1)[0]

    return Number(numberMap[firstOccurrence.token] + numberMap[lastOccurrence.token])
}
const out = input.split('\n').map(getDigitSum).reduce((t, v) => t + v,0)
console.log(out)

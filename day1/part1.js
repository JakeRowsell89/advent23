const fs = require('fs')

const input = fs.readFileSync('./input.txt', { encoding: 'utf-8' })
function getDigitSum (line) {
    if (/\d/.test(line)) {
        const firstDigit = line.match(/\d/)[0]
        const lastDigit = line.split('').reverse().join('').match(/\d/)[0]
        return Number(firstDigit + lastDigit)
    }
    return 0
}
const out = input.split('\n').map(getDigitSum).reduce((t, v) => t + v,0)
console.log(out)
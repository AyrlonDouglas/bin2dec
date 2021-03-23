const numBin = document.querySelector('.numeroBin')
const numDec = document.querySelector('.numeroDec')


numBin.addEventListener('input', () => {
    if (numBin != undefined) numDec.value = bin2Dec(numBin.value)
})
numDec.addEventListener('input', () => {
    if (numDec != undefined) numBin.value = dec2Bin(numDec.value)
})

function bin2Dec(bin) {
    let dec = 0
    let index = 0;

    if (isNaN(bin)) return "Não é um número"

    for (let i = bin.length - 1; i >= 0; i--) {

        if (!(bin[index] == 0 || bin[index] == 1)) return "Número não binário"

        dec += Math.pow(2, i) * bin[index]
        index++
    }
    if (dec == 0) return ""
    return dec
}

function dec2Bin(dec) {
    let bin = "";
    let number = dec

    if (isNaN(dec)) return "Não é um número"

    while (number > 0) {
        if (number % 2 == 0) {
            number = number / 2
            bin += "0"
        }

        if (number % 2 == 1) {
            number = Math.floor(number / 2)
            bin += "1"
        }

        if (number == 1) {
            bin += "1"
            break
        }

        if (number == 0) {
            bin += "0"
        }
    }
    let binReverse = bin.split("").reverse()

    if (binReverse[0] == 0) binReverse.shift()

    binReverse = binReverse.join("")

    return binReverse
}
const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode (expr) {
    let result = '';
    for (let i = 0; i < expr.length; i += 10) {
        let str = expr.slice(i, i + 10).replaceAll('11', '-').replaceAll('10', '.').replaceAll('00', '');
        for (const key in MORSE_TABLE) {
            if (key === str) {
                str = MORSE_TABLE[key];
            }
        }
        result = result + str;
    }
    result = result.replaceAll('**********', ' ');
    return result;
}

module.exports = {
    decode
}

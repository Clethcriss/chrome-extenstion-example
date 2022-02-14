const dictionary = {
    ";": 'Semicolon',
    ".": 'Dot',
    ":": 'Colon',
    ",": 'Comma',
    "{": 'Curly Bracket',
    "[": 'Square Bracket',
    "*": 'Wildcard, Multiply or Asterix',
    "(": 'Bracket',
    "#": 'Hash',
    "-": 'Dash',
    "/": 'Slash',
    "\\": 'Back Slash',
    "|": 'Pipe',
    "`": 'Back Tick',
    "\"": 'Quotation Mark',
    "'": 'Apostrophe',
    "~": 'Tilde'
}

const input = document.querySelector('#symbolInput');
const resultElement = document.querySelector('#symbolResult');
input.addEventListener('change', (e) => {
    const value = e.target.value;
    translator(value);
});

const translator = (value) => {
    let result;
    if (dictionary[value] === undefined) {
        result = 'Nope!';
    } else {
        result = `That's a ${dictionary[value]}`;
    }
    updateResult(result);
}

const updateResult = (result) => {
    resultElement.innerHTML = result;
}

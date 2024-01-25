//Rectangles
function makeLine(size, char = '#') {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += char;
    }
    return line;
}

console.log(makeLine(5));

function makeSquare(size, char = '#') {
    let square = '';
    // for (let i = 0; i < size; i++) {
    //     square += ('\n' + makeLine(size));
    // }
    let width = size, height = size;
    square = makeRectangle(width, height, char)
    return square;
}

console.log(makeSquare(5));

function makeRectangle(width, height, char = '#') {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += (makeLine(width, char) + '\n');
    }
    return rectangle.slice(0, -1);
}

console.log(makeRectangle(5, 3));

// Triangles
function makeDownwardStairs(height, char = '#') {
    let stairs = '';
    for (let i = 0; i < height; i++) {
        stairs += (makeLine(i+1, char) + '\n');
    }
    return stairs.slice(0, -1);
}

// console.log(makeDownwardStairs(5, '!'));

function makeSpaceLine(numSpaces, numChars, char = '#') {
    let spaceLine = '', space = '', line = '';
    for (let i = 0; i < numChars; i++) {
        line += char;
    }
    for (let j = 0; j < numSpaces; j++) {
        space += ' ';
    }
    spaceLine = space + line + space;
    return spaceLine;
}

console.log(makeSpaceLine(3, 5, '*'));

function makeIsoscelesTriangle(height, char = '#') {
    let triangle = '';
    for (let i = 0; i < height; i++) {
        triangle += (makeSpaceLine((height - i - 1), (2 * i + 1), char) + '\n');
    }
    return triangle.slice(0, -1);
}

console.log(makeIsoscelesTriangle(5, '^'));

//Diamonds

function makeDiamond(height, char = '#') {
    let diamond = '';
    for (let i = 0; i < height; i++) {
        diamond += makeSpaceLine((height - i - 1), (2 * i + 1), char) + '\n';
    }
    return diamond.slice(0, -1) + diamond.split('').reverse().join('');
}


console.log(makeDiamond(5, '+'));
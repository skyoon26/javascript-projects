//Rectangles
function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += '#';
    }
    return line;
}

console.log(makeLine(5));

function makeSquare(size) {
    let square = '';
    // for (let i = 0; i < size; i++) {
    //     square += ('\n' + makeLine(size));
    // }
    let width = size, height = size;
    square = makeRectangle(width, height)
    return square;
}

console.log(makeSquare(5));

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += (makeLine(width) + '\n');
    }
    return rectangle.slice(0, -1);
}

console.log(makeRectangle(5,3));

//Triangles
function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
        stairs += (makeLine(i+1) + '\n');
    }
    return stairs.slice(0, -1);
}

console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars) {
    let spaceLine = '', space = '', line = '';
    for (let i = 0; i < numChars; i++) {
        line += "#";
    }
    for (let j = 0; j < numSpaces; j++) {
        space += ' ';
    }
    spaceLine = space + line + space;
    return spaceLine;
}

console.log(makeSpaceLine(3, 5));

function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
        triangle += (makeSpaceLine((height - i - 1), (2 * i + 1)) + '\n');
    }
    return triangle.slice(0, -1);
}

console.log(makeIsoscelesTriangle(5));

//Diamonds

function makeDiamond(height) {
    let diamond = '';
    for (let i = 0; i < height; i++) {
        diamond += makeSpaceLine((height - i - 1), (2 * i + 1)) + '\n';
    }
    return diamond.slice(0, -1) + diamond.split('').reverse().join('');
}

console.log(makeDiamond(5));
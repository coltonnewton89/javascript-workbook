var jack = [];
jack.push(4, 5, 6, 7, 10);

console.log(jack.length);

jack[3] = jack[3] * 10;

const addItem = function (number) {
    jack.push(number);
}

const getItem = function (item) {
    jack.shift(item);
}
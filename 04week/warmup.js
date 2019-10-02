let jack = [{
    name: 'jill',
    age: 20,
}, {
    name: 'julie',
    age: 30,
}]

jack.map(added => added.age += 10);
console.log(jack);
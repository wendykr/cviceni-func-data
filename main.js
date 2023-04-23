const numbers = [15, 6, 70, 41, 33, 27, 8, 16, 98, 60, 56];

const names = [
    'Petr',
    'Jana',
    'Pavel',
    'Zuzana',
    'Eva',
    'Adam',
    'Onyx',
    'Alex',
];

const persons = [{
    name: 'Petr',
    age: 16,
    gender: 'male'
}, {
    name: 'Jana',
    age: 8,
    gender: 'female'
}, {
    name: 'Pavel',
    age: 34,
    gender: 'male'
}, {
    name: 'Zuzana',
    age: 41,
    gender: 'female'
}, {
    name: 'Eva',
    age: 22,
    gender: 'female'
}, {
    name: 'Adam',
    age: 22,
    gender: 'male'
}, {
    name: 'Onyx',
    age: 37,
    gender: 'intersex'
}, {
    name: 'Alex',
    age: 29,
    gender: 'androgyne'
},];

// Pomocí funkce `forEach` vypište do konzole postupně věk každé osoby z pole `persons`.

persons.forEach(onePersons => {
    console.log(`osoba: ${onePersons.name}, věk: ${onePersons.age}`);
})

// Pomocí metody `forEach` napište cyklus, který vypíše do konzole první písmeno z každého jména v poli `names`.

names.forEach(oneNames => {
    console.log(`jméno: ${oneNames}, první písmeno: ${oneNames.slice(0,1)}`);
})

// Pomocí metody `find` najděte v poli `persons` osobu se jménem "Adam" a vypište ji do konzole.

const result3 = persons.find(onePersons => onePersons.name === 'Adam')

console.log(result3);

// Vypište do konzole `gender` osoby se jménem "Onyx".

const result4 = persons.find(onePersons => onePersons.name === 'Onyx')

console.log(result4.gender);

// Pomocí metody `findIndex` najděte v poli `persons` index osoby s věkem 22 a mužským pohlavím.

const result5 = persons.findIndex(onePersons => {
    if (onePersons.age === 22 && onePersons.gender === 'male') {
        return onePersons;
    }
})

console.log(result5);

// Pomocí metody `some` zjistěte, jestli jsou v poli `numbers` nějaká čísla dělitelná 11.

const result6 = numbers.some(oneNumbers => oneNumbers % 11 === 0)

console.log(result6);

// Pomocí metody `some` zjistěte, jestli jsou v poli `persons` nějaké osoby nebinárního pohlaví, tedy nejsou ani male, ani female.

const result7 = persons.some(onePersons => onePersons.gender !== 'male' && onePersons.gender !== 'female')

console.log(result7);

// Pomocí metody `every` zjistěte, jestli v poli `persons` platí, že je každá osoba starší 18 let.

const result8 = persons.every(onePersons => onePersons.age > 18)

console.log(result8);
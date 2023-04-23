# Cvičení: Vyhledávání, dotazování - Lekce 2

Cvičení do breakrooms pro kurz JavaScript 2 od Czechitas.

## 1. Vyhledávání a dotazy

Založte si nový projekt příkazem

```javascript
npm init kodim-app cviceni-func-data html-css-js
```

Otevřete si ve VS Code vytvořenou složku `cviceni-func-data`.

Do `script.js` si zkopírujte následující pole dat. Budeme s nimi pracovat v dalších cvičeních.

```javascript
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
const persons = [
  { name: 'Petr', age: 16, gender: 'male' },
  { name: 'Jana', age: 8, gender: 'female' },
  { name: 'Pavel', age: 34, gender: 'male' },
  { name: 'Zuzana', age: 41, gender: 'female' },
  { name: 'Eva', age: 22, gender: 'female' },
  { name: 'Adam', age: 22, gender: 'male' },
  { name: 'Onyx', age: 37, gender: 'intersex' },
  { name: 'Alex', age: 29, gender: 'androgyne' },
];
```

- Pomocí funkce `forEach` vypište do konzole postupně věk každé osoby z pole `persons`.
- Pomocí metody `forEach` napište cyklus, který vypíše do konzole první písmeno z každého jména v poli `names`.
- Pomocí metody `find` najděte v poli `persons` osobu se jménem "Adam" a vypište ji do konzole.
- Vypište do konzole `gender` osoby se jménem "Onyx".
- Pomocí metody `findIndex` najděte v poli `persons` index osoby s věkem 22 a mužským pohlavím.
- Pomocí metody `some` zjistěte, jestli jsou v poli `numbers` nějaká čísla dělitelná 11.
- Pomocí metody `some` zjistěte, jestli jsou v poli `persons` nějaké osoby nebinárního pohlaví, tedy nejsou ani male, ani female.
- Pomocí metody `every` zjistěte, jestli v poli `persons` platí, že je každá osoba starší 18 let.
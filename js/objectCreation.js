console.log('Hello World!');


console.log("You look fantastic!");


/*
    Objects, Prototypes, and Classes
*/

let person = {}
console.log(person)
console.log(typeof person)

person.name = 'Fred';
person.age = 55;
person.favColor = 'blue';

console.log(person);

// Access values via Dot or Bracket Notation
console.log(`${person.name} is ${person['age']} years old`);

// Objects can hold other objects
let person2 = {
    name: 'Gabrielle',
    age: 33,
    languages: ['Python', 'JavaScript', 'SQL'],
    teams: {
        mlb: 'Expos',
        nba: 'SuperSonics',
        nfl: 'Oilers',
        nhl: 'Whalers'
    }
};

console.log(person2);
person2.languages.forEach(lang => console.log(lang.toUpperCase()));

let person3 = {
    name: 'Jeeves',
    sayHello: function(){console.log(`Hello ${this.name}!`)},
    getThis: function(){return this}
};

console.log(person3);

console.log(person3.sayHello);
person3.sayHello();

console.log(person3.getThis());

console.log(this);

console.clear();



//JavaScript Object Instantiation -> Class Instantiation



let anima
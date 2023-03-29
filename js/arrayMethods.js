console.log('Hello World!');



// Create an array with whcich to work

let names = ['John', 'Paul', 'George', 'Ringo', 'Pete', 'Stuart'];


for (let name of names){
    console.log(name);
};
console.log('===================================');

//Array.prototype.forEach(callbackFunc)
names.forEach(element => console.log(element));
console.log('===================================');

function logInfo(element,idx, arr){
    console.log(element,idx, arr);
};

names.forEach(logInfo);

function getFirstLetter(word){
    return word[0];
}
names.forEach(getFirstLetter);



let firstLetters = names.map(getFirstLetter);
console.log(firstLetters);


function mapCallBack(el, ix){
    if (ix % 2 === 0){
        return el.toUpperCase();
    } else {
        return el.toLowerCase();
    }
}

let newNames = names.map(mapCallBack);
console.log(newNames);


//As an arrow function


let newerNames = names.map((e,i) => i % 2 === 0? e.toUpperCase() : e.toLowerCase());
console.log(newerNames);

console.clear();

//Array.prototype.filter(callbackFunc)
// Filter out the elements that returna afalsy value when callbackfunc is applied


let cities = ['Chicago', 'Boston', 'New York', 'Baton Rouge', 'Baltimore', 'Cheyanne', 'San Francisco']

console.log(cities);

function startsWithC(city){
    return city[0].toUpperCase() === 'C';
};


console.log(cities.map(startsWithC));

let cNameCities = cities.filter(startsWithC);
console.log(cNameCities);

//Arrow function

let bNameCities = cities.filter(city => city[0].toUpperCase() === 'B');
console.log(bNameCities);



let testArr = [{a: 1, b: 2}, {a: 1, b: 3}, {a: 2, b: 4}];

let filteredArr = testArr.filter(obj => obj.a === 1);
console.log(filteredArr);
console.log(testArr[0] === filteredArr[0]);
console.log(testArr[0]);
testArr[0].b = 1000;
console.log(filteredArr);


//filter takes the boolean value of the return

let randomMapArr = cities.map(city => city.length > 8 ? 'Hello World' : '');
console.log(randomMapArr);
let randomFilteredArr = cities.filter(city => city.length > 8 ? 'Hello World' : '');
console.log(randomFilteredArr);


//Array.prototype.concat()
//Concatenates two or more arrays
// Does not change the original arrays
// Returns a new array

let arrA = [1,2,3];
let arrB = [4,5,6];


// let arrC = arrA + arrB;
// console.log(arrC);
// console.log(typeof arrC);


let arrC = arrA.concat(arrB);
console.log(arrC);
console.log(typeof arrC);


//Array.prototype.includes()

let fruits = ['apple', 'banana', 'cherry', 'orange', 'mango', 'pear', 'peach', 'apple'];
console.log(fruits);

console.log(fruits.includes('banana'));
console.log(fruits.includes('berry'));


//Array.prototype.indexOf()
//Returns the index of the first occurence of the value in the array
//Returns -1 if the value is not found
console.log(fruits.indexOf('cherry'));
console.log(fruits.indexOf('berry'));
console.log(fruits.indexOf('apple', 2));


//Array.prototype.join()

let mNameArr = ['S', 't', 'e', 'v', 'e'];
console.log(mNameArr.join());
console.log(mNameArr.join(''));
console.log(mNameArr.join(' '));
console.log(mNameArr.join(' - '));

//Array.prototype.push()
//Adds one or more elements to the end of an array
//Returns the new length of the array

console.log(fruits.push('orange'));
console.log(fruits);


console.log(fruits.push('berry', 'grape', 'pineapple'));
console.log(fruits);


//Array.prototype.pop()
//Removes the last element from an array
//Returns the removed element

const lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits);


//array.prototype.reverse()
//Reverses the order of the elements in an array
//Returns the reversed array
// In place

console.log(cities)
cities.reverse();
console.log(cities);
cities.reverse();
console.log(cities);



//Array.prototype.slice()
//Returns a shallow copy of a portion of an array into a new array object
//Does not modify the original array
//Takes two arguments: the index to start at and the index to end at (not included)

console.log('Array Slice:')
console.log(fruits);
console.log(fruits.slice());
console.log(fruits.slice(3));
console.log(fruits.slice(3, 5));
console.log(fruits.slice(-3));

console.clear();


//Array.prototype.splice()
//Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
//Returns the removed elements
//Takes three arguments: the index to start at, the number of elements to remove, and the elements to add

console.log('Array Splice:')
console.log(fruits);
fruits.splice(2,1, 'strawberry', 'blueberry');
console.log(fruits);


//Array.prototype.sort()
//Sorts the elements of an array in place and returns the sorted array
//The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values
//Takes an optional compare function
//compareFunction(a, b) is used to determine the order of two elements a and b
//If compareFunction(a, b) returns a value less than 0 for two elements a and b, then a will come before b


fruits.sort();
console.log(fruits);

let unsorted = [23, -1, 25, 2, 5, -7, 18, 100, 5]
console.log(unsorted);
unsorted.sort();
console.log(unsorted);


let newUnsorted = [9, 70, 61, 2, -5, -7, 112, 100, 5]
console.log(newUnsorted);

function compareFunction(a,b){
    console.log('A: ', a, 'B: ', b)
    if (a > b){
        return 1
    } else if (a < b){
        return -1
    } else {
        return 0
    }
}
newUnsorted.sort(compareFunction);
console.log(newUnsorted);


//To sort by number value

let anotherUnsorted = [23, 32,21, -2, 5, 7, -18, 100, 5];
console.log(anotherUnsorted);
anotherUnsorted.sort((a,b) => a - b)
console.log(anotherUnsorted);





// There are 8 ways to get undefined in JS:

// No. 1: Variable that is not initialized will give undefined:

let first;
//console.log(first);

// No. 2 : Function with no return will give undefined

function second(a, b) {
    const total = a + b;
}
const result = second(1, 2);
//console.log(result);

// No. 3: Parameter that is not passed will be undefined

function third(a, b, c, d) {
    const total = a + b + c + d;
    //console.log(a, b, c, d);
}

third(2, 5);

// If return has nothing on the right side will return undefined

function noNegative(a, b) {
    if (a < 0 || b < 0) {
        return;
    }
    return a + b;
}
const total = noNegative(2, -5);
//console.log(total);

// No. 5: Property that does not exist on an object will give undefined

const fifth = { id: 2, name: 'Panchom', age: 40 };
//console.log(fifth.age, fifth.salary);

// NO. 6: Accessing array elements outside of the index range will give undefined

const sixth = [4, 89, 87, 56, 54];
//console.log(sixth[1], sixth[5], sixth[11]);


// No. 7: Deleting an element inside an array will give undefined 

const seventh = [4, 89, 87, 56, 54];
delete seventh[1];

//console.log(seventh[1], seventh[5], seventh[11]);
//console.log(seventh);


// No. 8: Set a value directly to undefined 

const eight = undefined;
//console.log(eight);
console.log(typeof eight);

const ninth = null;
//console.log(ninth);
console.log(typeof ninth);

// Note: typeof undefined is undefined, but typeof null is an object. 
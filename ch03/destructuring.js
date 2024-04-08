// 1. destructuring assignment makes it easy to work with FUNCTIONS that return arrays of values:

// Convert [x,y] coordinates to [r,theta] polar coordinates
function toPolar(x, y) {
    return [Math.sqrt(x*x+y*y), Math.atan2(y,x)];
}

// Convert polar to Cartesian coordinates
function toCartesian(r, theta) {
    return [r*Math.cos(theta), r*Math.sin(theta)];
}

let [r,theta] = toPolar(1.0, 1.0);  // r == Math.sqrt(2); theta == Math.PI/4
let [x,y] = toCartesian(r,theta);   // [x, y] == [1.0, 1,0]

// console.log(toPolar(1, 1));
// console.log(toCartesian(r,theta));

// 2. simple destructuring assignments using arrays as values
let [a,b] = [1,2]; //same as let a = 1, b = 2

[a,b] = [a + 1, b + 1]; //same as a = a + 1, b = b + 1

[a,b] = [b,a]; //same as a = b, b = a (swap values of 2 variables)

[a,b] // [3,2]: the incremented and swapped values

// 3. variables and constants can be declared as part of JS various 'for loops'; can use destructuring in this context, as well. 

    // Here is a code that loops over the name/value pairs of all properties of an object and uses destructuring assignment to convert those pairs from 2-element arrays into individual variables

    let obj = { x: 1, y: 2 }

    for(const [name, value] of Object.entries(obj)) {
        console.log(name, value); // Prints "x 1" and "y 2"
    }

// 4. the  number of variables on the left of a destructuring assignment does not have to match the number of array elements on the right. 

    // - extra variables on LEFT are set to 'undefined':
    // let [c,d] = 1; // c == 1, d == undefined

    // - extra variables on RIGHT are ignored:
    let [e,f] = [1,2,3]; // e == 1, f == 2

    // - list of variables on the left can include extra commas to skip certain values on the right:
    let [,g,,h] = [1,2,3,4]; // g == 2, h == 4

// 5. If you want to collect all unused or remaining values into a single variable when destructuring an array, use three dots (...) before the last variable name on the left hand side

    let [i,...j] = [1,2,3,4]; // x == 1, y == [2,3,4]

// 6. Destructuring assignment can be used with NESTED ARRAYS. 
    // In this case, the lefthand side of the assignment should look like a nested array literal:

    let [A, [B, C]] = [1, [2,2.5],3]; // A == 1; B == 2; C == 2.5 ('3' is discarded)

// 7. You do not require an array to destructure -> can use any ITERABLE OBJECT (like a string) on the RIGHTHAND side of assignment; any object that can be used with a 'for/of loop' can also be destructured:

    let [first, ...rest] = "Hello"; // first == "H"; rest == ["e", "l","l","o"]

// 8. can also destructure when RIGHTHAND side is an OBJECT value:

    let transparent = {r: 0.0, g: 0.0, b: 0.0, a: 1.0}; // A RGBA colour
    let {r,g,b} = transparent; // r == 0.0; g == 0.0; b == 0.0

// 9. this example copies global functions of the 'Math' object into variables, which might simplify code that does a lot of trigonometry

    // same as const sin = Math.sin, cos = Math.cos, tan = Math.tan;
    const {sin, cos, tan} = Math;

// 10. Destructuring assignment becomes even more complicated when it is used with nested objects, or arrays of objects or objects of arrays, but it is legal:

    let points = [{x: 1, y: 2}, {x: 3, y: 4}]; // an array of two objects
    let [{x: x1, y: y1}, {x: x2, y: y2}] = points; // destructured into 4 variables
    (x1 === 1 && y1 === 2 && x2 === 3 && y2 === 4) // true

// 11. Destructure an object of arrays

    let POINTS = { p1: [1,2], p2: [3,4] }; // an object with two arrays
    let { p1: [X1, Y1], p2: [X2, Y2] } = POINTS; // destructured into 4 variables
    (X1 === 1 && Y1 === 2 && X2 === 3 && Y2 === 4) // true

    // complex destructuring syntax like the above 2 nested examples can be hard to write and hard to read, and you may be better off just writing out your assignments explicitly with traditional code like:

        // let x1 = points.p1[0];
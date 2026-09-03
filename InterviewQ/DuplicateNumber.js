"use strict";
let arr = [1, 2, 3, 4, 6];
let large = -Infinity;
let small = -Infinity;
for (let num of arr) {
    if (num > large) {
        small = large;
        large = num;
    }
    else if (num > small && num !== large) {
        small = num;
    }
}
console.log(small);

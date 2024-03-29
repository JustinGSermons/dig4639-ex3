// 3-1. flattening(list)
let arrays = [[1, 2, 3], [4, 5], [6]];

//Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
export function flattening(list) {
    let result = list.reduce((previousValue, currentValue)=> {
    console.log("prev" + previousValue)
    console.log("cur" + currentValue)
    let combinedValue = previousValue.concat(currentValue)
    console.log("combin" + combinedValue)
    return combinedValue
})
return result
}
console.log(flattening(arrays))
// → [1, 2, 3, 4, 5, 6]

// 3-2. loop(value, test, update, body)
// Write a higher-order function loop that provides something like a for loop statement. It takes a value, a test function, an update function, and a body function. Each iteration, it first runs the test function on the current loop value and stops if that returns false. Then it calls the body function, giving it the current value. Finally, it calls the update function to create a new value and starts from the beginning.

export function loop(value, test, update, body) {
    
    for(let curValue = value; test(curValue); curValue = update(curValue)) {
        body(curValue)
    }
    // while(true) {
    //     console.log("Iteration, curValue " + curValue)
    //     if(test(curValue)) {
    //         // If test is true, do body
    //         console.log("Calling body...")
    //         body(curValue)
    //         curValue = update(curValue)
    //     } else {
    //         console.log("curValue test is false")
    //         break;
    //     }
    // }
}
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

// 3-3. everyLoop(array, test)
// Every single value when tested must return true for the entire function to be true
export function everyLoop(array, test) {
    let curResult = true
    for(let item of array) {
        //console.log(test(item))
        curResult = curResult && test(item)
    }
    return curResult
}
// 3-4. everySome(array, test)
export function everySome(array, test) {
return !array.some((value) =>!test(value))
}

console.log("Should be true")
console.log(everySome([1, 3, 5], n => n < 10));
// → true
console.log("Should be false")
console.log(everySome([2, 4, 16], n => n < 10));
// → false
console.log("Should be true")
console.log(everySome([], n => n < 10));
// → true



function processArray(numbersArray) {
    return numbersArray.map(num => {
        return num % 2 === 0 ? num * num : num * 3;
    });
}


function formatArrayStrings(stringsArray, numbersArray) {
    if (stringsArray.length !== numbersArray.length) {
        throw new Error('Arrays must have the same length.');
    }

    return stringsArray.map((strings, i) => {
        return numbersArray[i] % 2 === 0 ? strings.toUpperCase() : strings.toLowerCase();
    });
}

module.exports = { processArray,formatArrayStrings };

 
// let process = [1,2,3,4,5,6]
// let proc=['a','b','c','d','e','f']

// let u =processArray(process)
// let v =formatArrayStrings(proc, process);
// console.log(v)
// console.log(u)

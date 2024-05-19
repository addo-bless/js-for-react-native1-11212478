
let nextId = 1; // Initialize auto-incremented id counter

function createUserProfiles(namesArray, modifiedNamesArray) {
    if (namesArray.length !== modifiedNamesArray.length) {
        throw new Error('Arrays must have the same length.');
    }

    const profiles = [];
    for (let i = 0; i < namesArray.length; i++) {
        profiles.push({
            originalName: namesArray[i],
            modifiedName: modifiedNamesArray[i],
            id: nextId++
        });
    }
    return profiles;
}

const { processArray, formatArrayStrings } = require('./arrayManipulation');

// Test processArray function
const numbersArray = [1, 2, 3];
console.log("Processed Array:", processArray(numbersArray));

// Test formatArrayStrings function
const stringsArray = ["hello", "mobile", "application"];
const modifiedArray = processArray(numbersArray);
console.log("Formatted Array:", formatArrayStrings(stringsArray, modifiedArray));

// Test createUserProfiles function
const originalNames = ["Addo", "Bless", "Lovelace"];
const modifiedNames = formatArrayStrings(originalNames, modifiedArray);
console.log("User Profiles:", createUserProfiles(originalNames, modifiedNames));

module.exports = createUserProfiles;


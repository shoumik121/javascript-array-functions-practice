const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
console.log(`~~MAP~~`);
//1. Get array of all names
const allNames = characters.map((character) => character.name);
console.log(allNames);
//2. Get array of all heights
const allHeights = characters.map((character) => character.height);
console.log(allHeights.sort());
//3. Get array of objects with just name and height properties
const nameAndHeight = characters.map((character) => ({
    name: character.name, height: character.height
}));
console.log(nameAndHeight);
//4. Get array of all first names
const allFirstName = characters.map((character) => character.name.split(' ')[0]);
console.log(allFirstName);

//***REDUCE***
console.log(`~~REDUCE~~`);
//1. Get total mass of all characters
const totalMass = characters.reduce((acc,cur) => acc+cur.mass,0);
console.log(totalMass);
//2. Get total height of all characters
const totalHeight = characters.reduce((acc,cur) => acc+cur.height,0);
console.log(totalHeight);
//3. Get total number of characters by eye color
const numberOfBlueEyedChar = characters.reduce((acc,cur) =>{
    if(acc[cur.eye_color])
        acc[cur.eye_color]++;
    else
        acc[cur.eye_color] = 1;
    return acc;
}, {});
console.log(numberOfBlueEyedChar);
//4. Get total number of characters in all the character names
const numberOfCharactersInNames = characters.reduce((acc,cur) => acc + cur.name.length,0);
console.log(numberOfCharactersInNames);

//***FILTER***
console.log(`~~FILTER~~`);
//1. Get characters with mass greater than 100
const massGreaterThan100 = characters.filter((character) => character.mass > 100);
console.log(massGreaterThan100);
//2. Get characters with height less than 200
const heightLessThan200 = characters.filter((character) => character.height<200);
console.log(heightLessThan200);
//3. Get all male characters
const allMaleChar = characters.filter((character) => character.gender === 'male');
console.log(allMaleChar);
//4. Get all female characters
const allFemaleChar = characters.filter((character) => character.gender === 'female');
console.log(allFemaleChar);

//***SORT***
//1. Sort by mass
console.log(`~~SORT~~`);
const byMass = characters.sort((a,b) => a.mass - b.mass);
console.log(byMass);
//2. Sort by height
const byHeight = characters.sort((a,b) => a.height - b.height);
console.log(byHeight);
//3. Sort by name
const byName = characters.sort((a,b) => {
    if(a.name< b.name) return -1
    return 1
});
console.log(byName);
//4. Sort by gender
const byGender = characters.sort((a,b) =>{
    if(a.gender === 'male') return 1
    return -1
})
console.log(byGender);

//***EVERY***
//1. Does every character have blue eyes?
console.log(`~~EVERY~~`);
const allBlueEyes = characters.every((character) => character.eye_color === 'blue');
console.log(allBlueEyes);
//2. Does every character have mass more than 40?
const massMoreThan40 = characters.every((character) => character.mass>40);
console.log(massMoreThan40);
//3. Is every character shorter than 200?
const shorterThan200 = characters.every((character) => character.height<200);
console.log(shorterThan200);
//4. Is every character male?
const allMale = characters.every((character) => character.gender === 'male');
console.log(allMale);

//***SOME***
//1. Is there at least one male character?
const leastOneMale = characters.some((character) => character.gender === 'male');
console.log(`~~SOME~~`);
console.log(leastOneMale);
//2. Is there at least one character with blue eyes?
const leastOneBlueEyes = characters.some((character) => character.eye_color);
console.log(leastOneBlueEyes);
//3. Is there at least one character taller than 210?
const tallerThan210 = characters.some((character) => character.height>210);
console.log(tallerThan210);
//4. Is there at least one character that has mass less than 50?
const massLessThan50 = characters.some((character) => character.mass<50);
console.log(massLessThan50);

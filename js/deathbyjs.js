//STEP 1
function alphabeticalOrder(str) {
    return str.split('').sort().join('');
}
console.log(alphabeticalOrder('webmaster'));

//STEP 2
function capitalizeFirstLetter(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeFirstLetter('the quick brown fox'));

//STEP 3
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.toLowerCase().split('').filter(char => vowels.includes(char)).length;
}
console.log(countVowels('The quick brown fox'));

//STEP 4
function generateRandomId(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
console.log(generateRandomId(8));

//STEP 5
function Longest_Country_Name(countries) {
    return countries.reduce((longestName, currentName) => currentName.length > longestName.length ? currentName : longestName, '');
}
console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));
// Code your solution here
function findMatching(array, str) {
    return array.filter((name) => name.toLowerCase() === str.toLowerCase());
}

function fuzzyMatch(array, str) {
    return array.filter((name) => name.charAt(0) === str.charAt(0));

}

function matchName(array, str) {
    return array.filter((obj) => obj.name.toLowerCase() === str.toLowerCase());
}
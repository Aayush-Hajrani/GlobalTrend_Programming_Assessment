function removeDuplicates(arr) {
    return arr.filter((element, index) => arr.indexOf(element) === index);
}

const arr = [1, 2, 3, 2, 2, 1, 4, 5, 3, 4];
console.log(removeDuplicates(arr));
function flattenArray(arr) {
    let result = [];

    function flatten(element) {
        for (let i = 0; i < element.length; i++) {
            if (Array.isArray(element[i])) {
                flatten(element[i]);
            }
            else {
                result.push(element[i]);
            }
        }
    }

    flatten(arr);
    return result;
}

const nestedarray = [1,[2,[3,4],5],6,[7]];
console.log(JSON.stringify(flattenArray(nestedarray)));
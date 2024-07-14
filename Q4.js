function areAnagrams(str1,str2){

    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    if(str1.length !== str2.length){
        return false;
    }

    const sortedstr1 = str1.split('').sort().join('');
    const sortedstr2 = str2.split('').sort().join('');

    return sortedstr1 === sortedstr2;
}

console.log(areAnagrams("Listen","Silent"));
console.log(areAnagrams("Hello","World"));
console.log(areAnagrams("School master","The classroom"));

function isAnagram(s1,s2) {
    let str1 = s1.split('').sort().join('');
    let str2 = s2.split('').sort().join('');
    if(str1 === str2) {
        return 'it is an anagram'
    }
    return 'it is not an anagram'
}

console.log(isAnagram('abcd','dbca'));
console.log(isAnagram('abcd','abcda'))
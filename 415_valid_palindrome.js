'use strict';

const isPalindrome = (s) => {
    if (s.length === 0) {
        return true;
    }
    let start = 0, end = s.length - 1;
    s = s.toLowerCase();

    while (start < end) {
        while (start < end && !isLetter(s.charAt(start)) && !isDigit(s.charAt(start))) {
            start++;
        }

        while (start < end && !isLetter(s.charAt(end)) && !isDigit(s.charAt(end))) {
            end--;
        }

        if (s.charAt(start) !== s.charAt(end)) {
            return false;
        }
        start++;
        end--;
    }
    return true;
};

const isLetter = (char) => {
    let aCode = 'a'.charCodeAt(0);
    let zCode = 'z'.charCodeAt(0);
    let code = char.charCodeAt(0);
    return aCode <= code && code <= zCode;
};

const isDigit = (char) =>  {
    let zeroCode = '0'.charCodeAt(0);
    let nineCode = '9'.charCodeAt(0);
    let code = char.charCodeAt(0);
    return zeroCode <= code && code <= nineCode;
};



// const main = () => {
//     let s;
//     s = "A man, a plan, a canal: Panama" ;
//     console.log(isPalindrome(s));
// };
// main();

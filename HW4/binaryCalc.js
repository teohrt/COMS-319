var rs = require('readline-sync');

var fNum1 = fNum2 = action = result = "";

fNum1 = rs.question('1st Binary Number: ');
action = rs.question('Enter the operation{+,-,*,/,%,<<,>>,&,|,~}: ');

// Only asks for the second binary number if the operation requires it
if (!'<<>>~'.includes(action)) {
    fNum2 = rs.question('2nd Binary Number: ');
    matchLength();
}

// Convert to decimal for normal operations
if ('+-*/%'.includes(action)) {
    var dec1 = parseInt(fNum1, 2);
    var dec2 = parseInt(fNum2, 2);
    result = (eval(dec1 + action + dec2)).toString(2);
} 

// Handle binary operations
else {
    switch(action) {
        // One bit-shift left
        case '<<':
            result = (fNum1 + 0);
        break;

        // One bit-shift right
        case '>>':
            result = (0 + fNum1.substring(0, fNum1.length-1));
        break;

        // AND
        case '&':
            for (var i = 0; i < fNum1.length; i++) {
                if(fNum1[i] == fNum2[i]) {
                    result += 1;
                }
                else {
                    result += 0;
                }
            }
        break;

        // OR
        case '|':
            for(var i = 0; i < fNum1.length; i++) {
                if (fNum1[i] == 1 || fNum2[i]== 1) {
                    result += 1;
                }
                else {
                    result += 0;
                }
            }
        break;

        // NOT
        case '~':
            for(var i = 0; i < fNum1.length; i++) {
                if (fNum1[i] == 1) {
                    result += 0;
                }
                else {
                    result += 1;
                }
            }
        break;
    }
}

// Print result!
console.log(result)

// Match length of shorter binary by prepending 0's
function matchLength() {
    if (fNum1.length > fNum2.length) {
        while(fNum1.length > fNum2.length) {
            fNum2 = (0 + fNum2)
        }
    }
    else if (fNum1.length < fNum2.length) {
        while(fNum1.length < fNum2.length) {
            fNum1 = (0 + fNum1)
        }
    }
}
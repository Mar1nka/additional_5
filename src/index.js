const Stack = require('./stack');

function check(str, bracketsConfig) {

    var stack = [];
    stack = new Stack();

    for (var i = 0; i < str.length; i++) {
        var currentBracket = str[i];

        if (stack.getLastElement() != null) {
            var isFoundCouple = false;

            for (var j = 0; j < bracketsConfig.length; j++) {
                var openBracket = bracketsConfig[j][0];
                var closeBracket = bracketsConfig[j][1];

                if (stack.getLastElement() === openBracket && currentBracket === closeBracket) {
                    isFoundCouple = true;
                    break;
                }
            }

            if (isFoundCouple === true) {
                stack.pop();
            } else {
                stack.push(currentBracket);
            }

        } else {
            stack.push(currentBracket);
        }
    }

    if (stack.length() === 0) {
        return true;
    }

    return false;
}

module.exports = check;





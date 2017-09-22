const Stack = require('./Stack');

function check(str, bracketsConfig) {

    var arr = [];
    arr = new Stack();

    for (var i = 0; i < str.length; i++) {
        if (arr.length() > 0) {
            var isFoundCouple = false;

            for (var j = 0; j < bracketsConfig.length; j++) {
                if (arr.getLastElement() === bracketsConfig[j][0] && str[i] === bracketsConfig[j][1]) {
                    isFoundCouple = true;
                    break;
                }
            }

            if (isFoundCouple === true) {
                arr.pop();
            } else {
                arr.push(str[i]);
            }

        } else {
            arr.push(str[i]);
        }
    }

    if (arr.length() === 0) {
        return true;
    }

    return false;
}

module.exports = check;





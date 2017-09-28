class Stack {
    constructor () {
        this.arr = [];
    }

    push (element) {
        this.arr.push(element);
    }

    pop () {
        if (this.arr.length) {
            var lastElement = this.arr[this.arr.length - 1];
            this.arr.splice(this.arr.length - 1, 1);
            return lastElement;
        } else {
            return null;
        }
    }

    getLastElement () {
        if (this.arr.length) {
            return this.arr[this.arr.length - 1];
        } else {
            return null;
        }
    }

    length () {
        return this.arr.length;
    }
}

function check (str, bracketsConfig) {

    var stack = [];
    stack = new Stack();

    for (var i = 0; i < str.length; i++) {
        var currentBracket = str[i];

        if (stack.getLastElement() !== null) {
            var isFoundCouple = false;

            for (var j = 0; j < bracketsConfig.length; j++) {
                var openBracket = bracketsConfig[j][0];
                var closeBracket = bracketsConfig[j][1];

                if (stack.getLastElement() === openBracket && currentBracket === closeBracket) {
                    isFoundCouple = true;
                    stack.pop();
                    break;
                }
            }

            if (!isFoundCouple) {
                stack.push(currentBracket);
            }


        } else {
            stack.push(currentBracket);
        }
    }

    return stack.length() === 0;
}

module.exports = check;





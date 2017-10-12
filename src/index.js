
function check (str, bracketsConfig) {
    var stack = [];

    for (var index in  str) {
        var currentBracket = str[index];
        var prevBracket = stack[stack.length - 1];
        var isCouple = isCoupleBrackets(prevBracket, currentBracket, bracketsConfig);
        if (isCouple) {
            stack.pop();
        } else {
            stack.push(currentBracket);
        }
    }

    return stack.length === 0;
}

function isCoupleBrackets(prevBracket, currentBracket, bracketsConfig) {
    for (var i = 0; i < bracketsConfig.length; i++) {
        var openBracket = bracketsConfig[i][0];
        var closeBracket = bracketsConfig[i][1];
        if (prevBracket === openBracket && currentBracket === closeBracket) {
            return true;
        }
    }

    return false;
}

module.exports = check;





//old code
// class Stack {
//     constructor () {
//         this.arr = [];
//     }
//
//     push (element) {
//         this.arr.push(element);
//     }
//
//     pop () {
//         if (this.arr.length) {
//             var lastElement = this.arr[this.arr.length - 1];
//             this.arr.splice(this.arr.length - 1, 1);
//             return lastElement;
//         } else {
//             return null;
//         }
//     }
//
//     getLastElement () {
//         if (this.arr.length) {
//             return this.arr[this.arr.length - 1];
//         } else {
//             return null;
//         }
//     }
//
//     length () {
//         return this.arr.length;
//     }
// }
//
// function check (str, bracketsConfig) {
//
//     var stack = [];
//     stack = new Stack();
//
//     for (var i = 0; i < str.length; i++) {
//         var currentBracket = str[i];
//
//         if (stack.getLastElement() !== null) {
//             var isFoundCouple = false;
//
//             for (var j = 0; j < bracketsConfig.length; j++) {
//                 var openBracket = bracketsConfig[j][0];
//                 var closeBracket = bracketsConfig[j][1];
//
//                 if (stack.getLastElement() === openBracket && currentBracket === closeBracket) {
//                     isFoundCouple = true;
//                     stack.pop();
//                     break;
//                 }
//             }
//
//             if (!isFoundCouple) {
//                 stack.push(currentBracket);
//             }
//
//
//         } else {
//             stack.push(currentBracket);
//         }
//     }
//
//     return stack.length() === 0;
// }
//
// module.exports = check;

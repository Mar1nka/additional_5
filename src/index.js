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









function test() {
    const config1 = [['(', ')']];
    const config2 = [['(', ')'], ['[', ']']];
    const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
    const config4 = [['|', '|']];
    const config5 = [['(', ')'], ['|', '|']];
    const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
    const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

    var curr = check('((()))()', config1);//, true);

    console.log(curr);
}

test();


  // var arr = [];
  //
  // for(var i = 0; i < str.length; i++) {
  //     if(str[i] in brakets) {
  //         if(arr.length > 0) {
  //
  //             //the same
  //             if(str[i] === brakets[str[i]]) {
  //
  //                 var isFaund = false;
  //
  //                 for(var j = 0; j < arr.length; j++) {
  //                     if(str[i] === arr[j]) {
  //                         isFaund = true;
  //                         break;
  //                     }
  //                 }
  //
  //                 if(isFaund === true && arr[arr.length - 1] === str[i]) {
  //                     arr.splice(arr.length - 1, 1);
  //                 } else {
  //                     arr.push(str[i]);
  //                 }
  //
  //             } else if(arr[arr.length - 1] === brakets[str[i]]) {
  //                 arr.splice(arr.length - 1, 1);
  //             } else {
  //                 arr.push(str[i]);
  //             }
  //         }
  //         else{
  //             arr.push(str[i]);
  //         }
  //     } else {
  //         //check
  //         arr.push(str[i]);
  //     }
  //
  // }


//}




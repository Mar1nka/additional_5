function check(str, bracketsConfig) {
  var brakets= {};

  for(var i = 0; i < bracketsConfig.length; i++) {
      brakets[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }

  var arr = [];

  for(var i = 0; i < str.length; i++) {
      if(str[i] in brakets) {
          if(arr.length > 0) {

              //the same
              if(str[i] === brakets[str[i]]) {

                  var isFaund = false;

                  for(var j = 0; j < arr.length; j++) {
                      if(str[i] === arr[j]) {
                          isFaund = true;
                          break;
                      }
                  }

                  if(isFaund === true && arr[arr.length - 1] === str[i]) {
                      arr.splice(arr.length - 1, 1);
                  } else {
                      arr.push(str[i]);
                  }

              } else if(arr[arr.length - 1] === brakets[str[i]]) {
                  arr.splice(arr.length - 1, 1);
              } else {
                  arr.push(str[i]);
              }
          }
          else{
              arr.push(str[i]);
          }
      } else {
          //check
          arr.push(str[i]);
      }

  }

  if(arr.length === 0) {
      return true;
  }

  return false;
}

module.exports = check;


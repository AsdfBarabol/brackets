module.exports = function check(str, bracketsConfig) {
  // your solution
  var myObj = {
  ']': '[',
  '}': '{',
  ')': '(',
  '|': '|',
  '2': '1',
  '4': '3',
  '6': '5',
  '7': '7',
  '8': '8',  }
  var strArr = str.split('');
  if ((strArr[0] == '}' || strArr[0] == ')' || strArr[0] == ']' || strArr[0] == '2'|| strArr[0] == '4' || strArr[0] == '6') && strArr.length < 2) {
    return false;
  }
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] == '}' || strArr[i] == ')' || strArr[i] == ']' || strArr[i] == '2'|| strArr[i] == '4' || strArr[i] == '6') {
      if (strArr[i-1] == myObj[strArr[i]]) {
        strArr.splice(i-1,2);
        i = 0;
      }
    }
    if (strArr[i] == '|' || strArr[i] == '7' || strArr[i] == '8') {
      if (strArr[i+1] == myObj[strArr[i]]) {
        strArr.splice(i,2);
        i = 0;
      }
    }
    if (i == strArr.length) {
      return true;
    }
  }
  return false;
}

function averageString(str) {
let sum = 0;
  let digit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  if(str == '') return 'n/a';
    let arr = str.split(' ');
    for(i = 0; i < arr.length; i++){
        if(digit.includes(arr[i])){
          sum += digit.indexOf(arr[i]);
        } else {
        return 'n/a';
        }
    }
  let evr = Math.floor(sum/arr.length);
  return digit[evr];
}



function averageString(str) {
  var numObj = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
  },
  sum = 0;
  str = str.split(' ');
  for(var i = 0; i < str.length; i++) {
    if(numObj[str[i]] === undefined) {
      return 'n/a';
    } else {
      sum += numObj[str[i]];
    }
  }
  return Object.keys(numObj)[Math.floor(sum/str.length)];
}
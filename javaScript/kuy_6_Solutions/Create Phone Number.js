function createPhoneNumber(numbers){
  let str = numbers.join('');
  let pn = '(' + str.slice(0, 3) + ') ' + str.slice(3, 6) + '-' + str.slice(6);
  return pn;
}
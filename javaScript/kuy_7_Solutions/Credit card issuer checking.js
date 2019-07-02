function getIssuer(number) {
let str = number.toString();
  if((str.startsWith('34') && str.length == 15) || (str.startsWith('37') && str.length == 15)) return 'AMEX';
  else if (str.startsWith('6011') && str.length == 16) return 'Discover';
  else if (str.startsWith('4') && (str.length == 16 || str.length == 13)) return 'VISA';
  else if ((str.slice(0, 2) == (51) || str.slice(0, 2) == (52) || str.slice(0, 2) == (53) || str.slice(0, 2) == (54) || str.slice(0, 2) == (55)) && str.length == 16) return 'Mastercard';
  else{
    return 'Unknown';
  }
}



function getIssuer(n) {
  var s = n.toString();
  if (/^3[4|7]\d{13}$/.test(s)) return "AMEX";
  if (/^6011\d{12}$/.test(s)) return "Discover";
  if (/^5[1-5]\d{14}$/.test(s)) return "Mastercard";
  if (/^4(\d{12}|\d{15})$/.test(s)) return "VISA";
  return "Unknown";
}
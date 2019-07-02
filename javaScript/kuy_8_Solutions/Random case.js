function randomCase(x) {
let str = '';
  for(i = 0; i < x.length; i++){
    if(Math.random() < 0.5){
    str += x[i].toLowerCase();
  }else{
    str += x[i].toUpperCase();
}
}
  return str;
}
function whoIsPaying(name){
let arr = [];
  if(name.length > 2){
    arr.push(name);
    arr.push(name.slice(0, 2));
  } else {
    arr.push(name);
}
return arr;
}
function solve(arr){
console.log(arr);
let abc = 'abcdefghijklmnopqrstuvwxyz';
let arr1 = [];
for(let i = 0; i < arr.length; i++){
  let count = 0;
  for(let j = 0; j < arr[i].length; j++){
    if(arr[i][j].toLowerCase() === abc[j].toLowerCase()){
    count++;
    }
  }
  arr1.push(count);
}
return arr1;
};
/*
function sumArray(){
var length = prompt("How many numbers in array?");
length = parseInt(length);
var array = [];
var input;
for (i = 0, i < length, i++) {
  input = prompt("Enter number for array index " + i + ":");
  input = parseInt(input);
  array.push(input);
};
var sum = array.reduce(function(total, input){
  return total + input;
});
};
*/

/*
function addArray(arr1){
  var sum = arr1.reduce(function(total, input){
  return total + input;
  }
  alert(sum);
};
*/

numbers = [1,2,3,4,5];

function getSum(total, num) {
    return total + num;
};

var sum = numbers.reduce(getSum);
console.log(sum);


var a = prompt("Enter a number:");
var b = prompt("Enter another number:");
var getSum = function(a, b){
  var sum = parseInt(a) + parseInt(b);
  alert("The sum is " + sum);
};
getSum(a, b);

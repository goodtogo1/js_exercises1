numbers = [1,5,10,50,100];

function getAvg(){
  count = numbers.length;
  sum = numbers.reduce(function(t, n){
    return t + n;
  });
  avg = sum / count;
  console.log(avg);
};

getAvg();

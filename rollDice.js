function rollDice(){
  num1 = Math.round(Math.random()*100);
  num2 = Math.round(Math.random()*100);
  var die1 = 0;
  var die2 = 0;
  dice = [];
  if (0 <= num1 && num1 < 17) {die1 = 1;}
  else if (17 <= num1 && num1 < 34) {die1 = 2;}
  else if (34 <= num1 && num1 < 51) {die1 = 3;}
  else if (51 <= num1 && num1 < 68) {die1 = 4;}
  else if (68 <= num1 && num1 < 85) {die1 = 5;}
  else {die1 = 6;}
  if (0 <= num2 && num2 < 17) {die2 = 1;}
  else if (17 <= num2 && num2 < 34) {die2 = 2;}
  else if (34 <= num2 && num2 < 51) {die2 = 3;}
  else if (51 <= num2 && num2 < 68) {die2 = 4;}
  else if (68 <= num2 && num2 < 85) {die2 = 5;}
  else {die2 = 6;}
  dice.push(die1, die2);
  console.log(dice);
};

rollDice();
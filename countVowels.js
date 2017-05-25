function countVowels(input){
  count = 0;
  for (x = 0; x < input.length; x++){
    letter = input.substring(x, x+1);
    if (letter === "A" || letter === "a" ||
        letter === "E" || letter === "e" ||
        letter === "I" || letter === "i" ||
        letter === "O" || letter === "o" ||
        letter === "U" || letter === "u") {
      count++;
    };
  };
  console.log("Number of vowels: " + count);
};

countVowels("This is a string.");

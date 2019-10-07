module.exports = function zeros(expression) {
  expression += " ";
  var strnum = "";
  var two = 0;
  var five = 0;
  var res = 0;


  for (var i = 0; i<expression.length - 1; i++) {

    if (expression[i] !== '!') {
      strnum += expression[i];
      continue;
    }

    if ((expression[i] === '!') && (expression[i+1] === '!')) {
      calculateDoubleFactorial(Number(strnum));
      i++;
    }
    else {
      calculateSingleFactorial(Number(strnum));
    }
    strnum = "";
    i++;
  }

  function calculateSingleFactorial (num) {
    for (var i = 1; i <=num; i++) {
      findTwoAndFive(i);
    }
  }

  function calculateDoubleFactorial (num) {
    if ((num % 2) === 1) {
      for (var i = 1; i <=num; i+=2) {
        findTwoAndFive(i);
      }
    } else {
      for (var i = 2; i <=num; i+=2) {
        findTwoAndFive(i);
      }
    }
  }

  function findTwoAndFive (i) {
    while (true) {
      if (i % 2 === 0) {
        i /= 2;
        two++;
      }

      if (i % 5 === 0) {
        i /= 5; 
        five++;
      }

      if ((i % 5 !== 0) && (i % 2 !== 0)) {
        break;
      }
    }
  }

  return (Math.min(two, five));
}
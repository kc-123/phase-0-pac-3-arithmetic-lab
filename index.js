number; //=> 5



//reset number
number = 10

function add5() {
  return number += 5;
}

function divideBy3() {
  return number /= 3;
}

divideBy3(); //=> 3.3333333333333335

add5(); //=> 8.333333333333334

// reset number
number = 10

add5(); //=> 15

divideBy3(); //=> 5 
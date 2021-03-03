//random number appear when start game
var number1;
var number2;

number1 = Math.floor((Math.random() ));
console.log(number1);
number2 = Math.floor((Math.random() ));
console.log(number2);


//Answer
var answer = number1 + number2;

//add click handler with check answer
var checkAnswer = 1;



function addition() {
    
    if (checkAnswer == answer) {
        console.log('You are correct');
    } else {
        console.log('You are incorrect, the answer was ' + answer);
    }

   
};

addition()
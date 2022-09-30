function qAns(question, answer){
  
  var userAns = readlinesync.question(question + "? \nType your answer : ");
  
  if(userAns === answer){
    console.log("Your answer is correct!!");
    count++;
    console.log('Your score is : ' + count);
  }
  else(
    console.log("Oops!! Your answer is wrong!!")
  )
}

var readlinesync = require('readline-sync');

var count = 0;

var username = readlinesync.question("What is your name!? : ");
console.log("Welcome " + username + "!");

var askAge = readlinesync.question("Am i >25 Years old!!?? : ");
if(askAge == 'no' || askAge == 'NO' || askAge == 'No'){
  console.log("Yeah!! You're right.");
  count++;
  console.log('Your score : ' + count);
}
else if(askAge == 'yes' || askAge == 'YES' || askAge == 'Yes'){
  console.log("Oops!! I'm younger. xD");
  count--;
  console.log('Your score : ' + count);
}
else{
  console.log("Reply in 'Yes' or 'No' only!!");
};

var askCity = readlinesync.question("Is my hometown Patna : ");
if(askCity == 'no' || askCity == 'NO' || askCity == 'No'){
  console.log("Yep!! You're right.");
  count++;
  console.log('Your score : ' + count);
}
else if(askCity == 'yes' || askCity == 'YES' || askCity == 'Yes'){
  console.log("Oops!! no. xD");
  count--;
  console.log('Your score : ' + count);
}
else{
  console.log("Reply in 'Yes' or 'No' only!!");
  return;
};

var ans = qAns("Which planet do i live on", "Earth");

var supesAns = qAns("Who's my favourite superhero!!?", "Gohan");

console.log("High Scores :\n 1. Prabhat : 4 \n 2. Rahul : 3");

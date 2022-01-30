let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let age = 24;
if (age > 18 && registeredEarly){
  raceNumber += 1000;
}
if (age > 18 && registeredEarly){
  console.log(`Your race will take off at 9:30am. Your race number is ${raceNumber}.`);
}
else if (age > 18 && !registeredEarly){
  console.log(`Your race will take off at 11:00am. Your race number is ${raceNumber}.`);
}
else if (age < 18){
   console.log(`Your race will take off at 12:30am. Your race number is ${raceNumber}.`);
}
else {
  console.log("Please see the registration desk");
}

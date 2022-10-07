
let _=console.log;

function stringMessage(string) {
  if(string){
    return "The string is nonempty" ;
  }
  else {
    return "The string is empty";
  }

}

_(stringMessage());
_(stringMessage(''));
_(stringMessage('Colin'));


function number_compare(a, b){
  if (a>b){return 1}
  else if (a==b || a === b) {return 0}
  else if (a <b ) {return -1}
}

let a= [8, 17 ,42, 99];


_(a.sort())
_(a.sort(number_compare))


function square(number) {return number * number;}

_(square(2))

let fatsquare = (number) => {return number ** 2}

_(fatsquare(2))

for (let i=-10; i <= 10;  i ++){
  let slim = square(i);
  let fat = fatsquare(i);
  if (!(slim == fat)) {_(`test failed for ${slim} ${fat}`)}
  if (!slim == fat) {_(`test failed for ${slim} ${fat}`)}
  if (slim != fat) {_(`test failed for ${slim} ${fat}`)}

}



const DoW = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let dayname = (date) => {
  if (!date){date =  new Date()}
  let  idx =  date.getDay();

    return DoW[idx];
}

_(dayname(new Date()) );

_(dayname());


// .load palindrome.js
let palindrome_lib =  require('./palindrome.js');

_(palindrome_lib.palindrome('radar'))

_("RadAr" ,palindrome_lib.palindrome('RadAr'))


let email_parts =  (email) =>{
  let chunks = email.split("@")

  return {'email': email, 'login': chunks[0], 'fqdn': chunks[1]};
}

_(email_parts('login@fqdn'))

console.log("functions module loaded");







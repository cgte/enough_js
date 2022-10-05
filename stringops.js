

// This is a oneline comment
console.log("After one line comment")

/* and a multi line commend
 * console.log("This will nerver be printed")
 */

console.log("Create variables");

let firstName = "Michael";
let lastName = 'Hartl';

// shorter print

_ = console.log ;

_("Print stuff ??")

_("String concatenation:")

_( firstName + " " + lastName)

_("Backticks")

_(`We can get interpolation`)

_(`as ${firstName} ${lastName} wrote in the book`)


_('The use of var vs let')

let a = 1;
// this would raise a syntax error
// let a = 2;
// a is alreay declared
//
var bad = 1;
_(bad)
var bad = 'de'
_(`${bad}`)

// but this is bad,
//
let machaine = "Colin :)";
_(`machaine is  ${machaine.length}  char long`)

_(machaine.toUpperCase());
_(machaine.toLowerCase());
_(machaine.charAt(1));
_(machaine.charCodeAt(1));
_(machaine.codePointAt(1));
_(machaine.concat("and the cat"));
let out = '';
if(machaine.includes("cat"))
  {out = `there is cat in ${machaine}`;}
else
  { out = `The is no cat in ${machaine}`;}

_(out);

_("Inclustion tests");
_("Index 0")
_(machaine.includes('Colin', 0));
_("Index 1")
_(machaine.includes('Colin', 1));
_(machaine.includes('olin', 1));
_("^ Offset 1 on string");


_("Print string letters rtwice")

let strlen = machaine.length;

for ( let pos_idx =0 ; pos_idx < strlen; pos_idx ++ ) {
  console.log(machaine.charAt(pos_idx), machaine[pos_idx]);
}

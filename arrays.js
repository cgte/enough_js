_ = console.log ;


banana =   "Ban a  na ";

let long =banana.split(); // Doens not work like i expected ...
let tokens = banana.split(" ");

let chars= banana.split("");
_(long);
_(tokens);
_(chars);

_(chars[0])

my_array = [1,2];

undef = my_array[4];
_(undef);
_("Undefabang");
_(!undef);
_(!!undef);

_("Write a for loop")

for (let idx=0; idx < chars.length; idx ++) { _(chars[idx]); }


_("slicing ")

chars = 'qwertyuiop'.split("");

_(chars.slice(1))
_(chars.slice(1, 4))


let charlen = chars.length;

// last char
_(chars[charlen - 1]) ; // Hey Charlène !


// Tail
//
_(chars.slice(-1))
_(chars.slice(-4, -1))
_(chars.slice(-4))

_('Hello Pizza'.slice(6, 11));

_("Joins and split")

let an_array = ["ant", "bat", "cat", 42];

let casted = an_array.join(" ").split(" ");

let stra =  ["ant", "bat", "cat", "42"];


if (casted == an_array) {
  _("They are equals");}
  else {_(`${an_array} and ${casted} differ`) }



if (casted == stra) {
  _("They are equals");}

  else {_(`${stra} and ${casted} differ`) }

let left='', right ='';
for (let i=0; i < casted.length; i++) {
  left = casted[i];
  right = an_array[i];
  if(left == right)
  {_(`At index ${i} thinggs are the same`); }
  else
  {_(`At index ${i} things differ ${left} ${right}`)}
  }


for (let i=0; i < casted.length; i++) {
  left = casted[i];
  right = an_array[i];
  if(left === right)
  {_(`At index ${i} thinggs are the same`); }
  else
  {_(`At index ${i} things differ ${left} ${right}`)}
  }


// _(`Can we hack scope ${i}`)
//
//
stra.unshift( 'toto');
_(stra);
_(stra.shift());
_(stra);

_(stra.pop());
_(stra);


// Arrray functions Array.some, every are likeptyhon any and all

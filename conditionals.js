_ = console.log ;

let machaine = "Colin :)";
_(`machaine is  ${machaine.length}  char long`)

if (machaine.length > 2) {
  _('mahchaine is not vert short')
}

else {_('Ma chaine is very short');}

_(!"", "Bang empty string")

_(!!"", "Bang Bang empty string")

let x = 'foo';
let y = '' ;

if  (x && y) {_('And is true')} else {_('not and')}

_( !x && !y, "Bang and string")


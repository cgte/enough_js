let _ = console.log;

_("Other native objects");

_("Math stuff");

let i = Math.sqrt(-1);

_(i)

_(!!i)


_("Constructors and dates ")


let chaine = new String("some very long string");
_(chaine);

_(chaine.split());
_(chaine.split(' '));

let someint = 87;

let vect = new Array(someint);

_(vect.length);
_(vect);
vect.fill(9);
_(vect);


let now = new Date();
_(now);


let moonlanding = new Date("July 20, 1969 20:18");
_(moonlanding);


// My initial forgotting of new typo gave me localized now:)

let localized_now =  Date("July 20, 1969 20:18");
_(localized_now);


let big_timedelta = now - moonlanding ;
_(big_timedelta);


// localized_now - now won't work
//
let my_bd = new Date("3 March 1992");
_(my_bd)

let some_date = new Date("now"); // invalid
_(some_date);


_("Regexp");


let zipcode = new RegExp("\\d{5}");

_(zipcode.exec("Station F 75013"));


let szip = /\d{5}/ ;

_("Varsovie 23566 56781".match(szip));

let allszip = /\d{5}/g ;

_("Varsovie 23566 56781".match(allszip));


let words = "Ban an   a sub ?";
_(words.split(/\s+/));

let example = new Object('toto');

_(example);


let fmap = new Object({'yes': 1, 'no': false});
_(fmap);


const sonnet = `Let me not to the marriage of true minds
Admit impediments. Love is not love
Which alters when it alteration finds,
Or bends with the remover to remove:
O no! it is an ever-fixed mark
That looks on tempests and is never shaken;
It is the star to every wandering bark,
Whose worth’s unknown, although his height be taken.
Love’s not Time’s fool, though rosy lips and cheeks
Within his bending sickle’s compass come:
Love alters not with his brief hours and weeks,
But bears it out even to the edge of doom.
If this be error and upon me proved,
I never writ, nor no man ever loved.` ;


let uniques = {};

let sonnet_words = sonnet.match(/\w+/);
_(sonnet_words.length)

_("Matching global")

sonnet_words = sonnet.match(/\w+/g);
_(sonnet_words.length)


for (let i=0; i < sonnet_words.length; i ++ ) {
  let current = sonnet_words[i];
  if(! uniques[current]) {
      uniques[current]  = 0;
  }
  uniques[current] += 1;
}

_(uniques);


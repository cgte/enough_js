let _=console.log;
_("Chainning")


let reverse1 = (string)=> {
  let letters = string.split();
  letters.reverse();
  return letters.join('');
}

let reverse2 = (string) => {
  // using method chaining
  return string.split().reverse().join('') ;
}

let palindrome = (string)=> {
  return string === reverse1(string);
}


_(palindrome('radar'))



module.exports =
   {
    palindrome
   }




_("Palindrome loaded")

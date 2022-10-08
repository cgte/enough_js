let _=console.log;
_("Chainning")

// https://stackoverflow.com/questions/5797852/in-node-js-how-do-i-include-functions-from-my-other-files
// https://stackoverflow.com/a/11215070

let reverse1 = (string)=> {
  let letters = string.split();
  letters.reverse();
  return letters.join('');
}

let reverse2 = (string) => {
  // using method chaining
  // + array for emoji
  return Array.from(string).reverse().join('') ;
}

let palindrome = (string)=> {
  let content = string.toLowerCase();
  return content === reverse2(content);
}


_(palindrome('radar'))



module.exports =
   {
    palindrome
   }




_("Palindrome loaded")

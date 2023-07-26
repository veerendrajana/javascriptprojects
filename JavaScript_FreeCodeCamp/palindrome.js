function palindrome(str) {
    const regex = /\W+|_/g;
    const mystring = str.replace(regex,"").toLowerCase();
    
    const stringarray = mystring.split("");
    const reverse = stringarray.reverse();

    const reversedString = reverse.join("").toLowerCase();
    console.log(reversedString);
    console.log(mystring);
    if(reversedString === mystring){
        return true;
    }

    //console.log(mystring);
    return false;
  }
  
  /*console.log(palindrome("eye")); // true
  console.log(palindrome("eye")); // true
  palindrome("_eye") // true
  palindrome("race car") // true
  palindrome("not a palindrome") // false*/
  palindrome("A man, a plan, a canal. Panama") //true
  /*palindrome("never odd or even") //true
  palindrome("nope") // false
  palindrome("almostomla") //false
  palindrome("My age is 0, 0 si ega ym.") //true
  palindrome("1 eye for of 1 eye.") // false*/
  //console.log(palindrome("0_0 (: /-\ :) 0-0")) //true
  /*palindrome("five|\_/|four") // false*/
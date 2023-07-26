function rot13(str) {
  const regex = /\W/;
  const stringarray = str.toLowerCase().split("");
  //console.log(stringarray);
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const result = [];
  for(let i = 0; i < stringarray.length; i++){
    
    if(stringarray[i].match(regex)){
      result.push(stringarray[i]);
      continue;
    }

    let num = alphabet.indexOf(stringarray[i]) - 13;
    if(num < 0){
      num = num + 26;
    }
    result.push(alphabet[num]);
    //console.log(num);

  }

  str = result.join("").toUpperCase();
  

    return str;
  }
  
  rot13("SERR PBQR PNZC"); // FREE CODE CAMP
  rot13("SERR CVMMN!");
  rot13("SERR YBIR?");
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
  
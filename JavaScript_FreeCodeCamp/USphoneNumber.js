function telephoneCheck(str) {
    const phone = str;
    // Step 1: Validate area code 
    const us1regex = /^(1\s?)?\(\d{3}\)(\s|-)?\d{3}(\s|-)?\d{4}$/;
    const us2regex = /^(1\s?)?\d{3}(\s|-)?\d{3}(\s|-)?\d{4}$/;
    
    const result1 = us1regex.test(phone);
    const result2 = us2regex.test(phone);
    let result;

    if(result1 || result2){
        result = true
    }else{
        result =false;
    }
    
    return result;
    
  }
  
telephoneCheck("555-555-5555"); // should return true
telephoneCheck("1 555-555-5555") // should return true.
telephoneCheck("1 (555) 555-5555") // should return true.
telephoneCheck("5555555555") //should return true.
telephoneCheck("555-555-5555") //should return true.
telephoneCheck("(555)555-5555") //should return true.
telephoneCheck("1(555)555-5555") //should return true.
telephoneCheck("555-5555") //should return false.
telephoneCheck("5555555") //should return false.
telephoneCheck("1 555)555-5555") //should return false.
telephoneCheck("1 555 555 5555") //should return true.
telephoneCheck("1 456 789 4444") //should return true.
telephoneCheck("123**&!!asdf#") //should return false.
telephoneCheck("55555555") //should return false.
telephoneCheck("(6054756961)") //should return false.
telephoneCheck("2 (757) 622-7382") //should return false.
telephoneCheck("0 (757) 622-7382") //should return false.
telephoneCheck("-1 (757) 622-7382") //should return false.
telephoneCheck("2 757 622-7382") //should return false.
telephoneCheck("10 (757) 622-7382") //should return false.
telephoneCheck("27576227382") //should return false.
telephoneCheck("(275)76227382") //should return false.
telephoneCheck("2(757)6227382") //should return false.
telephoneCheck("2(757)622-7382") //should return false.
telephoneCheck("555)-555-5555") //should return false.
telephoneCheck("(555-555-5555") //should return false.
telephoneCheck("(555)5(55?)-5555") //should return false.
telephoneCheck("55 55-55-555-5") //should return false.
telephoneCheck("11 555-555-5555") //should return false.
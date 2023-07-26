function spinalCase(str){
    let mystring = str;
    mystring = mystring.replace(/([a-z])([A-Z])/g,"$1 $2");
    
    let myarray = mystring.split(/\W+|_+/);
   // console.log(myarray);

    const result = myarray.join("-").toLowerCase();
    
    //console.log(result);
    return result;
}

const firstresult = spinalCase("This Is Spinal Tap");
const secondresult = spinalCase("The_Andy_Griffith_Show");
const thirdresult = spinalCase("thisIsSpinalTap");
  
console.log(thirdresult);
  console.log(secondresult);
  console.log(firstresult);
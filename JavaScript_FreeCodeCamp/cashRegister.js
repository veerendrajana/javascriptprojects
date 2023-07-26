function checkCashRegister(price, cash, cid) {
    // Change all money to cents
    let change = (cash - price) * 100;
    let incash = cid;
    const changeResult = {
      "PENNY" : 0.01 * 100,
      "NICKEL" : 0.05 * 100,
      "DIME" : 0.1 * 100,
      "QUARTER" : 0.25 * 100,
      "ONE" : 1 * 100,
      "FIVE" : 5 * 100,
      "TEN" : 10 * 100,
      "TWENTY" : 20 * 100,
      "ONE HUNDRED" : 100 * 100
    }
    // Decalre and initiate a object for returning the values
    let returnObject = {
      status : "INSUFFICIENT_FUNDS",
      change : []
    }

    // Multiply with 100 in cid array
    let mycash = incash.map(function([curr, item]){
        return [curr,Math.round(item * 100)];
    });
    
    // Get the total cash in cid array
    let inDrawerCash = incash.reduce(function(acc,curr){
        acc = acc + curr[1];
        return acc;
    },0) * 100;
    
    // Compare higher values from end and push if the match is happened
    let changeArray = [];
    for(let i = mycash.length - 1; i >=0; i--){
      const [curr,val] = mycash[i];
      const currencyValue = changeResult[curr];
      
      let dewCurrency = Math.floor(change/currencyValue);
      let push_change = currencyValue * dewCurrency;
      if(dewCurrency > 0){
        if(change <= val && val >= currencyValue){
          changeArray.push([curr,push_change/100]);
          change = change - push_change;
          inDrawerCash = inDrawerCash - push_change;
        }else if(change > val && val > currencyValue){
          changeArray.push([curr,val/100]);
          inDrawerCash = inDrawerCash - push_change;
          change = change - val;
        }
      }
    }

    // Based on inDrawerCash set the status 
    if(inDrawerCash > 0 && changeArray.length != 0){
      returnObject.status = "OPEN";
      returnObject.change = changeArray;
    } else if(inDrawerCash == 0 && changeArray.length != 0){
      returnObject.status = "CLOSED";
      returnObject.change = cid;
    }

    return returnObject;
  }

  
  //console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
 // console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
  //console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
  //console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

function checkCashRegister(price, cash, cid) {
    let repayment = cash - price;
    //console.log("Repayment amount is", repayment);
    let changeDue = {status: "", change: []}
    let copyCid = [...cid];
    // mapping cid to proper value
    copyCid.forEach(arr => {
      switch(arr[0]) {
        case "PENNY":
          arr.unshift(0.01)
          break;
        case "NICKEL":
          arr.unshift(0.05)
          break;
        case "DIME":
          arr.unshift(0.1)
          break;  
        case "QUARTER":
          arr.unshift(0.25)
          break;  
        case "ONE":
          arr.unshift(1)
          break;  
        case "FIVE":
          arr.unshift(5)
          break;  
        case "TEN":
          arr.unshift(10)
          break;     
        case "TWENTY":
          arr.unshift(20)
          break;  
        case "ONE HUNDRED":
          arr.unshift(100)
          break;  
      }
    })
    //console.log(
    copyCid.reverse();
    
    for (let i = 0; i < copyCid.length; i++) {
      let changeAmount = 0;
      //console.log("Currency unit is", copyCid[i])
      while (repayment >= copyCid[i][0] && copyCid[i][2] != 0 && changeAmount < copyCid[i][2]) {
        changeAmount = parseFloat((changeAmount + copyCid[i][0]).toFixed(2)); 
        repayment = parseFloat((repayment - copyCid[i][0]).toFixed(2))
      }
      //console.log("Change amount is:", changeAmount)
      //console.log("Remaining repayment amount:", repayment)
      if (changeAmount !== 0 && copyCid[i][2] > repayment) {
        changeDue.change.push([copyCid[i][1], changeAmount]);
      }
    }
  
    if (repayment != 0) {
      changeDue.status = "INSUFFICIENT_FUNDS"
      return changeDue;
      //console.log(changeDue, "\n");
    } else if (changeDue.change.length == 1 && copyCid.some(arr => arr[2] == changeDue.change[0][1]) ) {
      changeDue.status = "CLOSED"
      copyCid.reverse().forEach(arr => arr.shift())
      changeDue.change = cid;
      //console.log(cid)
      return changeDue;
      //console.log(changeDue, "\n");
    } else {
      changeDue.status = "OPEN"
      return changeDue;
      //console.log(changeDue, "\n");
    }
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  //o
  
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
  //i
  
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  //o
  
  checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
  //c
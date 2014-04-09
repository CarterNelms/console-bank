var balance = 1000;
var quit = false;
var active = true;

function withdraw(amount)
{
  if(isValidAmount(amount))
  {
    balance -= amount;
    if (balance < 0) {
      var penaltyFee = 50;
      alert("You have overdrafted and have been charged a $" + penaltyFee + " penalty.");
      balance -= penaltyFee;
      if (balance < -750) {
        cancel();
      }
    }
  }
}

function deposit (amount)
{
  if(isValidAmount(amount))
  {
    balance += amount;
    if (amount >= 500) {
      var bonus = 25;
      balance += bonus;
      alert('Congratulations! You have earned a $' + bonus + ' bonus!');
    }
  }
}

function isValidAmount(amount)
{
  if(amount)
  {
    if(amount > 0)
    {
      return true;
    }
  }
  return false;
}

function quitATM ()
{
  quit = true;
  alert("Thank you for banking with us");
}

function cancel ()
{
  active = false;
  alert("Your account has been cancelled due to excessive overdraws");
}

while (!quit && active) {
  var transaction_type = prompt('Current Balance: $' + balance + '\n Welcome \n What would you like to do? \n (w)ithdraw (d)eposit (q)uit');
  transaction_type = transaction_type.toLowerCase();
  var amount;
  if (transaction_type === "w" || transaction_type === "d") {
    var action;
    if (transaction_type === "w") {
      action = "withdrawing";
    }
    else {
      action = "depositing";
    }
    amount = prompt("How much are you " + action + "?") * 1;
  }
  switch (transaction_type){
    case 'w':
      withdraw(amount);
      break;
    case 'd':
      deposit (amount);
      break;
    case 'q':
      quitATM();
      break;
    default:
      alert('Please enter a valid command');
  }
}

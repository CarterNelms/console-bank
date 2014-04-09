var balance = 1000;
var quit = false;
var active = true;

function withdraw(amount)
{
  balance -= amount;
  if (balance < 0) {
    balance -= 50;
    if (balance < -750) {
      cancel();

    }
  }
}

function deposit (amount)
{
  balance += amount;
  if (amount >= 500) {
    balance += 25;
  }
}

function quit ()
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
  var transaction_type = prompt('would you like to make a (w)ithdrawal or (d)eposit or (q)uit');
  var amount;
  if (transaction_type === "w" || transaction_type === "d") {
    var action;
    if (transaction_type === "w") {
      action = "withdrawing";
    }
    else {
      action = "depositing";
    }
    amount = prompt("how much are you " + action + "?");
  }
  switch (transaction_type){
    case 'w':
      withdraw(amount);

      break;
    case 'd':
      deposit (amount);
      break:
    case 'q':
      quit();
      break;

    default:
      alert("nothing");
      //prompt user if invalid command
  }
}

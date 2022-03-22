function createAccount(pin, amount = 0) {
  let acctPin = pin;
  let balance = amount;
  return {
    checkBalance(pin) {
      if (pin === acctPin) {
        return `$${balance}`;
      } else {
        return `Invalid PIN.`;
      }
    },
    deposit(pin, amount) {
      if (pin === acctPin) {
        balance += amount;
        return `Succesfully deposited $${amount}. Current balance: $${balance}.`;
      } else {
        return `Invalid PIN.`;
      }
    },
    withdraw(pin, amount) {
      if (pin === acctPin) {
        if (amount <= balance) {
          balance -= amount;
          return `Succesfully withdrew $${amount}. Current balance: $${balance}.`;
        } else {
          return `Withdrawal amount exceeds account balance. Transaction cancelled.`;
        }
      } else {
        return `Invalid PIN.`;
      }
    },
    changePin(oldPin, newPin) {
      if (oldPin === acctPin) {
        acctPin = newPin;
        return `PIN successfully changed!`;
      } else {
        return `Invalid PIN.`;
      }
    }
  }
}

module.exports = { createAccount };

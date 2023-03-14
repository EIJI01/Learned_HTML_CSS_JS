const perPersonTotalDiv = document.getElementById("perPersonTotal");
const numberOfPeopleDiv = document.getElementById("numberOfPeople");
//* Get value in tag.
let numberOfPeopleTotal = Number(numberOfPeopleDiv.innerText);

const calculateBill = () => {
  //* get value from id on html page.
  const billTotalInput = document.getElementById("billTotalInput");
  const tipInput = document.querySelector("#tipInput");
  //* calculate

  //* The bill variable is the bill amount without a tip.
  const bill = Number(billTotalInput.value);

  //* The tip variable is tip amount that think is percent.
  const tip = Number(tipInput.value) / 100;

  //* The tipAmount variable is an amount total tip.
  const tipAmount = bill * tip;

  //* The total variable is is an amount total bill.
  const total = tipAmount + bill;

  //* The perPersonTotals variable is amount that each person to pay.

  const perPersonTotal = total / numberOfPeopleTotal;

  //* Show update value to tag HTML.
  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`;
};

const increasePeople = () => {
  //* increase amount people one by one.
  numberOfPeopleTotal += 1;

  //* Show update value to tag HTML.
  numberOfPeopleDiv.innerText = numberOfPeopleTotal;

  //* call function for show value on tag {id = perPersonTotal};
  calculateBill();
};
const decreasePeople = () => {
  //* check numberOfPeopleTotal variable have to not equal -number .
  if (numberOfPeopleTotal <= 1) {
    return;
  }

  //* Decrease amount people one by one.
  numberOfPeopleTotal -= 1;

  //* Show update value to tag HTML.
  numberOfPeopleDiv.innerText = numberOfPeopleTotal;

  //* call function for show value on tag {id = perPersonTotal};
  calculateBill();
};

document.getElementById("btn-calculate").addEventListener("click", function () {
  function getElement(item) {
    const balanceField = document.getElementById(item);
    const balanceString = balanceField.value;
    const balance = parseInt(balanceString);
    return balance;
  }

  const mainBalance = getElement("main-balance");
  const foodCost = getElement("food");
  const rentCost = getElement("rent");
  const clothCost = getElement("cloth");

  const totalExpence = foodCost + rentCost + clothCost;

  const balanceTwo = mainBalance - totalExpence;

  document.getElementById("total-expence").innerText = totalExpence;

  document.getElementById("balance").innerText = balanceTwo;
});

document.getElementById("save").addEventListener("click", function () {
  function getElement(item) {
    const balanceField = document.getElementById(item);
    const balanceString = balanceField.value;
    const balance = parseInt(balanceString);
    return balance;
  }

  const mainBalance = getElement("main-balance");
  if(document.getElementById("main-balance").value===''){
    alert('first put your main balance')
  }
  else {
    const saveItem = getElement("saveItem");
    const save = (mainBalance * saveItem) / 100;
    document.getElementById("saving-ammount").innerText = save;
    const balanceField = document.getElementById("balance");
    const balanceString = balanceField.innerText;
    const balance = parseInt(balanceString);
  
    console.log(balance);
    const remainingBalance = balance - save;
  
    document.getElementById("remaining-balance").innerText = remainingBalance;
  }
 
 
});

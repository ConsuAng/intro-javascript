const button = document.querySelector('button');

const setFinal = () => {
  let amount = document.querySelector('#number').value;
  let total = +amount * 5000;
  let inputColor = document.querySelector('#color').value;
  let formatNumber = new Intl.NumberFormat('de-DE').format(total);
  
  if (isNaN(amount)) {
    alert("Es necesario introducir numeros válidos");
    amount = 0;
    let total = 0;
    document.querySelector('#final').textContent = total;
    document.querySelector('#amountFinal').textContent = amount;
  } else {
    document.querySelector('#final').textContent = formatNumber;
    document.querySelector('#amountFinal').textContent = amount;
  }

  document.querySelector('.circle').style.backgroundColor = inputColor;

  if (inputColor) {
    document.querySelector('.circle').style.border = "1px solid black";
  }
};

button.addEventListener("click", setFinal);
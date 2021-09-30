const intialPrice = document.querySelector("#intial-price");
const stocksQuantity = document.querySelector("#number-of-stocks");
const currentPrice = document.querySelector("#curent-price");
const btnClicked = document.querySelector("#btn-output");
const output = document.querySelector(".output");

btnClicked.addEventListener("click", () => {
  let initial = intialPrice.value;
  let stocks = stocksQuantity.value;
  let current = currentPrice.value;
  getProfitLossOfStocks(initial, stocks, current);
});

function getProfitLossOfStocks(initial, stocks, current) {
  if (initial !== "" || stocks !== "" || current !== "") {
    if (initial > current) {
      let loss = (initial - current) * stocks;
      let lossPercentage = (loss / initial) * 100;
      output.innerText = `Oops! you are in loss ${loss} by ${lossPercentage.toFixed()}%`;
      output.style.color = "red";

      console.log(loss, lossPercentage);
    } else if (current > initial) {
      let gain = (current - initial) * stocks;
      let gainPercentage = (gain / initial) * 100;
      output.innerText = `yayy! you are in gain ${gain} by ${gainPercentage.toFixed()}%`;
      output.style.color = "green";
      console.log(gain, gainPercentage);
    } else {
      output.innerText = "No Pain No Gain";
      output.style.color = "orange";
      console.log("No pain No Gain");
    }
  } else {
    output.innerText = "Please enter the Value";
    output.style.color = "red";
    alert("Enter the correct Values");
  }
}

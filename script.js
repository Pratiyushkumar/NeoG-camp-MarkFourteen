const intialPrice = document.querySelector("#intial-price");
const stocksQuantity = document.querySelector("#number-of-stocks");
const currentPrice = document.querySelector("#curent-price");
const btnClicked = document.querySelector("#btn-output");
const output = document.querySelector(".output");

btnClicked.addEventListener("click", () => {
  if (intialPrice !== "" && stocksQuantity !== "" && currentPrice !== "") {
    getProfitLossOfStocks(intialPrice, stocksQuantity, currentPrice);
  } else {
    alert("Enter the correct value");
  }
});

function getProfitLossOfStocks(intialPrice, stocksQuantity, currentPrice) {
  let initial = Number(intialPrice.value);
  let stocks = Number(stocksQuantity.value);
  let current = Number(currentPrice.value);
  if (initial > 0 && stocks > 0 && current > 0) {
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

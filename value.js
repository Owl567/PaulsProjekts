function fetchExchangeRates() {
    const exchangeRates = {
      USD: 1,
      EUR: 0.8446,
      GBP: 0.7327,
      BTC: 0.000020,
      ETH: 0.000655,
    };
    return exchangeRates;
  }

  function calculateExchangeRate() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("from-currency").value;
    const toCurrency = document.getElementById("to-currency").value;
    const exchangeRates = fetchExchangeRates();
    const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
    const result = (amount * rate).toFixed(2);
    document.getElementById("result").innerHTML =
    amount + " " + fromCurrency + " = " + result + " " + toCurrency;
  }

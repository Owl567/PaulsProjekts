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
    const daudzum = parseFloat(document.getElementById("daudzum").value);
    const No = document.getElementById("No").value;
    const Uz = document.getElementById("Uz").value;
    const exchangeRates = fetchExchangeRates();
    const rate = exchangeRates[Uz] / exchangeRates[No];
    const result = (daudzum * rate).toFixed(2);
    document.getElementById("result").innerHTML =
    daudzum + " " + No + " = " + result + " " + Uz;
  }

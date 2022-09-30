# Currency calculator
## Demo: 
https://jaroslawogonowski.github.io/currency-calculator/

The website presents the use of forms and their validation, BEM conventions and basic js functions.

I also carried out full js refactoring.
This is my first very complex code:

```console.log("HelloBigBrain!");
let startSum = document.querySelector(".js-startSum");
let yourCurrency = document.querySelector(".js-yourCurrency");
let exchangedCurrency = document.querySelector(".js-exchangedCurrency");
let exchangeRate = document.querySelector(".js-exchangeRate");
let receivedAmount = document.querySelector(".js-receivedAmount");
let receivedAmountCurrency = document.querySelector(".js-receivedAmountCurrency");
let button = document.querySelector(".form__button")
let form = document.querySelector(".js-form")

form.addEventListener("submit", (event) => {
    event.preventDefault();
})

exchangedCurrency.addEventListener("input", () => {
    switch (exchangedCurrency.value) {
        case "exchangedPLN":
            receivedAmountCurrency.innerText = "PLN";
            break;
        case "exchangedEUR":
            receivedAmountCurrency.innerText = "EUR";
            break;
        case "exchangedUSD":
            receivedAmountCurrency.innerText = "USD";
            break;
        case "exchangedGBP":
            receivedAmountCurrency.innerText = "GBP";
            break;
    }
});

form.addEventListener("input", () => {
    if (exchangedCurrency.value === "exchangedPLN" && yourCurrency.value === "USD") {
        exchangeRate.value = "4.71";
    } else if (exchangedCurrency.value === "exchangedEUR" && yourCurrency.value === "USD") {
        exchangeRate.value = "0.99";
    }
    else if (exchangedCurrency.value === "exchangedUSD" && yourCurrency.value === "USD") {
        exchangeRate.value = "1.00";
    }
    else if (exchangedCurrency.value === "exchangedGBP" && yourCurrency.value === "USD") {
        exchangeRate.value = "0.85";
    }
    else if (exchangedCurrency.value === "exchangedUSD" && yourCurrency.value === "USD") {
        exchangeRate.value = "1.00";
    }
    else if (exchangedCurrency.value === "exchangedUSD" && yourCurrency.value === "EUR") {
        exchangeRate.value = "1.01";
    } else if (exchangedCurrency.value === "exchangedUSD" && yourCurrency.value === "PLN") {
        exchangeRate.value = "0.21";
    }
    else if (exchangedCurrency.value === "exchangedUSD" && yourCurrency.value === "GBP") {
        exchangeRate.value = "1.15";
    }
    else if (exchangedCurrency.value === "exchangedEUR" && yourCurrency.value === "PLN") {
        exchangeRate.value = "0.21";
    }
    else if (exchangedCurrency.value === "exchangedUSD" && yourCurrency.value === "PLN") {
        exchangeRate.value = "0.21";
    }
    else if (exchangedCurrency.value === "exchangedGBP" && yourCurrency.value === "PLN") {
        exchangeRate.value = "0.18";
    }
    else if (exchangedCurrency.value === "exchangedPLN" && yourCurrency.value === "PLN") {
        exchangeRate.value = "1.00";
    }
    else if (exchangedCurrency.value === "exchangedPLN" && yourCurrency.value === "EUR") {
        exchangeRate.value = "4.66";
    }
    else if (exchangedCurrency.value === "exchangedPLN" && yourCurrency.value === "GBP") {
        exchangeRate.value = "5.38";
    }
    else if (exchangedCurrency.value === "exchangedEUR" && yourCurrency.value === "EUR") {
        exchangeRate.value = "1.00";
    }
    else if (exchangedCurrency.value === "exchangedUSD" && yourCurrency.value === "EUR") {
        exchangeRate.value = "0.99";
    }
    else if (exchangedCurrency.value === "exchangedGBP" && yourCurrency.value === "EUR") {
        exchangeRate.value = "0.86";
    }

    else if (exchangedCurrency.value === "exchangedEUR" && yourCurrency.value === "GBP") {
        exchangeRate.value = "1.14";
    }
    else if (exchangedCurrency.value === "exchangedGBP" && yourCurrency.value === "GBP") {
        exchangeRate.value = "1.00";
    }
})

button.addEventListener("click", () => {
    let result = startSum.value * exchangeRate.value
    receivedAmount.value = result.toFixed(2)
})

form.addEventListener("input", () => {
    receivedAmount.value = "Wprowadź wszystkie dane, a następnie przelicz";
    
```
Now it's shorter, tidy and legible.
It is also based on completely different assumptions than originally.

## Made by: Jarosław Ogonowski 2022
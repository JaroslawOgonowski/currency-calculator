{
    const welcome = () => { console.log("HelloBigBrain!"); }

    const formValidation = () => {
        const form = document.querySelector(".js-form");
        const receivedAmount = document.querySelector(".js-receivedAmount");
        form.addEventListener("input", () => {
            receivedAmount.value = "Wprowadź wszystkie dane, a następnie przelicz";
        })
        form.addEventListener("submit", (event) => {
            event.preventDefault();
        })
    }
    const baseCurrency = () => {
        const yourCurrency = document.querySelector(".js-yourCurrency");
        const startSum = document.querySelector(".js-startSum");
        const button = document.querySelector(".form__button");
        button.addEventListener("click", () => {
            switch (yourCurrency.value) {
                case "PLN":
                    return baseCurrencyResult = startSum.value;
                case "EUR":
                    return baseCurrencyResult = +startSum.value * 4.8698;
                case "USD":
                    return baseCurrencyResult = +startSum.value * 4.9533;
                case "GBP":
                    return baseCurrencyResult = +startSum.value * 5.556;
            }

        })
    }

    exchangedMoney = () => {
        const exchangedCurrency = document.querySelector(".js-exchangedCurrency");
        const receivedAmount = document.querySelector(".js-receivedAmount");
        const form = document.querySelector(".js-form")
        const button = document.querySelector(".form__button");
        button.addEventListener("click", () => {
            if (exchangedCurrency.value === "exchangedPLN") {
                receivedAmount.value = (+baseCurrencyResult).toFixed(2) + " PLN";

            } else if (exchangedCurrency.value === "exchangedEUR") {
                receivedAmount.value = (+baseCurrencyResult * 0.2053).toFixed(2) + " EUR";

            }
            else if (exchangedCurrency.value === "exchangedUSD") {
                receivedAmount.value = (+baseCurrencyResult * 0.2019).toFixed(2) + " USD";
            }
            else if (exchangedCurrency.value === "exchangedGBP") {
                receivedAmount.value = (+baseCurrencyResult * 0.18).toFixed(2) + " GBP";
            }

        })
    };
    welcome();
    formValidation();
    baseCurrency();
    exchangedMoney();
}
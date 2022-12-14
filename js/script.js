{
    let baseCurrencyResult;
    const welcome = () => {
        console.log("HelloBigBrain!");
    };

    const formValidation = () => {
        const form = document.querySelector(".js-form");
        form.addEventListener("input", () => {
            const receivedAmountElement = document.querySelector(".js-receivedAmountElement");
            receivedAmountElement.value = "Wprowadź wszystkie dane, a następnie przelicz";
        })
    };

    const baseCurrency = (startSum, yourCurrency) => {
        const button = document.querySelector(".form__button");
        button.addEventListener("click", (event) => {
            event.preventDefault();
            switch (yourCurrency) {
                case "PLN":
                    return baseCurrencyResult = +startSum;
                case "EUR":
                    return baseCurrencyResult = +startSum * 4.8698;
                case "USD":
                    return baseCurrencyResult = +startSum * 4.9533;
                case "GBP":
                    return baseCurrencyResult = +startSum * 5.556;
                case "BTC":
                    return baseCurrencyResult = +startSum * 94899.98;
            };
        });
    };
    exchangedMoney = (startSum, yourCurrency, exchangedCurrency, receivedAmountElement) => {
        const button = document.querySelector(".form__button");
        const thisSameCurrency = () => {
            if (exchangedCurrency === yourCurrency) {
                return receivedAmountElement.value = `${startSum} ${exchangedCurrency}`;
            }
        };
        const plnChange = () => {
            if (exchangedCurrency === "PLN") {
                return receivedAmountElement.value = `${baseCurrencyResult.toFixed(2)} ${exchangedCurrency}`;
            }
        };
        const euroChange = () => {
            if (exchangedCurrency === "EUR" && yourCurrency !== "EUR") {
                return receivedAmountElement.value = `${(+baseCurrencyResult * 0.2053).toFixed(2)} ${exchangedCurrency}`;
            }
        };
        const usdChange = () => {
            if (exchangedCurrency === "USD" && yourCurrency !== "USD") {
                return receivedAmountElement.value = `${(+baseCurrencyResult * 0.2019).toFixed(2)} ${exchangedCurrency}`;
            }
        };
        const gbpChange = () => {
            if (exchangedCurrency === "GBP" && yourCurrency !== "GBP") {
                return receivedAmountElement.value = `${(+baseCurrencyResult * 0.18).toFixed(2)} ${exchangedCurrency}`;
            }
        };
        const btcChange = () => {
            if (exchangedCurrency === "BTC" && yourCurrency !== "BTC") {
                return receivedAmountElement.value = `${(+baseCurrencyResult * 0.000011).toFixed(8)} ${exchangedCurrency}`;
            }
        };

        initialChange = () => {
            button.addEventListener("click", () => {
                gbpChange();
                usdChange();
                euroChange();
                plnChange();
                btcChange();
                thisSameCurrency();
            });
        };
    };

    const onFormSubmit = () => {
        const startSumElement = document.querySelector(".js-startSumElement");
        const yourCurrencyElement = document.querySelector(".js-yourCurrencyElement");
        const exchangedCurrencyElement = document.querySelector(".js-exchangedCurrencyElement");
        const receivedAmountElement = document.querySelector(".js-receivedAmountElement");
        const startSum = startSumElement.value;
        const yourCurrency = yourCurrencyElement.value;
        const exchangedCurrency = exchangedCurrencyElement.value;
        baseCurrency(startSum, yourCurrency);
        exchangedMoney(startSum, yourCurrency, exchangedCurrency, receivedAmountElement);
        initialChange();
    };
    const init = () => {
        welcome();
        formValidation();
        const form = document.querySelector(".js-form");
        form.addEventListener("input", onFormSubmit);
    };
    init();
}
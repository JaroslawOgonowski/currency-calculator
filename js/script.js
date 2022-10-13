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
            };
        });
    };
    exchangedMoney = (startSum, yourCurrency, exchangedCurrency, receivedAmountElement) => {
        const button = document.querySelector(".form__button");
        const plnChange = () => {
            button.addEventListener("click", () => {
                if (exchangedCurrency === "PLN")
                    return receivedAmountElement.value = `${baseCurrencyResult.toFixed(2)} ${exchangedCurrency}`;
            });
        };
        const euroChange = () => {
            button.addEventListener("click", () => {
                if (exchangedCurrency === "EUR" && yourCurrency === "EUR")
                    return receivedAmountElement.value = `${startSum} ${exchangedCurrency}`;
                else if (exchangedCurrency === "EUR" && yourCurrency !== "EUR")
                    return receivedAmountElement.value = `${(+baseCurrencyResult * 0.2053).toFixed(2)} ${exchangedCurrency}`;
            });
        };
        const usdChange = () => {
            button.addEventListener("click", () => {
                if (exchangedCurrency === "USD" && yourCurrency === "USD")
                    return receivedAmountElement.value = `${startSum} ${exchangedCurrency}`;
                else if (exchangedCurrency === "USD" && yourCurrency !== "USD")
                    return receivedAmountElement.value = `${(+baseCurrencyResult * 0.2019).toFixed(2)} ${exchangedCurrency}`;
            });
        };
        const gbpChange = () => {
            button.addEventListener("click", () => {
                if (exchangedCurrency === "GBP" && yourCurrency === "GBP")
                    return receivedAmountElement.value = `${startSum} ${exchangedCurrency}`;
                else if (exchangedCurrency === "GBP" && yourCurrency !== "GBP")
                    return receivedAmountElement.value = `${(+baseCurrencyResult * 0.18).toFixed(2)} ${exchangedCurrency}`;
            }
            )
        };

        initialChange = () => {
            gbpChange();
            usdChange();
            euroChange();
            plnChange();
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
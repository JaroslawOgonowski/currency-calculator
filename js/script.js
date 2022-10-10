{
    let baseCurrencyResult;
    const welcome = () => {
        console.log("HelloBigBrain!");
    };

    const formValidation = (receivedAmountElement) => {
        const form = document.querySelector(".js-form");
        form.addEventListener("input", () => {
            receivedAmountElement.value = "Wprowadź wszystkie dane, a następnie przelicz";
        })
        form.addEventListener("submit", (event) => {
            event.preventDefault();
        })
    };

    const baseCurrency = (startSumElement, yourCurrencyElement) => {
        const button = document.querySelector(".form__button");
        button.addEventListener("click", () => {
            switch (yourCurrencyElement.value) {
                case "PLN":
                    return baseCurrencyResult = +startSumElement.value;
                case "EUR":
                    return baseCurrencyResult = +startSumElement.value * 4.8698;
                case "USD":
                    return baseCurrencyResult = +startSumElement.value * 4.9533;
                case "GBP":
                    return baseCurrencyResult = +startSumElement.value * 5.556;
            };
        });
    };
    exchangedMoney = (startSumElement, yourCurrencyElement, exchangedCurrencyElement, receivedAmountElement) => {
        const button = document.querySelector(".form__button");
        const plnChange = () => {
            button.addEventListener("click", () => {
                if (exchangedCurrencyElement.value === "PLN")
                    return receivedAmountElement.value = `${baseCurrencyResult.toFixed(2)} ${exchangedCurrencyElement.value}`;
            });
        };
        const euroChange = () => {
            button.addEventListener("click", () => {
                if (exchangedCurrencyElement.value === "EUR" && yourCurrencyElement.value === "EUR")
                    return receivedAmountElement.value = `${startSumElement.value} ${exchangedCurrencyElement.value}`;
                else if (exchangedCurrencyElement.value === "EUR" && yourCurrencyElement.value !== "EUR")
                    return receivedAmountElement.value = `${(+baseCurrencyResult * 0.2053).toFixed(2)} ${exchangedCurrencyElement.value}`;
            });
        };
        const usdChange = () => {
            button.addEventListener("click", () => {
                if (exchangedCurrencyElement.value === "USD" && yourCurrencyElement.value === "USD")
                    return receivedAmountElement.value = `${startSumElement.value} ${exchangedCurrencyElement.value}`;
                else if (exchangedCurrencyElement.value === "USD" && yourCurrencyElement.value !== "USD")
                    return receivedAmountElement.value = `${(+baseCurrencyResult * 0.2019).toFixed(2)} ${exchangedCurrencyElement.value}`;
            });
        };
        const gbpChange = () => {
            button.addEventListener("click", () => {
                if (exchangedCurrencyElement.value === "GBP" && yourCurrencyElement.value === "GBP")
                    return receivedAmountElement.value = `${startSumElement.value} ${exchangedCurrencyElement.value}`;
                else if (exchangedCurrencyElement.value === "GBP" && yourCurrencyElement.value !== "GBP")
                    return receivedAmountElement.value = `${(+baseCurrencyResult * 0.18).toFixed(2)} ${exchangedCurrencyElement.value}`;
            }
            )};

        initialChange = () => {
            gbpChange();
            usdChange();
            euroChange();
            plnChange();
        };
    };
    const init = () => {
        welcome();
        const startSumElement = document.querySelector(".js-startSumElement");
        const yourCurrencyElement = document.querySelector(".js-yourCurrencyElement");
        const exchangedCurrencyElement = document.querySelector(".js-exchangedCurrencyElement");
        const receivedAmountElement = document.querySelector(".js-receivedAmountElement");

        formValidation(receivedAmountElement);
        baseCurrency(startSumElement, yourCurrencyElement);
        exchangedMoney(startSumElement, yourCurrencyElement, exchangedCurrencyElement, receivedAmountElement);
        initialChange();
    };
    init();

}
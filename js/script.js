


{
let baseCurrencyResult;
    const welcome = () => {
        console.log("HelloBigBrain!");
        sendElements();
    }


    const sendElements = () => {
        console.log("send elements działa");
        const startSumElement = document.querySelector(".js-startSumElement");
        const yourCurrencyElement = document.querySelector(".js-yourCurrencyElement");
        const exchangedCurrencyElement = document.querySelector(".js-exchangedCurrencyElement");
        const receivedAmountElement = document.querySelector(".js-receivedAmountElement");
        const startSum = startSumElement.value;
        const yourCurrency = yourCurrencyElement.value;
        const exchangedCurrency = exchangedCurrencyElement.value;
        let receivedAmount = receivedAmountElement.value;
        formValidation(startSum, yourCurrency, exchangedCurrency, receivedAmount);
           
    }

    const baseCurrency = (startSum, yourCurrency, exchangedCurrency, receivedAmount) => {
        console.log("base curr działa");
        const button = document.querySelector(".form__button");          
        button.addEventListener("click", () => {
            switch (yourCurrency) {
                case "PLN":
                    return baseCurrencyResult = +startSum;
                case "EUR":
                    return baseCurrencyResult = +startSum * 4.8698;
                case "USD":
                    return baseCurrencyResult = +startSum * 4.9533;
                case "GBP":
                    return baseCurrencyResult = +startSum * 5.556;
            }
        }) 
        
        exchangedMoney(startSum, yourCurrency, exchangedCurrency, receivedAmount);
    }

    const formValidation = (startSum, yourCurrency, exchangedCurrency, receivedAmount) => {
        console.log("form vali działa");
        const form = document.querySelector(".js-form");
        form.addEventListener("input", () => {
        receivedAmount = "Wprowadź wszystkie dane, a następnie przelicz";
        })
        form.addEventListener("submit", (event) => {
            event.preventDefault();
        })
        baseCurrency(startSum, yourCurrency, exchangedCurrency, receivedAmount);
    }

    const exchangedMoney = (startSum, yourCurrency, exchangedCurrency, receivedAmount) => {
        console.log("exch money działa");
        const button = document.querySelector(".form__button");
        const plnChange = () => {
            button.addEventListener("click", () => {
                if (exchangedCurrency === "exchangedPLN")
                    return receivedAmount = `${baseCurrencyResult.toFixed(2)} ${exchangedCurrency}`;
            })
        }

        const euroChange = (startSum, yourCurrency, exchangedCurrency, receivedAmount) => {
            console.log("wymiana euro");
            const button = document.querySelector(".form__button");
            button.addEventListener("click", () => {
                if (exchangedCurrency === "exchangedEUR" && yourCurrency === "EUR")
                    return receivedAmount = `${startSum} ${exchangedCurrency}`;
                else if (exchangedCurrency === "exchangedEUR" && yourCurrency !== "EUR")
                    return receivedAmount = `${(+baseCurrencyResult * 0.2053).toFixed(2)} ${exchangedCurrency}`;
            })
        }
        const usdChange = (startSum, yourCurrency, exchangedCurrency, receivedAmount) => {
            console.log("wymiana usd");
            const button = document.querySelector(".form__button");
            button.addEventListener("click", () => {
                if (exchangedCurrency === "exchangedUSD" && yourCurrency === "USD")
                    return receivedAmount = `${startSum} ${exchangedCurrency}`
                else if (exchangedCurrency === "exchangedUSD" && yourCurrency !== "USD")
                    return receivedAmount = `${(+baseCurrencyResult * 0.2019).toFixed(2)} ${exchangedCurrency}`;
            })
        }
        const gbpChange = (startSum, yourCurrency, exchangedCurrency, receivedAmount) => {
            console.log("wymiana gbp");
            const button = document.querySelector(".form__button");
            button.addEventListener("click", () => {
                if (exchangedCurrency === "exchangedGBP" && yourCurrency === "GBP")
                    return receivedAmount = `${startSum} ${exchangedCurrency}`
                else if (exchangedCurrency === "exchangedGBP" && yourCurrency !== "GBP")
                    return receivedAmount = `${(+baseCurrencyResult * 0.18).toFixed(2)} ${exchangedCurrency}`;
            }
            )
        }
        const initialChange = (startSum, yourCurrency, exchangedCurrency, receivedAmount) => {
            console.log("ini change działa!");
            console.log(startSum);
        console.log(yourCurrency);
        console.log(exchangedCurrency);
            plnChange(startSum, yourCurrency, exchangedCurrency, receivedAmount);
            gbpChange(startSum, yourCurrency, exchangedCurrency, receivedAmount);
            usdChange(startSum, yourCurrency, exchangedCurrency, receivedAmount);
            euroChange(startSum, yourCurrency, exchangedCurrency, receivedAmount);
        }
        initialChange(startSum, yourCurrency, exchangedCurrency, receivedAmount);
    }



    const init = () => {
        welcome();
    }

    init();
}
const saleBtn = document.querySelector(".sale-btn");
let cardSum = document.querySelectorAll(".card-sum span");
const sum = document.querySelector(".sum span");

function useSale() {

    const salesResult = [];

    for (const elem of cardSum) {
        cardSumNumber = Number(elem.innerHTML);
        cardSumSale = Math.ceil(cardSumNumber / 100 * 80);
        salesResult.push(cardSumSale);
    }

    cardSum[0].textContent = salesResult[0];
    cardSum[1].textContent = salesResult[1];
    cardSum[2].textContent = salesResult[2];

    sum.innerHTML = salesResult.reduce((currentSum, curretnNumber) => { return currentSum + curretnNumber });

    saleBtn.removeEventListener("click", useSale);
}

saleBtn.addEventListener("click", useSale);
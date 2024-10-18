import { handleAmount } from "../utils/money.js";

let Tran_Title, Tran_Amount,Tran_date,TranTotalAmount = 0,TranCount = 0;
const date = dayjs();
let Transactions = JSON.parse(localStorage.getItem("Transactions")) || [];
const transactions_modal = document.getElementById("new-transactions-dialog");
const openButton = document.querySelector(".add-transactions-button");
const closeButton = document.querySelector(".close");
const addTransactionButton = document.querySelector(".tran-addtransaction");
const transactionTitle = document.getElementById("tran-title");
const transactionAmount = document.querySelector(".tran-category-amount");
openButton.onclick = function () {
  transactions_modal.style.display = "flex";
  transactionTitle.value = "";
};
closeButton.onclick = function () {
  transactions_modal.style.display = "none";
};

addTransactionButton.onclick = function (e) {
  e.preventDefault();
  transactions_modal.style.display = "none";
};

document.querySelector(".tran-addtransaction").addEventListener("click", () => {
  addNewTransactionToLocalStorage();
  renderTransactions();
});

function addNewTransactionToLocalStorage() {

  Tran_Title = document.getElementById("tran-title").value;
  Tran_Amount = document.querySelector(".tran-category-amount").innerHTML;
  const parsedAmount = handleAmount(Tran_Amount);
  const newTransaction = {
    id: Transactions.length + 1,
    Tran_Title: Tran_Title,
    Tran_Amount: parsedAmount,
    Tran_Type: "deposit",
    Tran_Category: "",
    Tran_date : date.format("dddd, MMMM DD")
  };

  Transactions.unshift(newTransaction);
  localStorage.setItem("Transactions", JSON.stringify(Transactions));
  transactionTitle.value = "";
  transactionAmount.innerHTML = "₹ ";
}

function renderTransactions() {
  let storedTransactions = JSON.parse(localStorage.getItem("Transactions"));
  let renderedTransactions = ``;
  if (storedTransactions && storedTransactions.length > 0) {
    storedTransactions.forEach((transaction) => {
      Tran_Title = transaction.Tran_Title;
      Tran_Amount = transaction.Tran_Amount;
      TranTotalAmount += Number(Tran_Amount);
      TranCount += 1;
      Tran_date = transaction.Tran_date;
      const fromattedDate = date.format("dddd, MMMM DD");

      renderedTransactions += `
      <div class="transaction-of-samedate">
        <div class="trans-date">
          <span>${fromattedDate}</span>
        </div>
        <div class="transaction-details">
          <div class="one-transaction">
            <div style="display: flex; align-items: center;">
              <img class="transaction-category-icon" src="./assets/Icons/category_icons/entertainment-icon.png" alt="">
              <span class="transaction-title">${Tran_Title}</span>
            </div>
            <div>
              <span class="transaction-amount">
                <img  class="negitive-icon" src="./assets/Icons/dropdown-icon.png" alt="">
                ${Tran_Amount}</span>
            </div>
          </div>
        </div>
        <div class="trans-count">
          <span>Total cash flow: ₹${TranTotalAmount}</span>
          <span>${TranCount} Transactions</span>
        </div>
      `;
    });
    document.querySelector(".transactions-section").innerHTML =
      renderedTransactions;
      console.log('completed..')
  } else {
    console.log("No transactions available");
  }
}
renderTransactions();

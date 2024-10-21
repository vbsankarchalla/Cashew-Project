import { handleAmount } from "../utils/money.js";

const timeStamp = dayjs();
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

  const Tran_Title = document.getElementById("tran-title").value;
  const Tran_Amount = document.querySelector(".tran-category-amount").innerHTML;
  const parsedAmount = handleAmount(Tran_Amount);
  const newTransaction = {
    id: Transactions.length + 1,
    Tran_Title: Tran_Title,
    Tran_Amount: parsedAmount,
    Tran_Type: "deposit",
    Tran_Category: "",
    Tran_date : timeStamp,
  };

  Transactions.unshift(newTransaction);
  localStorage.setItem("Transactions", JSON.stringify(Transactions));
  transactionTitle.value = "";
  transactionAmount.innerHTML = "₹ ";
}

function renderTransactions() {

  let TranTotalAmount = 0, TranCount = 0, Tran_Amount = 0, transactionId =0;
  let storedTransactions = JSON.parse(localStorage.getItem("Transactions"));

  if (storedTransactions && storedTransactions.length > 0) {
    let previousDate = '';
    let renderedTransactions = '';

    Transactions.forEach(transaction => {
      const { Tran_Title, Tran_Amount, Tran_date, Tran_Category} = transaction;
      const fromattedDate = new Date(Tran_date).toLocaleDateString();
      transactionId = transaction.id;
      if (fromattedDate !== previousDate) {
        if (previousDate !== '') {
          renderedTransactions += `
          </div>
          </div>`;
        }
        renderedTransactions += `
          <div class="transaction-of-samedate">
            <div class="trans-date">
              <span>${fromattedDate}</span>
              <div class="tran-selection-options">
                <img class="tran-Edit-Icon" src="./assets/Icons/editpencil-icon.png" alt="">
                <img class="tran-Delete-Icon" src="./assets/Icons/bin-icon.svg" alt="">
              </div>
            </div>
            <div class="transaction-details">
            <ul id="transactionList" class="transactionList">
        `;
        previousDate = fromattedDate;
      }

      renderedTransactions += `
        <li class="one-transaction" data-id="${transaction.id}">
          <div style="display: flex; align-items: center;">
            <img class="transaction-category-icon" src="./assets/Icons/category_icons/Shopping-icon.png" alt="">
            <span class="transaction-title">${Tran_Title}</span>
          </div>
          <div>
            <span class="transaction-amount">
              <img class="negitive-icon" src="./assets/Icons/dropdown-icon.png" alt="">
              ₹${Tran_Amount}
            </span>
          </div>
        </li>
      `;
      TranTotalAmount += Number(Tran_Amount);
      TranCount += 1;
    });

    if (previousDate !== '') {
      renderedTransactions += `
           </ul>
          </div> <!-- Close .transaction-details -->
         </div> <!-- Close .transaction-of-samedate -->
         <div class="transCashFlow trans-count"></div>
         <div class="transCount trans-count"></div>
      `;
    }

    document.querySelector('.transactions-section').innerHTML =  renderedTransactions;
    document.querySelector('.transCashFlow').innerHTML = `Total cash flow : ₹ ${TranTotalAmount}`;
    document.querySelector('.transCount').innerHTML = `${TranCount} transactions`;
  } else {
    console.log("No transactions available");
  }

  document.querySelectorAll('.one-transaction').forEach(element => {
    element.addEventListener('click', () =>{
      element.classList.toggle('item-selected');
      console.log(transactionId);
    });
  });
}


renderTransactions();


import { handleAmount } from "../utils/money.js";

const timeStamp = dayjs();
let Transactions = JSON.parse(localStorage.getItem("Transactions")) || [];
const transactions_modal = document.getElementById("new-transactions-dialog");
const openButton = document.querySelector(".add-transactions-button");
const closeButton = document.querySelector(".close");
const addTransactionButton = document.querySelector(".tran-addtransaction");
const transactionTitle = document.getElementById("tran-title");
const transactionAmount = document.querySelector(".tran-category-amount");
let selectedTransactions = [];
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

  let TranTotalAmount = 0, TranCount = 0, Tran_Amount = 0, selectedItems = 0;
  let storedTransactions = JSON.parse(localStorage.getItem("Transactions"));

  if (storedTransactions && storedTransactions.length > 0) {
    let previousDate = '';
    let renderedTransactions = '';

    Transactions.forEach(transaction => {
      const { Tran_Title, Tran_Amount, Tran_date, Tran_Category, id} = transaction;
      const fromattedDate = new Date(Tran_date).toLocaleDateString();
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
        <li class="one-transaction" data-id="${id}">
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
      selectedItems += 1;
      let tranId = element.dataset.id;
      element.classList.toggle('item-selected');
      if(element.classList.contains('item-selected')) {
        selectedTransactions.push(tranId);
      } else {
        selectedTransactions = selectedTransactions.filter( id => id != tranId);
      }
      tranId = selectedTransactions[0];
      updateActionIcons(tranId);      
    });
  });
}

function updateActionIcons(tranId) {
  const dateGroups = document.querySelectorAll('.transaction-of-samedate');
  dateGroups.forEach(dateGroup => {
    let tranEditIcon = dateGroup.querySelector('.tran-Edit-Icon');
    let tranDeleteIcon = dateGroup.querySelector('.tran-Delete-Icon');
    const selectedItemsInGroup = dateGroup.querySelectorAll('.one-transaction.item-selected').length;
    if (selectedTransactions.length === 1 && selectedItemsInGroup === 1) {
      tranEditIcon.style.display = "flex";
      tranDeleteIcon.style.display = "flex";
      document.querySelectorAll('.tran-Edit-Icon').forEach(option => {
        option.addEventListener('click',() =>{
          editTransaction(tranId);
        });
      });
    } else {
      tranEditIcon.style.display = "none";
    }
    if (selectedTransactions.length > 0 ) {
      tranDeleteIcon.style.display = "flex";
    } else {
      tranDeleteIcon.style.display = "none";
    }
  });
}

function editTransaction(tranId) {
  transactions_modal.style.display = "flex";
  let storedTransactions = JSON.parse(localStorage.getItem("Transactions"));
  let transaction = storedTransactions.find(obj => tranId == obj.id );
  let {Tran_Amount,Tran_Category,Tran_Title,Tran_Type,Tran_date,id} = transaction;
  let dialogHTML = '';
  dialogHTML = `
  <div class="modal-content">
          <span class="add-transaction-header">Add Transaction</span>
          <span class="close" id="close-dialog">&times;</span>
          <div id="add-transaction-form">
            <div class="tran-top-section">
              <div class="tran-type">
                <div class="transaction-Expense">
                  <img
                    class="transaction-indicator"
                    src="./assets/Icons/dropdown-icon.png"
                    alt=""
                  />
                  <span>Expense</span>
                </div>
                <div class="transaction-Income">
                  <img
                    class="transaction-indicator"
                    src="./assets/Icons/up-arrow-icon.webp"
                    alt=""
                  />
                  <span>Income</span>
                </div>
                <div class="transaction-Transfer">
                  <img
                    class="transaction-indicator"
                    src="./assets/Icons/facing arrows-icon.webp"
                    alt=""
                  />
                  <span>Transfer</span>
                </div>
              </div>
              <div class="tran-amount-section">
                <img
                  class="tran-category-icon"
                  src="./assets/Icons/category_icons/Bills & Fees-icon.png"
                  alt=""
                />
                <span contenteditable="true" class="tran-category-amount"
                  >₹ ${Tran_Amount}
                </span>
              </div>
            </div>
            <div class="tran-bottom-section">
              <div class="time-stamp-section">
                <div class="time-stamp-leftsection">
                  <img
                    class="calender-icon"
                    src="./assets/Icons/calender-icon.webp"
                    alt=""
                  />
                  <span class="time-stamp-today">Today</span>
                </div>
                <div>
                  <span class="time-stamp-rightsection">Time</span>
                </div>
              </div>
              <div class="tran-banks-section">
                <div>
                  <button class="down-option">▾</button>
                  <button class="option1">HDFC</button>
                  <button class="option2">SBI</button>
                  <button class="option3">UCO</button>
                  <button class="option4">Wallet</button>
                  <button class="add-option">+</button>
                </div>
              </div>
              <div class="tran-description">
                <input
                  type="text"
                  id="tran-title"
                  name="tran-title"
                  placeholder="Title"
                  value = ${Tran_Title}
                  required
                />
                <input
                  type="text"
                  id="tran-notes"
                  name="tran-notes"
                  placeholder="Notes"
                />
                <!-- <a href="http://127.0.0.1:5500/Transactions.html"> -->
                <button type="submit" class="tran-updatetransaction">
                  Update Transaction
                </button>
                <!-- </a> -->
              </div>
            </div>
          </div>
        </div>
  `;
  document.querySelector('#new-transactions-dialog').innerHTML = dialogHTML;
  document.querySelector('#close-dialog').addEventListener('click',() =>{
    transactions_modal.style.display = "none";
  });
  document.querySelector(".tran-updatetransaction").addEventListener("click", () => {
    updateTransaction(tranId);
    renderTransactions();
  });

}

function updateTransaction(tranId) {
  let storedTransactions = JSON.parse(localStorage.getItem("Transactions"));
  storedTransactions = storedTransactions.filter(obj => tranId != obj.id );
  if(storedTransactions) {
    localStorage.setItem("Transactions", JSON.stringify(storedTransactions));
  }
}

renderTransactions();


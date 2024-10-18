let Tran_Title,Tran_Amount;

let Transactions = JSON.parse(localStorage.getItem('Transactions')) || [];


// Get the modal, button, and close elements
const transactions_modal = document.getElementById("new-transactions-dialog");
const openButton = document.querySelector(".add-transactions-button");
const closeButton = document.querySelector(".close");
const addTransactionButton = document.querySelector(".tran-addtransaction");
const transactionTitle = document.getElementById("tran-title");
const transactionAmount = document.querySelector('.tran-category-amount');
// When the user clicks the button, open the modal
  openButton.onclick = function() {
  transactions_modal.style.display = "flex";
  // Clear the transaction title field when the dialog opens
  transactionTitle.value = "";
  // You can clear other fields like notes, amount, etc. similarly if needed.
}
// When the user clicks on <span> (x), close the modal
closeButton.onclick = function() {
 transactions_modal.style.display = "none";
}

// When the user clicks the 'Add Transaction' button
addTransactionButton.onclick = function(e) {
  e.preventDefault(); // Prevent the default form submission

  // Here you can add the code to handle the transaction logic, like saving the data

  // Close the modal after adding the transaction
  transactions_modal.style.display = "none";
  
}



document.querySelector('.tran-addtransaction').addEventListener('click', () => {
  Tran_Title = document.getElementById("tran-title").value;
  Tran_Amount = document.querySelector('.tran-category-amount').innerHTML;

  const newTransaction = {
    id: Transactions.length + 1,
    Tran_Title : Tran_Title,
    Tran_Amount : Tran_Amount,
    Tran_Type: 'deposit',
    Tran_Category : '',
};

Transactions.unshift(newTransaction);
localStorage.setItem('Transactions', JSON.stringify(Transactions));

  // Optionally clear the form fields again after the transaction is added
  transactionTitle.value = "";
  transactionAmount.innerHTML = "₹ ";
  let storedTransactions = JSON.parse(localStorage.getItem('Transactions'));
  console.log(storedTransactions);

// document.querySelector(".transaction-details").innerHTML +=  `
// <div class="one-transaction">
//   <div style="display: flex; align-items: center;">
//     <img class="transaction-category-icon" src="./assets/Icons/category_icons/entertainment-icon.png" alt="">
//     <span class="transaction-title">${Tran_Title}</span>
//   </div>
//   <div>
//     <span class="transaction-amount">
//       <img  class="negitive-icon" src="./assets/Icons/dropdown-icon.png" alt="">
//       ${Tran_Amount}</span>
//   </div>
// </div>
// `;
});



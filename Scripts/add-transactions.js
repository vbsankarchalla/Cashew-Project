
let Transactions = JSON.parse(localStorage.getItem('Transactions')) || [];


localStorage.setItem('Transactions',JSON.stringify(Transactions));

// Get the modal, button, and close elements
const transactions_modal = document.getElementById("new-transactions-dialog");
const openButton = document.querySelector(".add-transactions-button");
const closeButton = document.querySelector(".close");

// When the user clicks the button, open the modal
  openButton.onclick = function() {
   transactions_modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
closeButton.onclick = function() {
 transactions_modal.style.display = "none";
}

// // Handle form submission
// const form = document.getElementById('add-transaction-form');
// form.addEventListener('submit', function (event) {
//   // event.preventDefault(); // Prevent form from refreshing the page
// });



let Tran_Title,Tran_Amount;
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

localStorage.setItem('Transactions') = JSON.stringify(Transactions);
console.log('Transaction added sucessfully : ', newTransaction);

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


